// import { ClientDataTable } from "../components/ui/ClientDataTable";
// import { columns, sample } from "@/tables/Client_Schema";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoIosArrowDown } from "react-icons/io";
import { Button } from "@/components/ui/button";
import InvoiceDataTable from "@/invoices/data-table";
import { invoiceTableColumns, invoiceTableData } from "@/invoices/columns";
import { MdOutlineReceiptLong } from "react-icons/md";

export default function Invoices() {
    return (
        <div className="flex flex-col gap-5 bg-body p-10">
            <div className="flex flex-row justify-between">
                <h1 className="font-sans text-3xl font-bold">Invoices</h1>
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
                            <Link to="/new_invoice">Invoice</Link>
                        </DropdownMenuLabel>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <InvoiceDataTable
                columns={invoiceTableColumns}
                data={invoiceTableData}
            />
        </div>
    );
}
