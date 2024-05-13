"use client"
import { Header } from "@/components/header";

import ServicesTable from "./services-table";
import ServicesFilters from "./services-filters";
import Accessibility from "./accessibility";

export default function Services() {
    return (
        <>
            <Header />
            <div className="flex flex-col gap-4 m-10">

                <h1 className="text-2xl font-semibold">Atendimentos</h1>

                <ServicesFilters />

                <ServicesTable />
            </div>
        </>
    );
}
