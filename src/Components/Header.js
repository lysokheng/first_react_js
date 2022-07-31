import React from "react";
import Navigation from "./Navigation";

function Header() {
    return (
        <header className="p-3 border-b font-bold flex justify-between items-center">
            <span className="font-bold">
                AppName
            </span>

            <Navigation/>
        </header>
    )
}

export default Header