import * as React from "react";

import {
    Table,
    ColumnFiltersState,
    getFilteredRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { Input } from "@/components/ui/input";

interface DataTableSearchProps<TData> {
    table: Table<TData>;
}

function DataTableSearch<TData>({ table }: DataTableSearchProps<TData>) {
    return (
        <div>
            <div className="flex items-center py-4">
                <Input
                    placeholder="Search invoice..."
                    value={
                        (table
                            .getColumn("invoice_id")
                            ?.getFilterValue() as string) ??
                        (table
                            .getColumn("status")
                            ?.getFilterValue() as string) ??
                        ""
                    }
                    onChange={(event) => {
                        const filterValue = event.target.value;
                        table
                            .getColumn("invoice_id")
                            ?.setFilterValue(filterValue);
                        table.getColumn("status")?.setFilterValue(filterValue);
                    }}
                    className="max-w-sm"
                />
            </div>
        </div>
    );
}
export default DataTableSearch;
