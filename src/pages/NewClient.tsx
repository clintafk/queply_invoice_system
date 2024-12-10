import Sidebar from "@/components/Sidebar";
import SidebarItem from "@/components/SidebarItem";
import { Button } from "@/components/ui/button";

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

function NewClient() {
    return (
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
            <div className="flex w-custom-724 flex-col rounded-sm border border-gray-border bg-white">
                <div className="flex w-full flex-col gap-10px px-8 py-8">
                    <div className="flex gap-5">
                        <div className="flex w-1/2 flex-col gap-1">
                            <label htmlFor="">Name</label>
                            <input
                                className="rounded-sm border border-gray-border bg-white px-2 py-2"
                                type="text"
                                placeholder="Enter name"
                            />
                        </div>
                        <div className="flex w-1/2 flex-col gap-1">
                            <label htmlFor="">Email</label>
                            <input
                                className="rounded-sm border border-gray-border bg-white px-2 py-2"
                                type="text"
                                placeholder="Enter name"
                            />
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="flex w-1/2 flex-col gap-1">
                            <label htmlFor="">Contact Number</label>
                            <input
                                className="rounded-sm border border-gray-border bg-white px-2 py-2"
                                type="text"
                                placeholder="Enter name"
                            />
                        </div>
                        <div className="flex w-1/2 flex-col gap-1">
                            <label htmlFor="">Tax ID</label>
                            <input
                                className="rounded-sm border border-gray-border bg-white px-2 py-2"
                                type="text"
                                placeholder="Enter name"
                            />
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="flex w-1/2 flex-col gap-1">
                            <label htmlFor="">Country</label>
                            <input
                                className="rounded-sm border border-gray-border bg-white px-2 py-2"
                                type="text"
                                placeholder="Enter name"
                            />
                        </div>
                        <div className="flex w-1/2 flex-col gap-1">
                            <label htmlFor="">State</label>
                            <input
                                className="rounded-sm border border-gray-border bg-white px-2 py-2"
                                type="text"
                                placeholder="Enter name"
                            />
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="flex w-1/2 flex-col gap-1">
                            <label htmlFor="">City</label>
                            <input
                                className="rounded-sm border border-gray-border bg-white px-2 py-2"
                                type="text"
                                placeholder="Enter name"
                            />
                        </div>
                        <div className="flex w-1/2 flex-col gap-1">
                            <label htmlFor="">Postal Code</label>
                            <input
                                className="rounded-sm border border-gray-border bg-white px-2 py-2"
                                type="text"
                                placeholder="Enter name"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex w-full flex-col gap-1">
                            <label htmlFor="">Address</label>
                            <input
                                className="rounded-sm border border-gray-border bg-white px-2 py-2"
                                type="text"
                                placeholder="Enter name"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-end bg-body px-8 py-4">
                    <Button className="rounded-sm bg-teal-500 px-6 py-3 hover:bg-teal-600">
                        Create Client
                    </Button>
                </div>
            </div>
        </main>
    );
}

export default NewClient;
