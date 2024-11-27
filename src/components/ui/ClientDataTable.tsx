"use client"
import React, { useState } from "react"
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
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoIosArrowBack, IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { MdSearch } from "react-icons/md";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function ClientDataTable<TData, TValue>({
  columns,
  data,
  
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })
  const [open, setOpen] = useState(true)
  const [columnVisibility, setColumnVisibility] =
  React.useState<VisibilityState>({})
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
      sorting,
      columnFilters,
      pagination,
      columnVisibility,
    },
  })

  return (
  <div className="flex flex-col gap-5">
    <div className="flex flex-col gap-[10px]">
      <div className="flex items-center py-[5px] justify-between">
        <Input
          placeholder="Search Emails"
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-[276px] rounded-[6px] py-2 px-3"
        />
        <Tabs defaultValue="All">
          <TabsList className="w-[230px] h-9 rounded-[6px] text-sm border-gray-border border-solid border-[1px] p-1 flex flex-row">
            <TabsTrigger className="w-full rounded-[6px] border-solid" value="Archived" onClick={() =>
            table.getColumn("is_Archived")?.setFilterValue(false)
          }>Archived</TabsTrigger>
            <TabsTrigger className="w-full rounded-[6px] border-solid" value="All" onClick={() =>
            table.getColumn("is_Archived")?.setFilterValue(true)
          }>All</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className="rounded-[6px] border-2 border-gray-border border-solid">
        <Table> 
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead className="font-semibold text-base text-black 0 px-6 py-4" key={header.id}>
                      {header.isPlaceholder || header.column.columnDef.header === "is_Archived"
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
            {table.getRowModel().rows?.filter((row) => (
              row.getVisibleCells().map((cell) => (
                cell.column.columnDef.header === "is_Archived" ? cell.column.toggleVisibility(false) : cell
              ))
            )).length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow className="border-t-2 text-left"
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
    </div>
    <div className="flex flex-row justify-between">
      <div className="flex items-center justify-start py-4 gap-[5px]">
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
          className="w-10 px-4 py-3 gap-[10px] items-center border-solid border-[1px] rounded-[6px] border-gray-border-3 bg-gray-border-2 text-black text-sm font-normal hover:bg-gray-border"
          variant="outline"
          size="sm"
          onClick={() => table.setPageIndex(table.getState().pagination.pageIndex)}
          disabled={(table.getState().pagination.pageIndex + 1) > table.getPageCount()}
          > 
          {table.getState().pagination.pageIndex + 1}
        </Button>
        <Button 
          className="w-10 px-4 py-3 gap-[10px] items-center border-solid border-[1px] rounded-[6px] border-gray-border-3 bg-gray-border-2 text-black text-sm font-normal hover:bg-gray-border"
          variant="outline"
          size="sm"
          onClick={() => table.setPageIndex(table.getState().pagination.pageIndex + 1)}
          disabled={(table.getState().pagination.pageIndex + 2) > table.getPageCount()}
          > 
          {table.getState().pagination.pageIndex + 2}
        </Button>
        <Button 
          className="w-10 px-4 py-3 gap-[10px] items-center border-solid border-[1px] rounded-[6px] border-gray-border-3 bg-gray-border-2 text-black text-sm font-normal hover:bg-gray-border"
          variant="outline"
          size="sm"
          onClick={() => table.setPageIndex(table.getState().pagination.pageIndex + 2)}
          disabled={(table.getState().pagination.pageIndex + 3) > table.getPageCount()}
          > 
          {table.getState().pagination.pageIndex + 3}
        </Button>
        <Button 
          className="w-10 px-4 py-3 gap-[10px] items-center border-solid border-[1px] rounded-[6px] border-gray-border-3 bg-gray-border-2 text-black text-sm font-normal hover:bg-gray-border"
          variant="outline"
          size="sm"
          onClick={() => table.setPageIndex(table.getState().pagination.pageIndex + 3)}
          disabled={(table.getState().pagination.pageIndex + 4) > table.getPageCount()}
          > 
          {table.getState().pagination.pageIndex + 4}
        </Button>
        <Button
          className="px-4 py-3 gap-[10px] items-center border-solid border-[1px] rounded-[6px] border-gray-border-3 bg-gray-border-2 text-black text-sm font-normal hover:bg-gray-border"
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
          <IoIosArrowForward />
        </Button>
      </div>
      <div className="flex flex-row gap-[10px] text-sm items-center ">
          <p>Number of Results</p>
          <DropdownMenu open={open} onOpenChange={setOpen}>
              <DropdownMenuTrigger className="flex flex-row items-center gap-[10px]">
                  <Button className="items-center gap-2 border-solid border-[1px] rounded-[6px] border-gray-border-3 bg-gray-border-2 text-black text-sm font-normal hover:bg-gray-border">
                      {table.getState().pagination.pageSize}
                      <IoIosArrowDown className="fill-slate-400" />
                  </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="mb-1 mt-1">
                {[4,5,6,7,8,9,10].map((pageSize) => (
                  <DropdownMenuLabel 
                  className="flex flex-row items-center gap-2 rounded"
                  key={pageSize}
                  onClick={() =>{
                    table.setPageSize(Number(pageSize))
                    setOpen(false)
                  }}
                  >
                    {pageSize}
                  
              </DropdownMenuLabel>
                ))}
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

  )
}
