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

function NewInvoice2() {
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
            <div className="flex w-[945px] flex-col rounded-sm border border-gray-border bg-white p-8">
                <div className="flex w-full p-8">
                    <div className="w-full"></div>
                </div>
            </div>
        </main>
    );
}

export default NewInvoice2;
