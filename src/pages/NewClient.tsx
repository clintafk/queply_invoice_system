import Add_Client_Form from "../forms/add_client_form";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function NewClient() {
    return (
            <div className="w-full">
                <main className="flex flex-col gap-5 bg-body px-10 py-7">
                    <Breadcrumb>
                        <BreadcrumbList className="text-3xl">
                            <BreadcrumbItem>
                                <BreadcrumbLink
                                    className="text-3xl font-semibold"
                                    href="/clients"
                                >
                                    Clients
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
                    <Add_Client_Form/>
                </main>
            </div>
    );
}
