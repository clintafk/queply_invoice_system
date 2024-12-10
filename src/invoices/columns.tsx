"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, ArrowUpDown } from "lucide-react";
import { MdOutlineReceiptLong } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdOutlineArchive } from "react-icons/md";

export type Invoice = {
    invoice_id: number;
    client_id: number;
    user_id: number;
    issue_date: Date;
    due_date: Date;
    subtotal: number;
    discount: number;
    total_due: number;
    amount_paid: number;
    note: string;
    status: "Due" | "Overdue";
};

export type InvoiceTableData = {
    invoice_id: string;
    employee_id: string;
    status: "Due" | "Overdue" | "Paid";
    client_id: string;
    total_due: number;
    issue_date: string;
    due_date: string;
    is_Archived: boolean;
};

export const invoiceTableData: InvoiceTableData[] = [
    {
        invoice_id: "INV62",
        status: "Due",
        client_id: "Clarity Growth Inc.",
        total_due: 199.99,
        issue_date: new Date("2024-03-01").toLocaleDateString("en-US"),
        due_date: new Date("2024-03-05").toLocaleDateString("en-US"),
        is_Archived: true,
        employee_id: "Clint Harvey Gamolo",
    },
    {
        invoice_id: "INV63",
        status: "Paid",
        client_id: "Inovuze",
        total_due: 399.99,
        issue_date: new Date("2024-03-14").toLocaleDateString("en-US"),
        due_date: new Date("2024-03-24").toLocaleDateString("en-US"),
        is_Archived: false,
        employee_id: "Timothy Robert Mutia",
    },
    {
        invoice_id: "INV64",
        status: "Due",
        client_id: "Wela Inc.",
        total_due: 299.99,
        issue_date: new Date("2024-04-01").toLocaleDateString("en-US"),
        due_date: new Date("2024-07-24").toLocaleDateString("en-US"),
        is_Archived: false,
        employee_id: "Timothy Robert Mutia",
    },
    {
        invoice_id: "INV65",
        status: "Paid",
        client_id: "Netflix Inc.",
        total_due: 599.99,
        issue_date: new Date("2024-04-14").toLocaleDateString("en-US"),
        due_date: new Date("2024-04-30").toLocaleDateString("en-US"),
        is_Archived: true,
        employee_id: "Timothy Robert Mutia",
    },
    {
        invoice_id: "INV66",
        status: "Due",
        client_id: "Clarity Growth Inc.",
        total_due: 199.99,
        issue_date: new Date("2024-03-01").toLocaleDateString("en-US"),
        due_date: new Date("2024-03-05").toLocaleDateString("en-US"),
        is_Archived: true,
        employee_id: "Clint Harvey Gamolo",
    },
];

export const invoiceTableColumns: ColumnDef<InvoiceTableData>[] = [
    {
        accessorKey: "invoice_id",
        header: ({ column }) => {
            return (
                <Button
                    className="p-0 text-[16px] font-semibold"
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Invoice ID
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
    },
    {
        accessorKey: "status",
        header: () => {
            return <span className="text-[16px] font-semibold">Status</span>;
        },
        // header: ({ column }) => {
        //     return (
        //         <Button
        //             className="p-0"
        //             variant="ghost"
        //             onClick={() =>
        //                 column.toggleSorting(column.getIsSorted() === "asc")
        //             }
        //         >
        //             Status
        //             <ArrowUpDown className="ml-2 h-4 w-4" />
        //         </Button>
        //     );
        // },
        cell: ({ row }) => {
            const status: string = row.getValue("status");
            return (
                <span
                    className={`px-12 py-2 text-white ${
                        status === "Paid"
                            ? "bg-[#4CAF50]"
                            : status === "Due"
                              ? "bg-[#F44336]"
                              : "bg-inherit"
                    }`}
                >
                    {status}
                </span>
            );
        },
    },
    {
        accessorKey: "client_id",
        header: "Client",
    },
    {
        accessorKey: "total_due",
        header: "Amount",
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("total_due"));
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(amount);

            return <div>{formatted}</div>;
        },
    },
    {
        accessorKey: "issue_date",
        header: "Date",
    },
    {
        accessorKey: "due_date",
        header: "Due date",
    },
    {
        accessorKey: "is_Archived",
        header: "is_Archived",
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const clients = row.original;
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <span className="flex h-8 w-8 justify-end p-0">
                            <MoreHorizontal />
                        </span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem className="">
                            <MdEdit />
                            Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <MdOutlineArchive />
                            Archive
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
