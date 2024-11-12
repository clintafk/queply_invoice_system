import React from "react";
import Sidebar from "@/components/Sidebar";
import SidebarItem from "@/components/Sidebar";
import { MdDashboard } from "react-icons/md";
import { MdOutlineRequestPage } from "react-icons/md";
import { MdGroups } from "react-icons/md";

export default function Invoices() {
    return (
        <>
            <div className="flex h-screen flex-row">
                <Sidebar>
                    <p> Hello World </p>
                </Sidebar>
            </div>
        </>
    );
}
