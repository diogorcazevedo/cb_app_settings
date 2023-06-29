import React from 'react';
import StoreHead from '@/Layouts/Store/StoreHead';
import StoreFooter from '@/Layouts/Store/StoreFooter';


export default function Store({ children}) {


    return (
        <>
            <StoreHead></StoreHead>
                {children}
            <StoreFooter></StoreFooter>
        </>


    );
}
