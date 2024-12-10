import { MdOutlineSearch } from "react-icons/md";
import React from "react";
import { Button } from "@/components/ui/button";
import {
    VisibilityState,
    ColumnDef,
    ColumnFiltersState,
    PaginationState,
    flexRender,
    SortingState,
    getCoreRowModel,
    getPaginationRowModel,
    getFilteredRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    IoIosArrowBack,
    IoIosArrowDown,
    IoIosArrowForward,
} from "react-icons/io";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MdOutlineReceiptLong } from "react-icons/md";
import { Input } from "@/components/ui/input";

interface ActivityDataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
}

function ActivityDataTable<TData, TValue>({
    columns,
    data,
}: ActivityDataTableProps<TData, TValue>) {
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [columnFilters, setColumnFilters] =
        React.useState<ColumnFiltersState>([]);
    const [pagination, setPagination] = React.useState<PaginationState>({
        pageIndex: 0,
        pageSize: 10,
    });
    const [open, setOpen] = React.useState(false);
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({});
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onPaginationChange: setPagination,
        state: {
            columnFilters,
            pagination,
            columnVisibility,
            sorting,
        },
    });
    return (
        <div>
            <div className="flex items-center justify-between py-4">
                <div className="border-input ring-offset-background focus-within:ring-ring flex h-10 flex-row items-center rounded-[6px] border bg-white py-2 pl-3 text-sm focus-within:ring-1 focus-within:ring-offset-2">
                    <MdOutlineSearch className="h-[16px] w-[16px] text-[#0F172A]" />
                    <Input
                        className="placeholder:text-muted-foreground focus-visible: h-full w-full border-none p-2 outline-none disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Search Invoice"
                        value={
                            (table
                                .getColumn("invoice_id")
                                ?.getFilterValue() as string) ??
                            (table
                                .getColumn("action")
                                ?.getFilterValue() as string) ??
                            ""
                        }
                        onChange={(event) =>
                            table
                                .getColumn("invoice_id")
                                ?.setFilterValue(event.target.value) ??
                            table
                                .getColumn("action")
                                ?.setFilterValue(event.target.value) ??
                            ""
                        }
                    />
                </div>
            </div>
            <div className="rounded-[6px] border-[1px] border-solid border-gray-border">
                <Table className="rounded-[6px] bg-white">
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead
                                            className="text-base font-semibold text-black"
                                            key={header.id}
                                        >
                                            {header.isPlaceholder ||
                                            header.column.columnDef.header ===
                                                "is_Archived"
                                                ? null
                                                : flexRender(
                                                      header.column.columnDef
                                                          .header,
                                                      header.getContext(),
                                                  )}
                                        </TableHead>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table
                            .getRowModel()
                            .rows?.filter((row) =>
                                row
                                    .getVisibleCells()
                                    .map((cell) =>
                                        cell.column.columnDef.header ===
                                        "is_Archived"
                                            ? cell.column.toggleVisibility(
                                                  false,
                                              )
                                            : cell,
                                    ),
                            ).length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    className=""
                                    key={row.id}
                                    data-state={
                                        row.getIsSelected() && "selected"
                                    }
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell
                                            className="px-6 py-4"
                                            key={cell.id}
                                        >
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext(),
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex flex-row justify-between">
                <div className="flex items-center justify-start gap-[5px] py-4">
                    <Button
                        variant="outline"
                        className="border-gray-border-3 items-center gap-[10px] rounded-[6px] border-[1px] border-solid bg-gray-border-2 px-4 py-3 text-sm font-normal text-black hover:bg-gray-border"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        <IoIosArrowBack />
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        className="border-gray-border-3 items-center gap-[10px] rounded-[6px] border-[1px] border-solid bg-gray-border-2 px-4 py-3 text-sm font-normal text-black hover:bg-gray-border"
                        onClick={() =>
                            table.setPageIndex(
                                table.getState().pagination.pageIndex,
                            )
                        }
                        disabled={
                            table.getState().pagination.pageIndex + 1 >
                            table.getPageCount()
                        }
                    >
                        {table.getState().pagination.pageIndex + 1}
                    </Button>
                    <Button
                        variant="outline"
                        className="border-gray-border-3 items-center gap-[10px] rounded-[6px] border-[1px] border-solid bg-gray-border-2 px-4 py-3 text-sm font-normal text-black hover:bg-gray-border"
                        onClick={() =>
                            table.setPageIndex(
                                table.getState().pagination.pageIndex + 1,
                            )
                        }
                        disabled={
                            table.getState().pagination.pageIndex + 2 >
                            table.getPageCount()
                        }
                    >
                        {table.getState().pagination.pageIndex + 2}
                    </Button>
                    <Button
                        variant="outline"
                        className="border-gray-border-3 items-center gap-[10px] rounded-[6px] border-[1px] border-solid bg-gray-border-2 px-4 py-3 text-sm font-normal text-black hover:bg-gray-border"
                        onClick={() =>
                            table.setPageIndex(
                                table.getState().pagination.pageIndex + 2,
                            )
                        }
                        disabled={
                            table.getState().pagination.pageIndex + 3 >
                            table.getPageCount()
                        }
                    >
                        {table.getState().pagination.pageIndex + 3}
                    </Button>
                    <Button
                        variant="outline"
                        className="border-gray-border-3 items-center gap-[10px] rounded-[6px] border-[1px] border-solid bg-gray-border-2 px-4 py-3 text-sm font-normal text-black hover:bg-gray-border"
                        onClick={() =>
                            table.setPageIndex(
                                table.getState().pagination.pageIndex + 3,
                            )
                        }
                        disabled={
                            table.getState().pagination.pageIndex + 4 >
                            table.getPageCount()
                        }
                    >
                        {table.getState().pagination.pageIndex + 4}
                    </Button>
                    <Button
                        variant="outline"
                        className="border-gray-border-3 items-center gap-[10px] rounded-[6px] border-[1px] border-solid bg-gray-border-2 px-4 py-3 text-sm font-normal text-black hover:bg-gray-border"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Next
                        <IoIosArrowForward />
                    </Button>
                </div>
                <div className="flex flex-row items-center gap-10px text-sm">
                    <span>Number of results</span>
                    <DropdownMenu open={open} onOpenChange={setOpen}>
                        <DropdownMenuTrigger className="">
                            <span className="border-gray-border-3 flex flex-row items-center gap-2 rounded-[6px] border-[1px] border-solid bg-gray-border-2 px-[16px] py-[12px] text-sm font-normal text-black hover:bg-gray-border">
                                {table.getState().pagination.pageSize}
                                <IoIosArrowDown />
                            </span>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="mb-1 mt-1">
                            {[4, 5, 6, 7, 8, 9, 10].map((pageSize) => (
                                <DropdownMenuLabel
                                    className="flex flex-row items-center gap-2 rounded"
                                    key={pageSize}
                                    onClick={() => {
                                        table.setPageSize(Number(pageSize));
                                        setOpen(false);
                                    }}
                                >
                                    {pageSize}
                                </DropdownMenuLabel>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="">
                            <span className="border-gray-border-3 flex flex-row items-center gap-2 rounded-[6px] border-[1px] border-solid bg-gray-border-2 px-[16px] py-[12px] text-sm font-normal text-black hover:bg-gray-border">
                                Export
                                <IoIosArrowDown className="fill-slate-400" />
                            </span>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="mb-1 mt-1">
                            <DropdownMenuLabel className="flex flex-row items-center gap-2 rounded">
                                .pdf
                            </DropdownMenuLabel>
                            <DropdownMenuLabel className="flex flex-row items-center gap-2 rounded">
                                .docx
                            </DropdownMenuLabel>
                            <DropdownMenuLabel className="flex flex-row items-center gap-2 rounded">
                                .csv
                            </DropdownMenuLabel>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
    );
}

export default ActivityDataTable;
