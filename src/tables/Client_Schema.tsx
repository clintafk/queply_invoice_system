"use client"

import { ColumnDef } from "@tanstack/react-table"
import { z } from "zod";
import { phone } from '@/functions/phone';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
const Client_Schema = z.object({
  full_name: z.string({
    required_error: "This is required ok",
    invalid_type_error: "Oi, it a string ok",
  }),

   email: z.string({
    required_error: "This is required ok",
    invalid_type_error: "Oi, it a string ok",
   }).email({message: "Email ok, not random gibberish"}),

   contact_number: phone(z.string())
})

type client = z.infer<typeof Client_Schema>

export const columns: ColumnDef<client>[] = [
  {
    accessorKey: "full_name",
    header: "Full_Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "contact_number",
    header: "Contact_Number",
  },
]


export const sample: client[] = [
  {
    full_name: "Timothy Robert Mutia",
    email: "test@gmail.com",
    contact_number: "09763828110",
  },
  {
    full_name: "Robert Mutia",
    email: "test@gmail1.com",
    contact_number: "09763828111",
  },
  {
    full_name: "Timothy Robert Mutia",
    email: "test@gmail.com",
    contact_number: "09763828111",
  },
]