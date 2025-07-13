import { Sheet, SheetContent, SheetTitle, SheetHeader } from "@/components/ui/sheet";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import Link from "next/link";
import React from "react";

interface NavbarItem {
  href: string;
  children: React.ReactNode;
}

interface Props {
  items: NavbarItem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const NavbarSidebar: React.FC<Props> = ({ items, open, onOpenChange }) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="left" // use `side` instead of `size` unless your Sheet component supports `size`
        className="p-0 transition-none"
      >
        <SheetHeader className="p-4 border-b">
          <div className="flex items-center">
            <SheetTitle>Menu</SheetTitle>
          </div>
        </SheetHeader>
        <ScrollArea className="p-4 flex flex-col gap-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
              onClick={() => onOpenChange(false)}
            >
              {item.children}
            </Link>
          ))}
          <div className="border-t">
            <Link href="/sign-in" className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-black font-medium"
            >
                Sign in
            </Link>
            <Link href='/sign-up'className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
            >
                Start Selling
            </Link>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};