"use client";

import { PropsWithChildren } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Toaster } from "@/components/ui/sonner";
import { WalletButton } from "../counter/WalletButton";
import { SolanaProvider } from "../counter/provider/Solana";

export function BaseLayout({ children }: PropsWithChildren) {
  const pathname = usePathname();

  return (
    <SolanaProvider>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-900/75 backdrop-blur-sm">
          <div className="container mx-auto flex h-16 items-center justify-between px-4">
            <div className="flex items-center space-x-8">
              <Link
                href="/"
                className="flex items-center space-x-2 transition-opacity hover:opacity-80"
              >
                <span className="text-xl font-bold text-white">
                  Reflink Store
                </span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <WalletButton />
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8 min-h-[calc(100vh-4rem)]">
          {children}
        </main>
      </div>
      <Toaster />
    </SolanaProvider>
  );
}
