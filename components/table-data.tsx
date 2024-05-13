import { ColumnDef } from "@tanstack/react-table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { EllipsisVertical } from "lucide-react";

interface DataType {
  ticket: string;
  symbol: string;
  time: string;
  type: string;
  lot: string;
  openPrice: string;
  stopLoss: string;
  takeProfit: string;
  currentPrice: string;
  swap: string;
  profit: string;
  icon: any;
}

export const columns: ColumnDef<DataType>[] = [
  {
    accessorKey: "ticket",
    header: "Ticket",
  },
  {
    accessorKey: "symbol",
    header: "Symbol",
    cell: ({ getValue, row }: any) => (
      <div className="flex items-center space-x-2">
        <Avatar>
          <AvatarFallback></AvatarFallback>
        </Avatar>
        <span>{getValue()}</span>
      </div>
    ),
  },

  {
    accessorKey: "time",
    header: "Time",
    cell: ({ getValue }: any) => {
      const [date, time] = getValue().split(" ");
      return (
        <div className=" flex flex-col items-center">
          <span>{date}</span>
          <br />
          <span>{time}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ getValue }: any) => (
      <span className="text-green-500">{getValue()}</span>
    ),
  },
  {
    accessorKey: "lot",
    header: "Lot",
  },
  {
    accessorKey: "openPrice",
    header: "Open Price",
  },
  {
    accessorKey: "stopLoss",
    header: "Stop Loss",
  },
  {
    accessorKey: "takeProfit",
    header: "Take Profit",
  },
  {
    accessorKey: "currentPrice",
    header: "Current Price",
  },
  {
    accessorKey: "swap",
    header: "Swap",
  },
  {
    accessorKey: "profit",
    header: "Type",
    cell: ({ getValue }: any) => (
      <span className="text-green-500">{getValue()}</span>
    ),
  },

  {
    accessorKey: "icon",
    header: (<EllipsisVertical />) as any,
  },
];

export const data = [
  {
    ticket: "2415959",
    symbol: "AAPL",
    time: "12:03:45 2024-03-13",
    type: "BUY",
    lot: "1",
    openPrice: "1.12000,6698",
    stopLoss: "0",
    takeProfit: "0",
    currentPrice: "1.09764",
    swap: "-279.16",
    profit: "12,234.000, 596",
    icon: "",
  },

  {
    ticket: "2415959",
    symbol: "AAPL",
    time: "12:03:45 2024-03-13",
    type: "BUY",
    lot: "1",
    openPrice: "1.12000,6698",
    stopLoss: "0",
    takeProfit: "0",
    currentPrice: "1.09764",
    swap: "-279.16",
    profit: "12,234.000, 596",
    icon: "",
  },

  {
    ticket: "2415959",
    symbol: "AAPL",
    time: "12:03:45 2024-03-13",
    type: "BUY",
    lot: "1",
    openPrice: "1.12000,6698",
    stopLoss: "0",
    takeProfit: "0",
    currentPrice: "1.09764",
    swap: "-279.16",
    profit: "12,234.000, 596",
    icon: "",
  },

  {
    ticket: "2415959",
    symbol: "AAPL",
    time: "12:03:45 2024-03-13",
    type: "BUY",
    lot: "1",
    openPrice: "1.12000,6698",
    stopLoss: "0",
    takeProfit: "0",
    currentPrice: "1.09764",
    swap: "-279.16",
    profit: "12,234.000, 596",
    icon: "",
  },

  
];
