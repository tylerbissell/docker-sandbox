import React, { useEffect, useState } from 'react'
import HeaderView from './HeaderView';

export function HeaderContainer() {

    const [var1, setVar1] = useState("Header");
    useEffect(() => {
        // Perform all side-effects and business logic in this component.
        // Also event handlers can go here if suitable.
        setVar1("Header");
        return () => {
            console.log("cleanup");
        }
    }, []);

    return (
        <>
            <HeaderView data={var1} />
        </>
    )
}