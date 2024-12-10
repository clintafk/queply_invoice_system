"use client";

import { ColumnDef } from "@tanstack/react-table";
import { z } from "zod";
import { phone } from "@/functions/phone";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, ArrowUpDown } from "lucide-react";
import { ActivityLogProps } from "@/types/activity_log";

const ActivityLog_Schema = z.object({
    activity_id: z.number({
        required_error: "This is required ok",
        invalid_type_error: "Oi, a string",
    }),
    invoice_id: z.string({
        required_error: "This is required ok",
        invalid_type_error: "Oi, a string",
    }),
    user_id: z.string({
        required_error: "This is required ok",
        invalid_type_error: "Oi, a string",
    }),
    client_id: z.string({
        required_error: "This is required ok",
        invalid_type_error: "Oi, a string",
    }),
    action: z.string({
        required_error: "This is required ok",
        invalid_type_error: "Oi, a string",
    }),
    timestamp: z.date({
        required_error: "This is required ok",
        invalid_type_error: "Oi, a date",
    }),
});

type client = z.infer<typeof ActivityLogProps>;

export const activityLogColumns: ColumnDef<client>[] = [
    {
        accessorKey: "action",
        header: "Action",
    },
    {
        accessorKey: "invoice_id",
        header: "Invoice ID",
    },
    {
        accessorKey: "client_id",
        header: "Client ID",
    },
    {
        accessorKey: "user_id",
        header: "User ID",
    },
    {
        accessorKey: "timestamp",
        header: "Date and Time",
    },
];

export const activityLogTableData: ActivityLogProps[] = [
    {
        activity_id: "ACT_001",
        invoice_id: "INV_62",
        user_id: "Clint Harvey Gamolo",
        client_id: "Wendover Productions Inc.",
        action: "Created Invoice",
        timestamp: new Date("2024-03-05").toLocaleDateString("en-US"),
    },
    {
        activity_id: "ACT_002",
        invoice_id: "INV_63",
        user_id: "Din Shane Magallanes",
        client_id: "Clarity Gadgets Inc.",
        action: "Created Invoice",
        timestamp: new Date("2024-04-21").toLocaleDateString("en-US"),
    },
    {
        activity_id: "ACT_003",
        invoice_id: "INV_64",
        user_id: "Clint Harvey Gamolo",
        client_id: "Wightman Inc",
        action: "Created Invoice",
        timestamp: new Date("2024-04-29").toLocaleDateString("en-US"),
    },
    {
        activity_id: "ACT_004",
        invoice_id: "INV_65",
        user_id: "Clint Harvey Gamolo",
        client_id: "HighTek Gadgets Corporation.",
        action: "Created Invoice",
        timestamp: new Date("2024-03-05").toLocaleDateString("en-US"),
    },
    {
        activity_id: "ACT_005",
        invoice_id: "INV_65",
        user_id: "Clint Harvey Gamolo",
        client_id: "HighTek Gadgets Corporation.",
        action: "Deleted Invoice",
        timestamp: new Date("2024-03-05").toLocaleDateString("en-US"),
    },
    {
        activity_id: "ACT_006",
        invoice_id: "INV_65",
        user_id: "Clint Harvey Gamolo",
        client_id: "HighTek Gadgets Corporation.",
        action: "Edited Invoice",
        timestamp: new Date("2024-03-05").toLocaleDateString("en-US"),
    },
];
