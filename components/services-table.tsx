"use client"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { Button } from "./ui/button";

import { Search } from "lucide-react";

import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";

import { DialogHeader } from "./ui/dialog";

const services = [
    {
        service_id: "100",
        incident_number: "INC001",
        status: "Pending",
        details: "View Details",
    },
    {
        service_id: "101",
        incident_number: "INC002",
        status: "Completed",
        details: "View Details",
    },
    {
        service_id: "102",
        incident_number: "INC003",
        status: "Pending",
        details: "View Details",
    },
    {
        service_id: "103",
        incident_number: "INC004",
        status: "Completed",
        details: "View Details",
    },
];

export default function ServicesTable() {

    return (
        <div className="rounded-md border">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">ID</TableHead>
                        <TableHead>Incidente</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Detalhes</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {services.map((service) => (
                        <TableRow key={service.service_id}>
                            <TableCell className="font-medium">{service.service_id}</TableCell>
                            <TableCell>{service.incident_number}</TableCell>
                            <TableCell>{service.status}</TableCell>
                            <TableCell className="text-right">
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button>
                                            <Search className="mr-2 h-4 w-4" />
                                            Ver detalhes
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[425px]">
                                        <DialogHeader>
                                            <DialogTitle>Detalhes da Consulta</DialogTitle>
                                            <DialogDescription>
                                                {service.details}
                                            </DialogDescription>
                                        </DialogHeader>
                                    </DialogContent>
                                </Dialog>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>

            </Table>
        </div>
    );
}
