import { children } from "react";

export default function Navbar({children}){
    return <div>
        <h1 className="border-b p-10">APPBAR</h1>
        {children}
    </div>
}