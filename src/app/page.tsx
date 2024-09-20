import Image from "next/image";
import {
  TableCaption,
  TableFooter,
} from "@/components/ui/table"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { orario } from "../../db/schema";
import { db } from "../../db/client";


export default function Home() {
const records = db.select().from(orario).all()
  return (
    <div className="grid gap-8 items-center justify-items-center font-[var(--font-geist-sans)]">
      <main>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ORARIO</TableHead>
            <TableHead>LUNEDI</TableHead>
            <TableHead>MARTEDI</TableHead>
            <TableHead>MERCOLEDI</TableHead>
            <TableHead>GIOVEDI</TableHead>
            <TableHead>VENERDI</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[...records].map((record, index) => (
               <TableRow key={record.orario}>
               <TableCell className="font-medium">{record.orario}</TableCell>
               <TableCell className="font-bold">{record.lunedi}</TableCell>
               <TableCell className="font-bold">{record.martedi}</TableCell>
               <TableCell className="font-bold">{record.mercoledi}</TableCell>
               <TableCell className="font-bold">{record.giovedi}</TableCell>
               <TableCell className="font-bold">{record.venerdi}</TableCell>
             </TableRow>
          ))}
        </TableBody>
        <TableFooter>
        <TableRow>
          <TableCell className="text-center" colSpan={6}>Puoi provare anche la mia <a href="/api/docs">API</a> </TableCell>
        </TableRow>
      </TableFooter>
      </Table>
      </main>
    </div>
  );
} 
   
 