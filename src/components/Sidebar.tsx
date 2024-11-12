import React, { useState } from "react";
import Logo from "../../public/images/logo.png";
import { NavLink } from "react-router-dom";

export default function Sidebar({ children }: { children: React.ReactNode }) {
    return (
        <aside className="h-screen">
            <div className="flex h-full w-60 flex-col gap-12 bg-teal-600">
                <header className="flex items-center justify-center bg-teal-800 py-2">
                    <NavLink to="/">
                        <img
                            className="h-16 w-20"
                            src={Logo}
                            alt="Queply Innovations Logo"
                        />
                    </NavLink>
                </header>
                <main>
                    <div>
                        <ul className="opacity-56 flex flex-col justify-start gap-4 px-12 text-lg text-white">
                            {children}
                        </ul>
                    </div>
                </main>
            </div>
        </aside>
    );
}
