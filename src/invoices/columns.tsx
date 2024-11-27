"use client";

import { ColumnDef } from "@tanstack/react-table";

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
    status: "Due" | "Overdue" | "Paid";
    client_id: string;
    total_due: number;
    issue_date: string;
    due_date: string;
};

export const sample: Invoice[] = [
    {
        invoice_id: 1,
        client_id: 1,
        user_id: 1,
        issue_date: new Date("2024-11-22"),
        due_date: new Date("2024-12-22"),
        subtotal: 12000,
        discount: 12000,
        total_due: 12000,
        amount_paid: 12000,
        note: "This is a note",
        status: "Due",
    },
    {
        invoice_id: 2,
        client_id: 2,
        user_id: 2,
        issue_date: new Date("2025-02-22"),
        due_date: new Date("2025-03-18"),
        subtotal: 14000,
        discount: 10,
        total_due: 10000,
        amount_paid: 13000,
        note: "I am a note",
        status: "Due",
    },
];

export const invoiceTableData: InvoiceTableData[] = [
    {
        invoice_id: "INV62",
        status: "Due",
        client_id: "Clarity Growth Inc.",
        total_due: 199.99,
        issue_date: new Date("2024-03-01").toLocaleDateString("en-US"),
        due_date: new Date("2024-03-05").toLocaleDateString("en-US"),
    },
    {
        invoice_id: "INV63",
        status: "Paid",
        client_id: "Inovuze",
        total_due: 399.99,
        issue_date: new Date("2024-03-14").toLocaleDateString("en-US"),
        due_date: new Date("2024-03-24").toLocaleDateString("en-US"),
    },
    {
        invoice_id: "INV64",
        status: "Due",
        client_id: "Wela Inc.",
        total_due: 299.99,
        issue_date: new Date("2024-04-01").toLocaleDateString("en-US"),
        due_date: new Date("2024-07-24").toLocaleDateString("en-US"),
    },
    {
        invoice_id: "INV65",
        status: "Paid",
        client_id: "Netflix Inc.",
        total_due: 599.99,
        issue_date: new Date("2024-04-14").toLocaleDateString("en-US"),
        due_date: new Date("2024-04-30").toLocaleDateString("en-US"),
    },
    {
        invoice_id: "INV62",
        status: "Due",
        client_id: "Clarity Growth Inc.",
        total_due: 199.99,
        issue_date: new Date("2024-03-01").toLocaleDateString("en-US"),
        due_date: new Date("2024-03-05").toLocaleDateString("en-US"),
    },
    {
        invoice_id: "INV63",
        status: "Paid",
        client_id: "Inovuze",
        total_due: 399.99,
        issue_date: new Date("2024-03-14").toLocaleDateString("en-US"),
        due_date: new Date("2024-03-24").toLocaleDateString("en-US"),
    },
    {
        invoice_id: "INV64",
        status: "Due",
        client_id: "Wela Inc.",
        total_due: 299.99,
        issue_date: new Date("2024-04-01").toLocaleDateString("en-US"),
        due_date: new Date("2024-07-24").toLocaleDateString("en-US"),
    },
    {
        invoice_id: "INV65",
        status: "Paid",
        client_id: "Netflix Inc.",
        total_due: 599.99,
        issue_date: new Date("2024-04-14").toLocaleDateString("en-US"),
        due_date: new Date("2024-04-30").toLocaleDateString("en-US"),
    },
    {
        invoice_id: "INV62",
        status: "Due",
        client_id: "Clarity Growth Inc.",
        total_due: 199.99,
        issue_date: new Date("2024-03-01").toLocaleDateString("en-US"),
        due_date: new Date("2024-03-05").toLocaleDateString("en-US"),
    },
    {
        invoice_id: "INV63",
        status: "Paid",
        client_id: "Inovuze",
        total_due: 399.99,
        issue_date: new Date("2024-03-14").toLocaleDateString("en-US"),
        due_date: new Date("2024-03-24").toLocaleDateString("en-US"),
    },
    {
        invoice_id: "INV64",
        status: "Due",
        client_id: "Wela Inc.",
        total_due: 299.99,
        issue_date: new Date("2024-04-01").toLocaleDateString("en-US"),
        due_date: new Date("2024-07-24").toLocaleDateString("en-US"),
    },
    {
        invoice_id: "INV65",
        status: "Paid",
        client_id: "Netflix Inc.",
        total_due: 599.99,
        issue_date: new Date("2024-04-14").toLocaleDateString("en-US"),
        due_date: new Date("2024-04-30").toLocaleDateString("en-US"),
    },
    {
        invoice_id: "INV62",
        status: "Due",
        client_id: "Clarity Growth Inc.",
        total_due: 199.99,
        issue_date: new Date("2024-03-01").toLocaleDateString("en-US"),
        due_date: new Date("2024-03-05").toLocaleDateString("en-US"),
    },
    {
        invoice_id: "INV63",
        status: "Paid",
        client_id: "Inovuze",
        total_due: 399.99,
        issue_date: new Date("2024-03-14").toLocaleDateString("en-US"),
        due_date: new Date("2024-03-24").toLocaleDateString("en-US"),
    },
    {
        invoice_id: "INV64",
        status: "Due",
        client_id: "Wela Inc.",
        total_due: 299.99,
        issue_date: new Date("2024-04-01").toLocaleDateString("en-US"),
        due_date: new Date("2024-07-24").toLocaleDateString("en-US"),
    },
    {
        invoice_id: "INV65",
        status: "Paid",
        client_id: "Netflix Inc.",
        total_due: 599.99,
        issue_date: new Date("2024-04-14").toLocaleDateString("en-US"),
        due_date: new Date("2024-04-30").toLocaleDateString("en-US"),
    },
    {
        invoice_id: "INV62",
        status: "Due",
        client_id: "Clarity Growth Inc.",
        total_due: 199.99,
        issue_date: new Date("2024-03-01").toLocaleDateString("en-US"),
        due_date: new Date("2024-03-05").toLocaleDateString("en-US"),
    },
    {
        invoice_id: "INV63",
        status: "Paid",
        client_id: "Inovuze",
        total_due: 399.99,
        issue_date: new Date("2024-03-14").toLocaleDateString("en-US"),
        due_date: new Date("2024-03-24").toLocaleDateString("en-US"),
    },
    {
        invoice_id: "INV64",
        status: "Due",
        client_id: "Wela Inc.",
        total_due: 299.99,
        issue_date: new Date("2024-04-01").toLocaleDateString("en-US"),
        due_date: new Date("2024-07-24").toLocaleDateString("en-US"),
    },
    {
        invoice_id: "INV65",
        status: "Paid",
        client_id: "Netflix Inc.",
        total_due: 599.99,
        issue_date: new Date("2024-04-14").toLocaleDateString("en-US"),
        due_date: new Date("2024-04-30").toLocaleDateString("en-US"),
    },
];

export const invoiceTableColumns: ColumnDef<InvoiceTableData>[] = [
    {
        accessorKey: "invoice_id",
        header: "Invoice ID",
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const status: string = row.getValue("status");
            return (
                <span
                    className={`px-12 py-2 text-white ${
                        status === "Paid"
                            ? "bg-success"
                            : status === "Due"
                              ? "bg-warn"
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
];

export const columns: ColumnDef<Invoice>[] = [
    {
        accessorKey: "invoice_id",
        header: "Invoice ID",
    },
    {
        accessorKey: "issue_date",
        header: "Issue Date",
    },
    {
        accessorKey: "due_Date",
        header: "Due Date",
    },
    {
        accessorKey: "subtotal",
        header: "Subtotal",
    },
    {
        accessorKey: "discount",
        header: "Discount",
    },
    {
        accessorKey: "total_due",
        header: "Total Due",
    },
    {
        accessorKey: "amount_paid",
        header: "Amount Paid",
    },
    {
        accessorKey: "note",
        header: "Note",
    },
    {
        accessorKey: "Status",
        header: "status",
    },
];
