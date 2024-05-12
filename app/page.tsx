'use client'
import Image from "next/image";
import { ReactNode } from "react";

import {
  Plus,
  EllipsisVertical,
  SquareArrowUp,
  Radio,
  HardDrive,
  Calendar,
  Building2,
  Bell,
  Book,
  ArrowLeftFromLine,
  ChevronDown,
  Minus,
  Scan,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { DataTable } from "@/components/data-table";
import { ColumnDef } from "@tanstack/react-table";

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

const columns: ColumnDef<DataType>[] = [
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
    header: <EllipsisVertical /> as any, 
  },
];

const data = [
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

  // Add more data objects as needed
];


export default function Page() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <aside className="fixed inset-y-0 right-0 z-10 hidden w-14 flex-col border-l bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <Link
            href="#"
            //className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
          >
            <SquareArrowUp className="h-6 w-6 transition-all group-hover:scale-110" />
            <span className="sr-only">Trending Up</span>
          </Link>

          <Link
            href="#"
            className="bg-[#2962FF] flex h-9 w-9 items-center justify-center rounded-lg text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
          >
            <Radio className="h-6 w-6" />
            <span className="sr-only">Radio</span>
          </Link>

          <Link
            href="#"
            className="flex h-9 w-9 items-center justify-center rounded-lg  text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
          >
            <HardDrive className="h-6 w-6" />
            <span className="sr-only">Orders</span>
          </Link>

          <Link
            href="#"
            className="flex h-9 w-9 items-center justify-center rounded-lg  text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
          >
            <Calendar className="h-6 w-6" />
            <span className="sr-only">Products</span>
          </Link>

          <Link
            href="#"
            className="flex h-9 w-9 items-center justify-center rounded-lg  text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
          >
            <Building2 className="h-6 w-6" />
            <span className="sr-only">Products</span>
          </Link>

          <Link
            href="#"
            className="flex h-9 w-9 items-center justify-center rounded-lg  text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
          >
            <Bell className="h-6 w-6" />
            <span className="sr-only">Products</span>
          </Link>

          <Link
            href="#"
            className="flex h-9 w-9 items-center justify-center rounded-lg  text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
          >
            <Book className="h-6 w-6" />
            <span className="sr-only">Products</span>
          </Link>
          <Separator />

          <Link
            href="#"
            className=" bg-secondary flex h-9 w-9 items-center justify-center rounded-lg text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
          >
            <ArrowLeftFromLine className="h-5 w-5 text-background" />
            <span className="sr-only">Products</span>
          </Link>
        </nav>
      </aside>
      {/* content */}
      <div className=" flex lg:pr-14 min-h-screen">
        {/* left side column */}
        <div className="flex flex-col w-8/12">
          {/* left side header */}
          <div className=" bg-background h-14 border-b flex justify-between items-center">
            <div className="h-14 w-16 flex justify-center items-center  border-r">
              <Image src="/Logo.png" alt="Logo" width={32} height={32} />
            </div>
            <div className="mr-2">
              <Button className=" bg-[#2962FF] text-primary">
                {" "}
                <EllipsisVertical className=" bg-[#5280FF] text-primary rounded-sm py-1 mr-3" />
                Deposit
              </Button>
            </div>
          </div>
          {/* header end */}

          <div className=" h-3/5 border-b">{/* chart area */}</div>
          {/* data table area */}
          <div className=" bg-background">
            {/* accoutt rowrow */}
            <div className=" h-16 border-b flex  justify-between items-center px-5 overflow-scroll gap-x-2">
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/usa.png" alt="Avatar" />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none uppercase text-muted-foreground">
                    account
                  </p>
                  <div className=" flex">
                    <p className="text-sm ">986598566986</p>
                    <ChevronDown className=" text-[#2962FF] ml-5" />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none uppercase text-muted-foreground">
                    balance
                  </p>

                  <p className="text-sm text-nowrap ">101,873.51 USD</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none uppercase text-muted-foreground">
                    EQUITY
                  </p>

                  <p className="text-sm text-nowrap  ">99,237.07</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none uppercase text-muted-foreground">
                    CREDIT
                  </p>

                  <p className="text-sm  text-nowrap ">0.00</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none uppercase text-muted-foreground">
                    MARGIN
                  </p>

                  <p className="text-sm text-nowrap  ">3,931.98</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none uppercase text-muted-foreground text-nowrap ">
                    FREE MARGIN
                  </p>

                  <p className="text-sm  text-nowrap ">95,286.78</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none uppercase text-muted-foreground text-nowrap ">
                    MARGIN LEVEL
                  </p>

                  <p className="text-sm text-nowrap ">2,523.38%</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none uppercase text-muted-foreground">
                    PROFIT
                  </p>

                  <p className="text-sm text-nowrap ">15,000,000</p>
                </div>
              </div>
            </div>

            <div className=" h-14 border-b flex  justify-between items-center px-5 ">
              <div className="flex gap-x-3">
                {/* <div className="border-b-blue-700 border-b-2 h-12 items-center flex"> */}
                <Button className=" bg-muted text-primary px-12 hover:bg-muted">
                  Open Trades (2)
                </Button>
                {/* </div> */}
                <Button className=" bg-background text-primary px-12 hover:text-muted">
                  Pending Trades (5)
                </Button>
                <Button className=" bg-background text-primary px-12 hover:text-muted">
                  Account History
                </Button>
              </div>

              <div className=" flex gap-x-4">
                <Minus />
                <Scan />
              </div>
            </div>

            <div className=" border-b">
              {/* data table */}
             
                <DataTable columns={columns} data={data} />
              
            </div>
          </div>
        </div>
        {/* right side column */}
        <div className="border-l w-4/12 bg-background">
          <div className=" bg-background h-14 border-b ml-5 mr-4 p-1.5 flex justify-between items-center">
            <p className=" uppercase font-semibold p-3">news</p>
            <Plus />
          </div>
          <div className="">
            <ScrollArea className="max-h-screen rounded-md p-4">
              {/* scroll stuff here */}
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  );
}
