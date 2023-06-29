<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



use App\Http\Controllers\CheckOutController;
use App\Http\Controllers\CheckOutLegacyController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LandingController;
use App\Http\Controllers\MetaController;
use App\Http\Controllers\PoliciesController;
use App\Http\Controllers\SiteAdmin\GemController;
use App\Http\Controllers\SiteAdmin\GoogleController;
use App\Http\Controllers\SiteAdmin\ProductController;
use App\Http\Controllers\SiteAdmin\ProductImageController;
use App\Http\Controllers\SiteAdmin\SiteController;
use App\Http\Controllers\SiteAdmin\SubCategoryController;
use App\Http\Controllers\SiteAdmin\TopicController;
use App\Http\Controllers\StaticStoreController;
use App\Http\Controllers\StoreController;
use App\Http\Controllers\DashBoardController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\InstitucionalController;


//Route::get('/', function () {
//    return Inertia::render('Welcome', [
//        'canLogin' => Route::has('login'),
//        'canRegister' => Route::has('register'),
//        'laravelVersion' => Application::VERSION,
//        'phpVersion' => PHP_VERSION,
//    ]);
//});


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});



//---- EXTERNAL
Route::get('admin/ceo',                                    [DashBoardController::class, 'ceo'])->name('ceo');
Route::get('admin/supervisor_web/index',                   [DashBoardController::class, 'supervisor_web'])->name('supervisor.web');
Route::get('admin/vendedor/index',                         [DashBoardController::class, 'sv'])->name('sv.index');

//---- ADMIN
Route::get('/admin/dashboard',                             [DashBoardController::class, 'index'])->name('dashboard')->middleware(['auth', 'verified','check']);
Route::get('/admin/dashboard/index',                       [DashBoardController::class, 'index'])->name('dashboard')->middleware(['auth', 'verified','check']);


//---- ROTAS
Route::get('/',                                             [HomeController::class, 'index']);
Route::get('/home',                                         [HomeController::class, 'index'])->name('home');



Route::get('user/create',                                   [UserController::class, 'create'])->name('user.create');
Route::get('user/store',                                    [UserController::class, 'store'])->name('user.store');
Route::get('user/index',                                    [UserController::class, 'index'])->name('user.index')->middleware(['auth', 'verified','check']);
Route::get('user/edit/{user}',                              [UserController::class, 'edit'])->name('user.edit')->middleware(['auth', 'verified','check']);
Route::post('user/update/{user}',                           [UserController::class, 'update'])->name('user.update')->middleware(['auth', 'verified','check']);
Route::get('user/destroy/{user}',                           [UserController::class, 'destroy'])->name('user.destroy')->middleware(['auth', 'verified','check']);
Route::get('user/password/{user}',                          [UserController::class, 'password'])->name('user.password')->middleware(['auth', 'verified','check']);
Route::get('user/update_password/{user}',                   [UserController::class, 'update_password'])->name('user.update.password')->middleware(['auth', 'verified','check']);



//SITE ADMIN

Route::any('site/index/{collection?}/{category?}',         [SiteController::class, 'index'])->name('site.index')->middleware(['auth', 'verified','check']);
Route::get('site/add',                                     [SiteController::class, 'add'])->name('site.add')->middleware(['auth', 'verified','check']);
Route::post('site/revoke',                                 [SiteController::class, 'revoke'])->name('site.revoke')->middleware(['auth', 'verified','check']);



Route::any('product/index/{collection?}/{category?}',        [ProductController::class, 'index'])->name('product.index')->middleware(['auth', 'verified','check']);
Route::get('product/create',                                 [ProductController::class, 'create'])->name('product.create')->middleware(['auth', 'verified','check']);
Route::post('product/store',                                 [ProductController::class, 'store'])->name('product.store')->middleware(['auth', 'verified','check']);
Route::get('product/edit/{id}',                              [ProductController::class, 'edit'])->name('product.edit')->middleware(['auth', 'verified','check']);
Route::get('product/publish/{id}',                           [ProductController::class, 'publish'])->name('product.publish')->middleware(['auth', 'verified','check']);
Route::post('product/update/{id}',                           [ProductController::class, 'update'])->name('product.update')->middleware(['auth', 'verified','check']);
Route::get('product/destroy/{id}',                           [ProductController::class, 'destroy'])->name('product.destroy')->middleware(['auth', 'verified','check']);

Route::get('product/images/index/{id}',                      [ProductController::class, 'images'])->name('product.images.index')->middleware(['auth', 'verified','check']);
Route::post('product/image/store/{id}',                      [ProductController::class, 'imageStore'])->name('product.image.store')->middleware(['auth', 'verified','check']);
Route::get('product/image_destroy/{image}',                  [ProductController::class, 'imageDestroy'])->name('product.image.destroy')->middleware(['auth', 'verified','check']);

Route::post('product/price_change/{id}',                     [ProductController::class, 'price_change'])->name('product.price.change')->middleware(['auth', 'verified','check']);
Route::post('product/price_store/{id}',                      [ProductController::class, 'price_store'])->name('product.price.store')->middleware(['auth', 'verified','check']);
Route::get('product/image/download/{id}',                    [ProductImageController::class, 'download'])->name('product.image.download')->middleware(['auth', 'verified','check']);

Route::get('product/add_topic/{topic}/{product}',            [ProductController::class, 'add_topic'])->name('product.add_topic')->middleware(['auth', 'verified','check']);
Route::get('product/remove_topic/{topic}/{product}',         [ProductController::class, 'remove_topic'])->name('product.remove_topic')->middleware(['auth', 'verified','check']);


