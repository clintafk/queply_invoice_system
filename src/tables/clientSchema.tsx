"use client"

import { ColumnDef } from "@tanstack/react-table"
import { z } from "zod";
import { phone } from '@/functions/phone';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, ArrowUpDown } from "lucide-react";


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export const clientSchema = z.object({
  id: z.number().int(),
  full_name: z.string({
    required_error: "This is required ok",
    invalid_type_error: "Oi, it a string ok",
  }),

   email: z.string({
    required_error: "This is required ok",
    invalid_type_error: "Oi, it a string ok",
   }).email({message: "Email ok, not random gibberish"}),

   contact_number: phone(z.string()),
   is_Archived: z.boolean(),
})

type client = z.infer<typeof clientSchema> 

export const columns: ColumnDef<client>[] = [
  {
    accessorKey: "full_name",
    header: ({ column }) => {
      return (
        <Button
          className="p-0"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Full Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          className="p-0"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "contact_number",
    header: "Contact_Number",
  },
  {
    accessorKey: "is_Archived",
    header: "is_Archived",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const clients = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0 flex justify-end">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuSeparator />
            <DropdownMenuItem>View Client</DropdownMenuItem>
            <DropdownMenuItem>Edit Client</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]


export const sample: client[] = [
  {
    id: 333,
    full_name: "Timothy Robert Mutia",
    email: "test@gmail.com",
    contact_number: "09763828110",
    is_Archived: true,
  },
  {
    id: 342,
    full_name: "Robert Mutia",
    email: "test@gmail1.com",
    contact_number: "09763828111",
    is_Archived: true,
  },
  {
    id: 344,
    full_name: "Timothy Robert Mutia",
    email: "test@gmail.com",
    contact_number: "09763828111",
    is_Archived: true,
  },
  {
    id: 353,
    full_name: "Timothy Robert Mutia",
    email: "test@gmail.com",
    contact_number: "09763828110",
    is_Archived: false,
  },
  {
    id: 32,
    full_name: "Robert Mutia",
    email: "test@gmail1.com",
    contact_number: "09763828111",
    is_Archived: true,
  },
  {
    id: 34,
    full_name: "Timothy Robert Mutia",
    email: "test@gmail.com",
    contact_number: "09763828111",
    is_Archived: true,
  },
  {
    id: 33,
    full_name: "Timothy Robert Mutia",
    email: "test@gmail.com",
    contact_number: "09763828110",
    is_Archived: true,
  },
  {
    id: 42,
    full_name: "Robert Mutia",
    email: "test@gmail1.com",
    contact_number: "09763828111",
    is_Archived: true,
  },
  {
    id: 4,
    full_name: "Timothy Robert Mutia",
    email: "test@gmail.com",
    contact_number: "09763828111",
    is_Archived: true,
  },
  {
    id: 3,
    full_name: "Timothy Robert Mutia",
    email: "test@gmail.com",
    contact_number: "09763828110",
    is_Archived: true,
  },
  {
    id: 2,
    full_name: "Robert Mutia",
    email: "test@gmail1.com",
    contact_number: "09763828111",
    is_Archived: true,
  },
  {
    id: 345,
    full_name: "Timothy Robert Mutia",
    email: "test@gmail.com",
    contact_number: "09763828111",
    is_Archived: true,
  },
  {
    id: 346,
    full_name: "Hi there",
    email: "test@gmail.com",
    contact_number: "09761626364",
    is_Archived: true,
  }
]