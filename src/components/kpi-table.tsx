"use client"

import * as React from "react"
import {
  type ColumnDef,
  type SortingState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export type KPIItem = {
  key: string
  value: string
}

interface KPITableProps {
  items: KPIItem[]
  className?: string
}

// Helper to convert values like "2.3M", "323K" into numbers
function parseNumericValue(value: string): number {
  if (!value) return 0
  const cleaned = value.replace(/[^0-9.]/g, "")
  if (value.includes("M")) return parseFloat(cleaned) * 1_000_000
  if (value.includes("K")) return parseFloat(cleaned) * 1_000
  return parseFloat(cleaned)
}

export function KPITable({ items, className }: KPITableProps) {
  const [sorting, setSorting] = React.useState<SortingState>([])

  const columns: ColumnDef<KPIItem>[] = [
    {
      accessorKey: "key",
      header: () => <p>Metric</p>,
      cell: ({ row }) => (
        <div className="font-bold">{row.getValue("key")}</div>
      ),
    },
    {
      accessorKey: "value",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Value
          {column.getIsSorted() === "asc" ? (
            <ArrowUp className="ml-2 h-4 w-4" />
          ) : column.getIsSorted() === "desc" ? (
            <ArrowDown className="ml-2 h-4 w-4" />
          ) : (
            <ArrowUpDown className="ml-2 h-4 w-4" />
          )}
        </Button>
      ),
      cell: ({ row }) => <div>${row.getValue("value")}</div>,
      sortingFn: (a, b, columnId) => {
        const aVal = parseNumericValue(a.getValue(columnId))
        const bVal = parseNumericValue(b.getValue(columnId))
        return aVal === bVal ? 0 : aVal > bVal ? 1 : -1
      },
    },
  ]

  const table = useReactTable({
    data: items ?? [],
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: { sorting },
  })

  return (
    <div className={`w-full max-w-2xl rounded-md border ${className}`}>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No KPIs available.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
