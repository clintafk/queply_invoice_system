"use client"
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { clientSchema } from '@/tables/clientSchema'
import { z } from 'zod'

const add_client_form = () => {

    const form = useForm<z.infer<typeof clientSchema>>({
        resolver: zodResolver(clientSchema),
        defaultValues: {
          username: "",
        },
      })

    function onSubmit(values: z.infer<typeof clientSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    }
  return (
    <div>add_client_form</div>
  )
}

export default add_client_form