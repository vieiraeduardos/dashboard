import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { Search, X } from "lucide-react";

export default function ServicesFilters() {
    return (
        <div className="space-y-2.5">
            <form
                className="flex items-center gap-2"
            >
                <span className="text-sm font-semibold">Filtros:</span>
                <Input
                    placeholder="ID do Atendimento"
                    className="h-8 w-auto"
                />
                <Input
                    placeholder="ID do Incidente"
                    className="h-8 w-[320px]"
                />
                <Select
                    name="status"

                    value="pending"
                    disabled={false}
                >
                    <SelectTrigger className="h-8 w-[180px]">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">Todos status</SelectItem>
                        <SelectItem value="pending">Pendente</SelectItem>
                        <SelectItem value="canceled">Cancelado</SelectItem>
                        <SelectItem value="processing">Em processamento</SelectItem>
                        <SelectItem value="delivering">Em entrega</SelectItem>
                        <SelectItem value="delivered">Entregue</SelectItem>
                    </SelectContent>
                </Select>

                <Button type="submit" variant="secondary" size="lg">
                    <Search className="mr-2 h-4 w-4" />
                    Filtrar resultados
                </Button>

                <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    disabled={false}

                >
                    <X className="mr-2 h-4 w-4" />
                    Remover filtros
                </Button>
            </form>
        </div>
    );
}
