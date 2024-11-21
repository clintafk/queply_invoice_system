import { DataTable } from "../components/ui/DataTable";
import { columns, sample } from "@/tables/Client_Schema";

export default function Clients() {
    return (
        <div className="flex flex-col p-10 bg-body gap-5 ">
            <div className="flex flex-row justify-between">
                <h1>Invoices</h1>
            </div>
            <div className="flex flex-col gap-[10px]">
                <DataTable columns={ columns } data={sample}></DataTable>
            </div>
            <div className="flex flex-row">

            </div>
        </div>
    );
}
