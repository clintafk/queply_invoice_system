import { ClientDataTable } from "../components/ui/ClientDataTable";
import { columns, sample } from "@/tables/Client_Schema";
import { useState } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
import { IoIosArrowDown } from "react-icons/io";
import { Button } from "@/components/ui/button"

export default function Clients() {
    const [count, setCount] = useState(5);
    return (
        <div className="flex flex-col p-10 bg-body gap-5 ">
            <div className="flex flex-row justify-between">
                <h1 className="font-bold text-3xl font-sans">Invoices</h1>
                <DropdownMenu>
                    <DropdownMenuTrigger className="flex flex-row items-center gap-2">
                        <Button className="items-center gap-2 rounded bg-teal-500 hover:bg-teal-600">
                            Add new
                            <IoIosArrowDown />
                        </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent className="mb-1 mt-1">
                        <DropdownMenuLabel className="flex flex-row items-center gap-2 rounded">
                            Invoice
                        </DropdownMenuLabel>
                        <DropdownMenuLabel className="flex flex-row items-center gap-2 rounded">
                            Client
                        </DropdownMenuLabel>
                        <DropdownMenuLabel className="flex flex-row items-center gap-2 rounded">
                            User
                        </DropdownMenuLabel>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="flex flex-col gap-[10px]">

                <ClientDataTable columns={ columns } data={sample}></ClientDataTable>
            </div>
            <div className="flex flex-row">

            </div>
        </div>
    );
}
