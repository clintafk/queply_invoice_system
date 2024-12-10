import * as React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { invoiceTableData, InvoiceTableData } from "@/invoices/columns";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function formatCurrency(value: string) {
    const number = parseFloat(value);
    if (isNaN(number)) return "";
    return new Intl.NumberFormat("en-PH", {
        style: "currency",
        currency: "PHP",
    }).format(number);
}

const invoiceSchema = z.object({
    invoice_id: z.number(),
    client_id: z.string(),
    user_id: z.number(),
    issue_date: z.date(),
    due_date: z.date(),
    subtotal: z
        .string()
        .refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
            message: "Subtotal must be a non-negative number",
        }),
    discount: z
        .string()
        .refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
            message: "Subtotal must be a non-negative number",
        }),
    total_due: z
        .string()
        .refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
            message: "Subtotal must be a non-negative number",
        }),
    amount_paid: z
        .string()
        .refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
            message: "Subtotal must be a non-negative number",
        }),
    note: z.string(),
    status: z.string(),
    updated_at: z.date(),
});

function NewInvoice() {
    const [date, setDate] = React.useState<Date>();
    const invoiceForm = useForm<z.infer<typeof invoiceSchema>>({
        resolver: zodResolver,
        defaultValues: {
            note: "",
            status: "",
        },
    });

    function onSubmitInvoice(values: z.infer<typeof invoiceForm>) {
        console.log(values);
    }

    return (
        <main className="flex flex-col gap-5 bg-body px-10 py-7">
            <Breadcrumb>
                <BreadcrumbList className="text-3xl">
                    <BreadcrumbItem>
                        <BreadcrumbLink
                            className="text-3xl font-semibold"
                            href="/invoices"
                        >
                            Invoices
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink
                            className="text-3xl font-semibold text-black"
                            href="/"
                        >
                            Create
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div className="flex w-custom-724 flex-col rounded-sm border border-gray-border bg-white">
                <div className="flex w-full flex-col gap-10px px-8 py-8">
                    <div className="w-full">
                        <Form {...invoiceForm}>
                            <form
                                onSubmit={invoiceForm.handleSubmit(
                                    onSubmitInvoice,
                                )}
                                className="rounded-xs flex flex-col justify-between"
                            >
                                <div className="flex flex-col gap-[20px]">
                                    <div className="flex w-full flex-row gap-5">
                                        <FormField
                                            disabled
                                            control={invoiceForm.control}
                                            name="invoice_id"
                                            render={({ field }) => (
                                                <FormItem className="w-full">
                                                    <FormLabel className="text-base font-normal">
                                                        Invoice ID
                                                    </FormLabel>
                                                    <FormControl className="rounded-sm border border-form-border">
                                                        <Input {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            disabled
                                            control={invoiceForm.control}
                                            name="user_id"
                                            render={({ field }) => (
                                                <FormItem className="w-full">
                                                    <FormLabel className="text-base font-normal">
                                                        User ID (Employee
                                                        creating invoice)
                                                    </FormLabel>
                                                    <FormControl className="rounded-sm">
                                                        <Input {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className="flex w-full flex-row gap-5">
                                        <FormField
                                            control={invoiceForm.control}
                                            name="client_id"
                                            render={({ field }) => (
                                                <FormItem className="w-full">
                                                    <FormLabel className="text-base font-normal">
                                                        Client
                                                    </FormLabel>
                                                    <FormControl className="min-h-[36px] rounded-sm border border-gray-border-2">
                                                        <Select
                                                            onValueChange={
                                                                field.onChange
                                                            }
                                                            defaultValue={
                                                                field.value
                                                            }
                                                            value={field.value}
                                                        >
                                                            <SelectTrigger>
                                                                <SelectValue placeholder="Select Client" />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                {invoiceTableData.map(
                                                                    (value) => (
                                                                        <SelectItem
                                                                            value={
                                                                                value.client_id
                                                                            }
                                                                        >
                                                                            {
                                                                                value.client_id
                                                                            }
                                                                        </SelectItem>
                                                                    ),
                                                                )}
                                                            </SelectContent>
                                                        </Select>
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={invoiceForm.control}
                                            name="issue_date"
                                            render={({ field }) => (
                                                <FormItem className="w-full">
                                                    <FormLabel className="text-base font-normal">
                                                        Issue Date
                                                    </FormLabel>
                                                    <Popover>
                                                        <PopoverTrigger asChild>
                                                            <FormControl>
                                                                <Button
                                                                    variant={
                                                                        "outline"
                                                                    }
                                                                    className={cn(
                                                                        "w-full justify-start rounded-sm text-left font-normal",
                                                                        !date &&
                                                                            "text-muted-foreground",
                                                                    )}
                                                                >
                                                                    {field.value ? (
                                                                        format(
                                                                            field.value,
                                                                            "PPP",
                                                                        )
                                                                    ) : (
                                                                        <span>
                                                                            Pick
                                                                            a
                                                                            date
                                                                        </span>
                                                                    )}
                                                                </Button>
                                                            </FormControl>
                                                        </PopoverTrigger>
                                                        <PopoverContent>
                                                            <Calendar
                                                                mode="single"
                                                                selected={
                                                                    field.value
                                                                }
                                                                onSelect={
                                                                    field.onChange
                                                                }
                                                                disabled={(
                                                                    date,
                                                                ) =>
                                                                    date >
                                                                        new Date() ||
                                                                    date <
                                                                        new Date(
                                                                            "1900-10-10",
                                                                        )
                                                                }
                                                                initialFocus
                                                            />
                                                        </PopoverContent>
                                                    </Popover>
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className="flex w-full flex-row gap-5">
                                        <FormField
                                            control={invoiceForm.control}
                                            name="due_date"
                                            render={({ field }) => (
                                                <FormItem className="w-full">
                                                    <FormLabel className="text-base font-normal">
                                                        Due Date
                                                    </FormLabel>
                                                    <Popover>
                                                        <PopoverTrigger asChild>
                                                            <FormControl>
                                                                <Button
                                                                    variant={
                                                                        "outline"
                                                                    }
                                                                    className={cn(
                                                                        "w-full justify-start rounded-sm text-left font-normal",
                                                                        !date &&
                                                                            "text-muted-foreground",
                                                                    )}
                                                                >
                                                                    {field.value ? (
                                                                        format(
                                                                            field.value,
                                                                            "PPP",
                                                                        )
                                                                    ) : (
                                                                        <span>
                                                                            Pick
                                                                            a
                                                                            date
                                                                        </span>
                                                                    )}
                                                                </Button>
                                                            </FormControl>
                                                        </PopoverTrigger>
                                                        <PopoverContent>
                                                            <Calendar
                                                                mode="single"
                                                                selected={
                                                                    field.value
                                                                }
                                                                onSelect={
                                                                    field.onChange
                                                                }
                                                                disabled={(
                                                                    date,
                                                                ) =>
                                                                    date >
                                                                        new Date() ||
                                                                    date <
                                                                        new Date(
                                                                            "1900-10-10",
                                                                        )
                                                                }
                                                                initialFocus
                                                            />
                                                        </PopoverContent>
                                                    </Popover>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={invoiceForm.control}
                                            name="subtotal"
                                            render={({ field }) => (
                                                <FormItem className="w-full">
                                                    <FormLabel className="text-base font-normal">
                                                        Subtotal
                                                    </FormLabel>
                                                    <FormControl className="min-h-[36px] rounded-sm border border-form-border">
                                                        <Input
                                                            placeholder="0.00"
                                                            {...field}
                                                            onChange={(e) => {
                                                                const value =
                                                                    e.target.value.replace(
                                                                        /[^0-9.]/g,
                                                                        "",
                                                                    );
                                                                field.onChange(
                                                                    value,
                                                                );
                                                            }}
                                                            onBlur={(e) => {
                                                                field.onBlur();
                                                                invoiceForm.setValue(
                                                                    "subtotal",
                                                                    formatCurrency(
                                                                        e.target
                                                                            .value,
                                                                    ).replace(
                                                                        /[^0-9.]/g,
                                                                        "",
                                                                    ),
                                                                );
                                                            }}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className="flex w-full flex-row gap-5">
                                        <FormField
                                            control={invoiceForm.control}
                                            name="discount"
                                            render={({ field }) => (
                                                <FormItem className="w-full">
                                                    <FormLabel className="text-base font-normal">
                                                        Discount
                                                    </FormLabel>
                                                    <FormControl className="min-h-[36px] rounded-sm border border-form-border">
                                                        <Input
                                                            placeholder="0.00"
                                                            {...field}
                                                            onChange={(e) => {
                                                                const value =
                                                                    e.target.value.replace(
                                                                        /[^0-9.]/g,
                                                                        "",
                                                                    );
                                                                field.onChange(
                                                                    value,
                                                                );
                                                            }}
                                                            onBlur={(e) => {
                                                                field.onBlur();
                                                                invoiceForm.setValue(
                                                                    "subtotal",
                                                                    formatCurrency(
                                                                        e.target
                                                                            .value,
                                                                    ).replace(
                                                                        /[^0-9.]/g,
                                                                        "",
                                                                    ),
                                                                );
                                                            }}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={invoiceForm.control}
                                            name="total_due"
                                            render={({ field }) => (
                                                <FormItem className="w-full">
                                                    <FormLabel className="text-base font-normal">
                                                        Total Due
                                                    </FormLabel>
                                                    <FormControl className="min-h-[36px] rounded-sm border border-form-border">
                                                        <Input
                                                            placeholder="0.00"
                                                            {...field}
                                                            onChange={(e) => {
                                                                const value =
                                                                    e.target.value.replace(
                                                                        /[^0-9.]/g,
                                                                        "",
                                                                    );
                                                                field.onChange(
                                                                    value,
                                                                );
                                                            }}
                                                            onBlur={(e) => {
                                                                field.onBlur();
                                                                invoiceForm.setValue(
                                                                    "subtotal",
                                                                    formatCurrency(
                                                                        e.target
                                                                            .value,
                                                                    ).replace(
                                                                        /[^0-9.]/g,
                                                                        "",
                                                                    ),
                                                                );
                                                            }}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className="flex w-full flex-row gap-5">
                                        <FormField
                                            control={invoiceForm.control}
                                            name="amount_paid"
                                            render={({ field }) => (
                                                <FormItem className="w-full">
                                                    <FormLabel className="text-base font-normal">
                                                        Amount Paid
                                                    </FormLabel>
                                                    <FormControl className="min-h-[36px] rounded-sm border border-form-border">
                                                        <Input
                                                            placeholder="0.00"
                                                            {...field}
                                                            onChange={(e) => {
                                                                const value =
                                                                    e.target.value.replace(
                                                                        /[^0-9.]/g,
                                                                        "",
                                                                    );
                                                                field.onChange(
                                                                    value,
                                                                );
                                                            }}
                                                            onBlur={(e) => {
                                                                field.onBlur();
                                                                invoiceForm.setValue(
                                                                    "subtotal",
                                                                    formatCurrency(
                                                                        e.target
                                                                            .value,
                                                                    ).replace(
                                                                        /[^0-9.]/g,
                                                                        "",
                                                                    ),
                                                                );
                                                            }}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={invoiceForm.control}
                                            name="status"
                                            render={({ field }) => (
                                                <FormItem className="w-full">
                                                    <FormLabel className="text-base font-normal">
                                                        Status
                                                    </FormLabel>
                                                    <FormControl className="min-h-[36px] rounded-sm border border-gray-border-2">
                                                        <Select
                                                            onValueChange={
                                                                field.onChange
                                                            }
                                                            defaultValue={
                                                                field.value
                                                            }
                                                            value={field.value}
                                                        >
                                                            <SelectTrigger>
                                                                <SelectValue placeholder="Select Status" />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                {invoiceTableData.map(
                                                                    (value) => (
                                                                        <SelectItem
                                                                            value={
                                                                                value.status
                                                                            }
                                                                        >
                                                                            {
                                                                                value.status
                                                                            }
                                                                        </SelectItem>
                                                                    ),
                                                                )}
                                                            </SelectContent>
                                                        </Select>
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className="flex w-full flex-row gap-5">
                                        <FormField
                                            control={invoiceForm.control}
                                            name="note"
                                            render={({ field }) => (
                                                <FormItem className="w-full">
                                                    <FormLabel className="text-base font-normal">
                                                        Note
                                                    </FormLabel>
                                                    <FormControl className="">
                                                        <Textarea
                                                            placeholder="Enter note"
                                                            className="resize-none rounded-sm"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </div>
                            </form>
                        </Form>
                    </div>
                </div>
                <div className="flex justify-end bg-body px-8 py-4">
                    <Button className="rounded-sm bg-teal-500 px-6 py-3 hover:bg-teal-600">
                        Create Client
                    </Button>
                </div>
            </div>
        </main>
    );
}

export default NewInvoice;
