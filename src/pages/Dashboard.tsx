import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineReceiptLong, MdOutlinePersonAdd } from "react-icons/md";
import {
    type ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "../components/ui/chart";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
    MdOutlinePaid,
    MdOutlineWarningAmber,
    MdCheck,
    MdOutlineGroups,
} from "react-icons/md";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { format, addDays } from "date-fns";
import { Link } from "react-router-dom";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "../components/ui/button";
import { DateRange } from "react-day-picker";

const Dashboard = () => {
    const [date, setDate] = React.useState<DateRange | undefined>({
        from: new Date(2023, 0, 20),
        to: addDays(new Date(2023, 0, 20), 20),
    });
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
                <div className="flex flex-col gap-5 px-10 py-10">
                    <div className="flex justify-between">
                        <span className="font-sans text-3xl font-bold">
                            Dashboard
                        </span>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="flex flex-row items-center gap-2">
                                <Button className="items-center gap-2 rounded bg-teal-500 hover:bg-teal-600">
                                    Add new
                                    <IoIosArrowDown />
                                </Button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent className="mb-1 mt-1">
                                <DropdownMenuLabel className="flex flex-row items-center gap-2 rounded">
                                    <MdOutlineReceiptLong />
                                    Invoice
                                </DropdownMenuLabel>
                                <DropdownMenuLabel className="flex flex-row items-center gap-2 rounded">
                                    <MdOutlinePersonAdd />
                                    Client
                                </DropdownMenuLabel>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className="flex flex-col gap-10px">
                        <div className="flex flex-row gap-6">
                            <div className="w-1/2 rounded-sm border border-gray-border bg-white">
                                <div className="flex justify-between border-b border-b-gray-border px-5 py-3">
                                    <span>Recent Activity</span>
                                    <Link
                                        className="font-medium text-teal-500 hover:text-teal-600"
                                        to="/activity_log"
                                    >
                                        View Activity Log
                                    </Link>
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
                            <div className="w-1/2 rounded-sm border border-gray-border bg-white">
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
                                    <span>5,000.00 USD</span>
                                </div>
                                <div className="flex justify-between border-b border-b-gray-border border-t-gray-border-2 px-5 py-3">
                                    <div className="flex items-center gap-10px">
                                        <MdCheck className="h-6 w-6" />
                                        <span className="font-medium">
                                            Total Collected this year:
                                        </span>
                                    </div>
                                    <span>10,000.00 USD</span>
                                </div>
                                <div className="flex justify-between px-5 py-3">
                                    <div className="flex items-center gap-10px">
                                        <MdOutlineGroups className="h-6 w-6" />
                                        <span className="font-medium">
                                            Clients:
                                        </span>
                                    </div>
                                    <span>10</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex-col gap-5 rounded-sm border border-gray-border bg-white">
                                <div className="px-5 py-4">
                                    <span className="hover:bg-red rounded">
                                        Invoice / Received:{" "}
                                    </span>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <span className="font-white cursor-pointer rounded-md bg-teal-500 px-2 py-1 hover:bg-teal-600">
                                                {date?.from ? (
                                                    date.to ? (
                                                        <>
                                                            {format(
                                                                date.from,
                                                                "LLL dd, y",
                                                            )}{" "}
                                                            -{" "}
                                                            {format(
                                                                date.to,
                                                                "LLL dd, y",
                                                            )}
                                                        </>
                                                    ) : (
                                                        format(
                                                            date.from,
                                                            "LLL dd, y",
                                                        )
                                                    )
                                                ) : (
                                                    <span>Pick a date</span>
                                                )}
                                            </span>
                                        </PopoverTrigger>
                                        <PopoverContent
                                            className="w-auto p-0"
                                            align="center"
                                        >
                                            <Calendar
                                                initialFocus
                                                mode="range"
                                                selected={date}
                                                onSelect={setDate}
                                                numberOfMonths={2}
                                            />
                                        </PopoverContent>
                                    </Popover>
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
                </div>
            </main>
        </>
    );
};

export default Dashboard;
