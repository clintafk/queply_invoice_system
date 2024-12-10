"use client"
import React, { useEffect, useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { clientSchema } from '@/tables/clientSchema'
import { z } from 'zod'
import {
  GetCountries,
  GetState,
  GetCity,
  GetPhonecodes

} from "react-country-state-city";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import "react-country-state-city/dist/react-country-state-city.css"
import { City, Country, Phonecodes, State} from 'react-country-state-city/dist/esm/types'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
export default function Add_Client_Form () {

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
//    const [phonecode, setPhoneCode] = useState("");
    const [countryid, setCountryid] = useState(0);
    const [stateid, setstateid] = useState(0);
    const [cityid, setCityid] = useState(0);

    const [phonecodeList, setPhonecodeList] = React.useState<Phonecodes[]>([]);
    const [countriesList, setCountriesList] = React.useState<Country[]>([]);
    const [stateList, setStateList] = React.useState<State[]>([]);
    const [cityList, setCityList] = React.useState<City[]>([]);


    useEffect(() => {
      GetPhonecodes().then((result) => {
        setPhonecodeList(result);
      });
      GetCountries().then((result) => {
        setCountriesList(result);
      });
      GetState(countryid).then((result) => {
        setStateList(result);
      });
      GetCity(countryid, stateid).then((result) => {
        setCityList(result);
      });
    }, [countryid, stateid]);

    function onSubmit(values: z.infer<typeof clientSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    }
  return (
    <div className='w-[724px] rounded-sm drop-shadow border-solid border-2 border-gray-border'>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="gap-0">
        <div className='h-[454px] flex flex-row bg-white border-solid border-gray-border rounded-t-[6px] rounded-b-none border-1 drop-shadow-none p-8 gap-5'>
          <div className='w-full h-full flex flex-col gap-5'>
          <FormField
            control={form.control}
            name="full_name"
            render={({ field }) => (
              <FormItem className='flex flex-col gap-1 h-[62px]'>
                  <FormLabel className='font-normal text-base h-[22px]'>Name</FormLabel>
                <FormControl>
                  <Input placeholder="full name" className='rounded-[6px] ' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />     
          <FormField
            control={form.control}
            name="contact_number"
            render={({ field }) => 
            <FormItem className='flex flex-col gap-1 h-[62px]'>
              <FormLabel className='font-normal text-base h-[22px]'>Phone Number</FormLabel>
              <div className='flex flex-row gap-[10px] rounded-[6px]'>
                <FormControl>
                  <Input className='w-full rounded-[6px]' placeholder="1231234123" {...field} />
                </FormControl>
              </div>

              <FormMessage />
            </FormItem>
            }
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => 
              <FormItem className='flex flex-col gap-1 h-[62px]'>
                  <FormLabel className='font-normal text-base h-[22px]'>Country</FormLabel>
                <Select 
                onValueChange={(e) => {
                  console.log(e)
                  const country = countriesList[parseInt(e)]; //here you will get full country object.
                  console.log(country)
                  setCountryid(country.id);
                  GetState(country.id).then((result) => {
                    setStateList(result);
                  });
                  field.value = country;
                  console.log(field.value)
        }}
                defaultValue={field.value.iso2}
                >
                  <FormControl>
                    <SelectTrigger className='rounded-[6px]'>
                      <SelectValue placeholder="Select a Country"/>
                    </SelectTrigger>
                  </FormControl>
                    <SelectContent>
                    {countriesList.map((item, index) => (
                    <SelectItem key={index} value={index.toString()}>
                      {item.name}
                    </SelectItem>
                  ))}
                    </SelectContent>
                </Select>
              <FormMessage />
            </FormItem>
            }
          />
          <FormField
            control={form.control}
            name="locality"
            render={({ field }) => 
              <FormItem className='flex flex-col gap-1 h-[62px]'>
                  <FormLabel className='font-normal text-base h-[22px]'>locality</FormLabel>
                <Select  
                onValueChange={(e) => {
                  console.log(e)
                  const city = cityList[parseInt(e)]; //here you will get full State object.
                  console.log(city)
                  setCityid(city.id);
                  field.value = city;
                  console.log(field.value)
        }}
                defaultValue="City"
                >
                  <FormControl>
                    <SelectTrigger className='rounded-[6px]'>
                      <SelectValue placeholder="Select a State"/>
                    </SelectTrigger>
                  </FormControl>
                    <SelectContent>
                    {cityList.map((item, index) => (
                    <SelectItem key={index} value={index.toString()}>
                      {item.name}
                    </SelectItem>
                  ))}
                    </SelectContent>
                </Select>
              <FormMessage />
            </FormItem>
            }
          />
            <FormField
              control={form.control}
              name="throughfare"
              render={({ field }) => (
                <FormItem className='flex flex-col gap-1 h-[62px]'>
                  <FormLabel className='font-normal text-base h-[22px]'>Street/Throughfare</FormLabel>
                  <FormControl>
                    <Input placeholder="Street" className='rounded-[6px] ' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />   
          </div>
          <div className='w-full h-full flex flex-col gap-5'>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className='flex flex-col gap-1 h-[62px]'>
                  <FormLabel className='font-normal text-base h-[22px]'>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="test@email.com" className='rounded-[6px] ' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />     
            <FormField
              control={form.control}
              name="tax_id"
              render={({ field }) => (
                <FormItem className='flex flex-col gap-1 h-[62px]'>
                  <FormLabel className='font-normal text-base h-[22px]'>Tax Id</FormLabel>
                  <FormControl>
                    <Input placeholder="Tax" className='rounded-[6px] ' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />     
            <FormField
            control={form.control}
            name="administrative_Area"
            render={({ field }) => 
              <FormItem className='flex flex-col gap-1 h-[62px]'>
                  <FormLabel className='font-normal text-base h-[22px]'>State</FormLabel>
                <Select  
                onValueChange={(e) => {
                  console.log(e)
                  const state = stateList[parseInt(e)]; //here you will get full State object.
                  console.log(state)
                  setstateid(state.id);
                  GetCity(countryid, state.id).then((result) => {
                    console.log(countryid, stateid, state.id)
                    setCityList(result);
                  });
                  field.value = state;
                  console.log(field.value)
        }}
                defaultValue="state"
                >
                  <FormControl>
                    <SelectTrigger className='rounded-[6px]'>
                      <SelectValue placeholder="Select a State"/>
                    </SelectTrigger>
                  </FormControl>
                    <SelectContent>
                    {stateList.map((item, index) => (
                    <SelectItem key={index} value={index.toString()}>
                      {item.name}
                    </SelectItem>
                  ))}
                    </SelectContent>
                </Select>
              <FormMessage />
            </FormItem>
            }
          />
            <FormField
              control={form.control}
              name="postal_Code"
              render={({ field }) => (
                <FormItem className='flex flex-col gap-1 h-[62px]'>
                  <FormLabel className='font-normal text-base h-[22px]'>Postal Code</FormLabel>
                  <FormControl className='h-[36px]'>
                    <Input placeholder="Postal/zip code" className='rounded-[6px] ' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />   
              <FormField
              control={form.control}
              name="premise"
              render={({ field }) => (
                <FormItem className='flex flex-col gap-1 h-[62px]'>
                  <FormLabel className='font-normal text-base h-[22px]'>Street No./ Premise</FormLabel>
                  <FormControl>
                    <Input placeholder="St. No." className='rounded-[6px] ' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />   
          </div>
   
        </div>
        <div className='px-8 py-4 flex flex-row justify-end'>
          <Button className='items-center gap-2 rounded bg-teal-500 hover:bg-teal-600' type="submit">Create Client</Button>
        </div>

      </form>
    </Form>
    </div>

  )
}