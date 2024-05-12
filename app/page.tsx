import Image from "next/image";
import {
  Package2,
  Home,
  ShoppingCart,
  Package,
  Plus,
  EllipsisVertical,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <aside className="fixed inset-y-0 right-0 z-10 hidden w-14 flex-col border-l bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <Link
            href="#"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">Acme Inc</span>
          </Link>

          <Link
            href="#"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
          >
            <Home className="h-5 w-5" />
            <span className="sr-only">Dashboard</span>
          </Link>

          <Link
            href="#"
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Orders</span>
          </Link>

          <Link
            href="#"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
          >
            <Package className="h-5 w-5" />
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

         <div className=" h-2/4 border-b">
          {/* chart area */}
         
          </div>

          <div>data table</div>
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
