import { useState } from "react";

import Sidebar from "./components/Sidebar";
import SidebarItem from "./components/SidebarItem";
import { IoIosArrowDown } from "react-icons/io";
// react-icons icons
import { MdDashboard, MdWarningAmber } from "react-icons/md";
import { MdOutlineRequestPage } from "react-icons/md";
import { MdGroups } from "react-icons/md";
import { MdPerson } from "react-icons/md";
import { MdPeople } from "react-icons/md";
import { MdSettings } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { MdOutlinePaid } from "react-icons/md";
import { MdOutlineWarningAmber } from "react-icons/md";
import { MdCheck } from "react-icons/md";
import { MdOutlineGroups } from "react-icons/md";
// ShadCN components
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { Button } from "./components/ui/button";
import {
    type ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "./components/ui/chart";

export default function App() {
    const chartData = [
        { month: "January", desktop: 186, mobile: 80 },
        { month: "February", desktop: 100, mobile: 200 },
        { month: "March", desktop: 100, mobile: 120 },
        { month: "April", desktop: 73, mobile: 190 },
        { month: "May", desktop: 209, mobile: 130 },
        { month: "June", desktop: 214, mobile: 140 },
    ];
    const chartConfig = {
        desktop: {
            label: "Desktop",
            color: "#00ADBA",
        },
        mobile: {
            label: "Mobile",
            color: "#E76E50",
        },
    } satisfies ChartConfig;
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
                    <main className="flex flex-col gap-5 bg-body px-10 py-7">
                        <div className="flex justify-between">
                            <span className="text-3xl font-bold">
                                Dashboard
                            </span>
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <Button className="items-center gap-2 rounded bg-teal-500 hover:bg-teal-600">
                                        Add new
                                        <IoIosArrowDown />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="mb-1 mt-1">
                                    <DropdownMenuLabel className="flex flex-row items-center gap-2 rounded">
                                        <MdPerson />
                                        Invoice
                                    </DropdownMenuLabel>
                                    <DropdownMenuLabel className="flex flex-row items-center gap-2 rounded">
                                        <MdPeople />
                                        Customer
                                    </DropdownMenuLabel>
                                    <DropdownMenuLabel className="flex flex-row items-center gap-2 rounded">
                                        <MdSettings />
                                        User
                                    </DropdownMenuLabel>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                        <div className="flex flex-col gap-7">
                            <div className="flex flex-row gap-6">
                                <div className="w-1/2 rounded border border-gray-border bg-white">
                                    <div className="flex justify-between border-b border-b-gray-border px-5 py-3">
                                        <span>Recent Activity</span>
                                        <a
                                            href="/"
                                            className="font-medium text-teal-500 hover:text-teal-600"
                                        >
                                            View Activity Log
                                        </a>
                                    </div>
                                    <div className="flex justify-start border-b border-b-gray-border px-5 py-3">
                                        <span className="font-medium">
                                            10 minutes ago
                                        </span>
                                        <span> - </span>
                                        <span>
                                            Invoice created for Blueberry energy
                                        </span>
                                    </div>
                                    <div className="flex justify-start border-b border-b-gray-border px-5 py-3">
                                        <span className="font-medium">
                                            10 minutes ago
                                        </span>
                                        <span> - </span>
                                        <span>
                                            Invoice created for Blueberry energy
                                        </span>
                                    </div>
                                    <div className="flex justify-start border-b border-b-gray-border px-5 py-3">
                                        <span className="font-medium">
                                            10 minutes ago
                                        </span>
                                        <span> - </span>
                                        <span>
                                            Invoice created for Blueberry energy
                                        </span>
                                    </div>
                                    <div className="flex justify-start px-5 py-3">
                                        <span className="font-medium">
                                            10 minutes ago
                                        </span>
                                        <span> - </span>
                                        <span>
                                            Invoice created for Blueberry energy
                                        </span>
                                    </div>
                                </div>
                                <div className="w-1/2 rounded border border-gray-border bg-white">
                                    <div className="flex justify-between border-b border-b-gray-border px-5 py-3">
                                        <span>At a glance</span>
                                    </div>
                                    <div className="flex justify-between border-b border-b-gray-border border-t-gray-border-2 px-5 py-3">
                                        <div className="flex items-center gap-10px">
                                            <MdOutlinePaid className="h-6 w-6" />
                                            <span className="font-medium">
                                                Total Outstanding:
                                            </span>
                                        </div>
                                        <span>1,920.00 USD</span>
                                    </div>
                                    <div className="flex justify-between border-b border-b-gray-border border-t-gray-border-2 px-5 py-3">
                                        <div className="flex items-center gap-10px">
                                            <MdOutlineWarningAmber className="h-6 w-6" />
                                            <span className="font-medium">
                                                Total Overdue:
                                            </span>
                                        </div>
                                        <span>1,920.00 USD</span>
                                    </div>
                                    <div className="flex justify-between border-b border-b-gray-border border-t-gray-border-2 px-5 py-3">
                                        <div className="flex items-center gap-10px">
                                            <MdCheck className="h-6 w-6" />
                                            <span className="font-medium">
                                                Total Collected this year:
                                            </span>
                                        </div>
                                        <span>1,920.00 USD</span>
                                    </div>
                                    <div className="flex justify-between px-5 py-3">
                                        <div className="flex items-center gap-10px">
                                            <MdOutlineGroups className="h-6 w-6" />
                                            <span className="font-medium">
                                                Clients:
                                            </span>
                                        </div>
                                        <span>1,920.00 USD</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex-col gap-5 rounded-xl bg-white">
                                    <div className="px-5 py-4">
                                        <span>
                                            Invoice / Received (May 01 2024 -
                                            Aug 27 2024)
                                        </span>
                                    </div>
                                    <div className="h-full w-full">
                                        <ChartContainer
                                            config={chartConfig}
                                            className="h-96 w-full"
                                        >
                                            <BarChart
                                                accessibilityLayer
                                                data={chartData}
                                            >
                                                <CartesianGrid
                                                    className="px-10"
                                                    vertical={false}
                                                />
                                                <XAxis
                                                    dataKey="month"
                                                    tickLine={false}
                                                    tickMargin={10}
                                                    axisLine={false}
                                                    tickFormatter={(value) =>
                                                        value.slice(0, 3)
                                                    }
                                                />
                                                <ChartTooltip
                                                    content={
                                                        <ChartTooltipContent />
                                                    }
                                                />
                                                <Bar
                                                    dataKey="desktop"
                                                    fill="var(--color-desktop)"
                                                    radius={12}
                                                />
                                                <Bar
                                                    dataKey="mobile"
                                                    fill="var(--color-mobile)"
                                                    radius={12}
                                                />
                                            </BarChart>
                                        </ChartContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
