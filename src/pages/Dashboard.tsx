import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import {
    type ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "../components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { MdWarningAmber, MdOutlinePaid, MdOutlineWarningAmber, MdCheck,  MdOutlineGroups } from 'react-icons/md';
// react-icons icons

import { Button } from "../components/ui/button";


const Dashboard = () => {
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
        <main className="bg-body">
            <div className="flex justify-between px-10 py-7">
                <p className="text-xl font-bold">Dashboard</p>
                <Button className="items-center gap-2 rounded bg-teal-500 hover:bg-teal-600">
                    Add new
                    <IoIosArrowDown />
                </Button>
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
    </>

    )
}

export default Dashboard