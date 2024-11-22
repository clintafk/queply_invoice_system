"use client"
import React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  SortingState,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoIosArrowBack, IoIosArrowDown, IoIosArrowDropleft } from "react-icons/io";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  })

  return (
    <div>
      <div className="flex items-center py-4 justify-between">
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-[276px] rounded-[6px]"
        />
      </div>
      <div className="rounded-[6px] border-2 border-gray-border border-solid">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead className="font-semibold text-base text-black 0 px-6 py-4" key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow className="border-t-2"
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell className="px-6 py-4" key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex items-center justify-start space-x-2 py-4 gap-[5px]">
          <Button
            className="px-4 py-3 gap-[10px] items-center border-solid border-[1px] rounded-[6px] border-gray-border-3 bg-gray-border-2 text-black text-sm font-normal hover:bg-gray-border"
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <IoIosArrowBack />
            Previous

          </Button>
          <Button
            className="px-4 py-3 gap-[10px] items-center border-solid border-[1px] rounded-[6px] border-gray-border-3 bg-gray-border-2 text-black text-sm font-normal hover:bg-gray-border"
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
        <div className="flex flex-row gap-[10px] text-sm items-center ">
            <p>Number of Results</p>
            <DropdownMenu>
                <DropdownMenuTrigger className="flex flex-row items-center gap-[10px]">
                    <Button className="items-center gap-2 border-solid border-[1px] rounded-[6px] border-gray-border-3 bg-gray-border-2 text-black text-sm font-normal hover:bg-gray-border">
                        4
                        <IoIosArrowDown className="fill-slate-400" />
                    </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="mb-1 mt-1">
                    <DropdownMenuLabel className="flex flex-row items-center gap-2 rounded">
                        1
                    </DropdownMenuLabel>
                    <DropdownMenuLabel className="flex flex-row items-center gap-2 rounded">
                        2
                    </DropdownMenuLabel>
                    <DropdownMenuLabel className="flex flex-row items-center gap-2 rounded">
                        3
                    </DropdownMenuLabel>
                </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
                <DropdownMenuTrigger className="flex flex-row items-center gap-[10px]">
                    <Button className="items-center gap-2 border-solid border-[1px] rounded-[6px] border-gray-border-3 bg-gray-border-2 text-black text-sm font-normal hover:bg-gray-border">
                        Export
                        <IoIosArrowDown className="fill-slate-400" />
                    </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="mb-1 mt-1">
                    <DropdownMenuLabel className="flex flex-row items-center gap-2 rounded">
                        1
                    </DropdownMenuLabel>
                    <DropdownMenuLabel className="flex flex-row items-center gap-2 rounded">
                        2
                    </DropdownMenuLabel>
                    <DropdownMenuLabel className="flex flex-row items-center gap-2 rounded">
                        3
                    </DropdownMenuLabel>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
      </div>
    </div>
  )
}
