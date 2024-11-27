import { invoiceTableColumns, invoiceTableData } from "./columns";
import InvoiceDataTable from "./data-table";

function InvoicePage() {
    return (
        <div className="container px-10 py-10">
            <InvoiceDataTable
                columns={invoiceTableColumns}
                data={invoiceTableData}
            />
        </div>
    );
}

export default InvoicePage;
