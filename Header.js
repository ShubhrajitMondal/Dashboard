import React from "react";
import Link from "./Link";
const Header = () =>{
    return (
        <div className="ui secondery pointing menu">
            <Link href="/" className="item">
                Accordion
            </Link>
            <Link href="/list" className="item">
                Search
            </Link>
            <Link href="/dropdown" className="item">
                Dropdown
            </Link>
            <Link href="/translet" className="item">
                Translet
            </Link>
        </div>
    );
};

export default Header;