Route::any('topic/index/',                                          [TopicController::class, 'index'])->name('topic.index')->middleware(['auth', 'verified','check']);
Route::get('topic/create',                                          [TopicController::class, 'create'])->name('topic.create')->middleware(['auth', 'verified','check']);
Route::post('topic/store',                                          [TopicController::class, 'store'])->name('topic.store')->middleware(['auth', 'verified','check']);
Route::get('topic/show/{topic}',                                    [TopicController::class, 'show'])->name('topic.show')->middleware(['auth', 'verified','check']);
Route::any('topic/products/{topic}/{collection?}/{category?}',      [TopicController::class, 'products'])->name('topic.products')->middleware(['auth', 'verified','check']);
Route::get('topic/edit/{topic}',                                    [TopicController::class, 'edit'])->name('topic.edit')->middleware(['auth', 'verified','check']);
Route::post('topic/update/{topic}',                                 [TopicController::class, 'update'])->name('topic.update')->middleware(['auth', 'verified','check']);
Route::get('topic/destroy/{topic}',                                 [TopicController::class, 'destroy'])->name('topic.destroy')->middleware(['auth', 'verified','check']);
Route::get('topic/publish/{topic}',                                 [TopicController::class, 'publish'])->name('topic.publish')->middleware(['auth', 'verified','check']);

Route::get('topic/images/index/{topic}',                            [TopicController::class, 'images'])->name('topic.images.index')->middleware(['auth', 'verified','check']);
Route::post('topic/image/store/{topic}',                            [TopicController::class, 'imageStore'])->name('topic.image.store')->middleware(['auth', 'verified','check']);
Route::get('topic/image_destroy/{image}',                           [TopicController::class, 'imageDestroy'])->name('topic.image.destroy')->middleware(['auth', 'verified','check']);
Route::get('topic/image/download/{id}',                             [TopicController::class, 'download'])->name('topic.image.download')->middleware(['auth', 'verified','check']);

Route::any('subcategory/index/',                                    [SubCategoryController::class, 'index'])->name('subcategory.index')->middleware(['auth', 'verified','check']);
Route::get('subcategory/create',                                    [SubCategoryController::class, 'create'])->name('subcategory.create')->middleware(['auth', 'verified','check']);
Route::post('subcategory/store',                                    [SubCategoryController::class, 'store'])->name('subcategory.store')->middleware(['auth', 'verified','check']);
Route::get('subcategory/edit/{subcategory}',                        [SubCategoryController::class, 'edit'])->name('subcategory.edit')->middleware(['auth', 'verified','check']);
Route::post('subcategory/update/{subcategory}',                     [SubCategoryController::class, 'update'])->name('subcategory.update')->middleware(['auth', 'verified','check']);
Route::get('subcategory/destroy/{subcategory}',                     [SubCategoryController::class, 'destroy'])->name('subcategory.destroy')->middleware(['auth', 'verified','check']);
Route::get('subcategory/show/{subcategory}',                        [SubCategoryController::class, 'show'])->name('subcategory.show')->middleware(['auth', 'verified','check']);

Route::any('subcategory/products/{category}/{collection?}',         [SubCategoryController::class, 'products'])->name('subcategory.products')->middleware(['auth', 'verified','check']);
Route::get('subcategory/add/{product}/{subcategories}',             [SubCategoryController::class, 'add'])->name('subcategory.add')->middleware(['auth', 'verified','check']);
Route::get('subcategory/remove/{product}/{subcategories}',          [SubCategoryController::class, 'remove'])->name('subcategory.remove')->middleware(['auth', 'verified','check']);

Route::any('gem/index/',                                            [GemController::class, 'index'])->name('gem.index')->middleware(['auth', 'verified','check']);
Route::get('gem/create',                                            [GemController::class, 'create'])->name('gem.create')->middleware(['auth', 'verified','check']);
Route::post('gem/store',                                            [GemController::class, 'store'])->name('gem.store')->middleware(['auth', 'verified','check']);
Route::get('gem/edit/{gem}',                                        [GemController::class, 'edit'])->name('gem.edit')->middleware(['auth', 'verified','check']);
Route::post('gem/update/{gem}',                                     [GemController::class, 'update'])->name('gem.update')->middleware(['auth', 'verified','check']);
Route::get('gem/destroy/{gem}',                                     [GemController::class, 'destroy'])->name('gem.destroy')->middleware(['auth', 'verified','check']);
Route::get('gem/show/{gem}',                                        [GemController::class, 'show'])->name('gem.show')->middleware(['auth', 'verified','check']);


Route::get('gem/products/{collection?}/{category?}',                [GemController::class, 'products'])->name('gem.products')->middleware(['auth', 'verified','check']);
Route::get('gem/add/{product}/{gem}',                               [GemController::class, 'add'])->name('gem.add')->middleware(['auth', 'verified','check']);
Route::get('gem/remove/{product}/{gem}',                            [GemController::class, 'remove'])->name('gem.remove')->middleware(['auth', 'verified','check']);


Route::get('meta/product/{product}',                                [MetaController::class, 'product'])->name('meta.product');
Route::get('image/download/{id}',                                   [ImageController::class, 'download'])->name('image.download');
Route::get('google/merchant',                                       [GoogleController::class, 'merchant'])->name('google.merchant');


require __DIR__.'/auth.php';
