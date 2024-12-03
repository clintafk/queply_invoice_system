import { ClientDataTable } from "../components/ui/ClientDataTable";
import { columns, sample } from "@/tables/clientSchema";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Button } from "@/components/ui/button"
import { NavLink } from "react-router-dom";

export default function Clients() {
    return (
        <div className="flex flex-col p-10 bg-body gap-5 ">
            <div className="flex flex-row justify-between">
                <h1 className="font-bold text-3xl font-sans">Clients</h1>
                <NavLink to={"/New_Client"}>
                    <Button className="items-center gap-2 rounded bg-teal-500 hover:bg-teal-600">
                        Add new
                        <IoIosArrowDown />
                    </Button>
                </NavLink>

            </div>
            <ClientDataTable columns={ columns } data={sample}></ClientDataTable>
        </div>
    );
}
