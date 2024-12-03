"use client"
import React, { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { clientSchema } from '@/tables/clientSchema'
import { z } from 'zod'
import {
  CitySelect,
  CountrySelect,
  PhonecodeSelect,
  RegionSelect,

} from "react-country-state-city";
import countryList from "react-select-country-list";
import { useMemo } from 'react';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import "react-country-state-city/dist/react-country-state-city.css"
import { Country, Phonecodes, Region } from 'react-country-state-city/dist/esm/types'
import { Button } from '@/components/ui/button'
export default function Add_Client_Form () {
    const ISO = useMemo(() => countryList().getData(), [])

    const form = useForm<z.infer<typeof clientSchema>>({
        resolver: zodResolver(clientSchema),
        defaultValues: {
           full_name: "name",
           email: "email",
           contact_number: "09xxxxxxxxx",
           tax_id: "",
           country: {
           },

           
          },
      })
    const [phonecode, setPhoneCode] = useState("");
    const [countryid, setCountryid] = useState(0);
    const [stateid, setstateid] = useState(0);

    const handleCountryChange:React.ChangeEventHandler<Country> = (e) => {
      setCountryid(e.currentTarget.id);
    }

    const handlePhoneChange:React.ChangeEventHandler<Phonecodes> = (e) => {
      setPhoneCode(e.currentTarget.phone_code)
    }

    function onSubmit(values: z.infer<typeof clientSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    }
  return (
    <div>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="full_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="name" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />        
          <h6>Country</h6>
          <CountrySelect
            onChange={() => handleCountryChange}
            placeHolder="Select Country"

          />

          <h6>Phone Code</h6>
          <PhonecodeSelect
            onChange={() => handlePhoneChange}
            placeHolder="Select Phone Code"
          />
          <h6>City</h6>
          <CitySelect
            countryid={countryid}
            stateid={stateid}
            onChange={(e) => {
              console.log(e);
            }}
            placeHolder="Select City"
          />
        <Button type="submit">Create Client</Button>
      </form>
    </Form>
    </div>

  )
}