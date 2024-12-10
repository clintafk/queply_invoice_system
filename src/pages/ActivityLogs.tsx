// import { ClientDataTable } from "../components/ui/ClientDataTable";
// import { columns, sample } from "@/tables/Client_Schema";
import { Link } from "react-router-dom";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoIosArrowDown } from "react-icons/io";
import { Button } from "@/components/ui/button";
import ActivityDataTable from "@/invoices/activity-log-data-table";
import { invoiceTableColumns, invoiceTableData } from "@/invoices/columns";
import { MdOutlineReceiptLong } from "react-icons/md";
import {
    activityLogColumns,
    activityLogTableData,
} from "@/tables/ActivityLogs_Schema";

export default function ActivityLogs() {
    return (
        <main className="flex flex-col gap-5 bg-body p-10">
            <div className="flex flex-row justify-between">
                <h1 className="font-sans text-3xl font-bold">Activity Logs</h1>
            </div>
            <ActivityDataTable
                columns={activityLogColumns}
                data={activityLogTableData}
            />
        </main>
    );
}
