import { useState } from "react";

import Sidebar from "./components/Sidebar";
import SidebarItem from "./components/SidebarItem";
import { IoIosArrowDown } from "react-icons/io";
// react-icons icons
import { MdDashboard } from "react-icons/md";
import { MdOutlineRequestPage } from "react-icons/md";
import { MdGroups } from "react-icons/md";
import { MdPerson } from "react-icons/md";
import { MdPeople } from "react-icons/md";
import { MdSettings } from "react-icons/md";
import { MdLogout } from "react-icons/md";
// ShadCN components
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./components/ui/button";

export default function App() {
    return (
        <>
            <div className="flex h-screen w-screen flex-row">
                <Sidebar>
                    <SidebarItem Icon={MdDashboard} text="Dashboard" to="/" />
                    <SidebarItem
                        Icon={MdOutlineRequestPage}
                        text="Invoices"
                        to="/invoices"
                    />
                    <SidebarItem Icon={MdGroups} text="Clients" to="/clients" />
                </Sidebar>
                <div className="w-full">
                    <header className="flex flex-row justify-between rounded-sm border-b px-10 py-7">
                        <span className="text-sm font-light">
                            Queply Innovations
                        </span>
                        <div className="flex cursor-pointer flex-row items-center gap-2 text-sm font-light hover:text-teal-500">
                            <DropdownMenu>
                                <DropdownMenuTrigger className="flex flex-row items-center gap-2">
                                    <div>
                                        <span>John</span>
                                        <span> Doe</span>
                                    </div>
                                    <IoIosArrowDown />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="mb-1 mt-1">
                                    <DropdownMenuLabel className="flex flex-row items-center gap-2 rounded">
                                        <MdPerson />
                                        Profile
                                    </DropdownMenuLabel>
                                    <DropdownMenuLabel className="flex flex-row items-center gap-2 rounded">
                                        <MdPeople />
                                        Manage Users
                                    </DropdownMenuLabel>
                                    <DropdownMenuLabel className="flex flex-row items-center gap-2 rounded">
                                        <MdSettings />
                                        Settings
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuLabel className="flex flex-row items-center gap-2 rounded">
                                        <MdLogout />
                                        Logout
                                    </DropdownMenuLabel>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </header>
                    <main className="bg-body">
                        <div className="flex justify-between px-10 py-7">
                            <p className="text-xl font-bold">Dashboard</p>
                            <Button className="items-center gap-2 rounded bg-teal-500 hover:bg-teal-600">
                                Add new
                                <IoIosArrowDown />
                            </Button>
                        </div>
                        <div className="flex flex-row gap-7 px-10 py-7">
                            <div className="w-1/2 rounded border border-gray-border-2 bg-white">
                                <div className="flex justify-between border-b border-b-gray-border-2 px-5 py-3">
                                    <span>Recent Activity</span>
                                    <a
                                        href="/"
                                        className="font-medium text-teal-500 hover:text-teal-600"
                                    >
                                        View Activity Log
                                    </a>
                                </div>
                                <div className="flex justify-start border-b border-t border-b-gray-border-2 border-t-gray-border-2 px-5 py-3">
                                    <span>10 minutes ago</span>
                                    <span> - </span>
                                    <span>
                                        Invoice created for Blueberry energy
                                    </span>
                                </div>
                                <div className="flex justify-start border border-gray-border-2 px-5 py-3">
                                    <span>10 minutes ago</span>
                                    <span> - </span>
                                    <span>
                                        Invoice created for Blueberry energy
                                    </span>
                                </div>
                            </div>
                            <div className="w-1/2 rounded border border-gray-border-2">
                                <div className="flex justify-between px-5 py-3">
                                    <span>Recent Activity</span>
                                    <a
                                        href="/"
                                        className="font-medium text-teal-500"
                                    >
                                        View Activity Log
                                    </a>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
