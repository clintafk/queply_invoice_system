import React from "react";
import Sidebar from "@/components/Sidebar";
import SidebarItem from "@/components/Sidebar";
import { MdDashboard } from "react-icons/md";
import { MdOutlineRequestPage } from "react-icons/md";
import { MdGroups } from "react-icons/md";

export default function Clients() {
    return (
        <>
            <div className="flex h-screen flex-row">
                <Sidebar>
                    <SidebarItem Icon={MdDashboard} text="Dashboard" to="/" />
                    <SidebarItem
                        Icon={MdOutlineRequestPage}
                        text="Invoices"
                        to="/invoices"
                    />
                    <SidebarItem Icon={MdGroups} text="Clients" to="/clients" />
                </Sidebar>
            </div>
        </>
    );
}
