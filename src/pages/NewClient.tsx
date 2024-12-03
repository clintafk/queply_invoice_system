import Sidebar from "@/components/Sidebar";
import SidebarItem from "@/components/SidebarItem";
import { Button } from "@/components/ui/button";
import Add_Client_Form from "@/forms/Add_Client_Form";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoIosArrowDown } from "react-icons/io";
// react-icons icons
import {
    MdDashboard,
    MdOutlineRequestPage,
    MdGroups,
    MdPerson,
    MdPeople,
    MdSettings,
    MdLogout,
} from "react-icons/md";

export default function NewClient() {
    return (

            <div className="w-full">
                <main className="flex flex-col gap-5 bg-body px-10 py-7">
                    <Breadcrumb>
                        <BreadcrumbList className="text-3xl">
                            <BreadcrumbItem>
                                <BreadcrumbLink
                                    className="text-3xl font-semibold"
                                    href="/clients"
                                >
                                    Clients
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink
                                    className="text-3xl font-semibold text-black"
                                    href="/"
                                >
                                    Create
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <Add_Client_Form/>
                </main>
            </div>
    );
}
