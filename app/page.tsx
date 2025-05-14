"use client";

import { useSearchParams } from "next/navigation";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useProcessPurchase } from "@/components/counter/hooks/useReflink";
import { Button } from "@/components/ui/button";
import { PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { toast } from "sonner";
import { BN } from "@coral-xyz/anchor";
import { useQueryClient } from "@tanstack/react-query";

// Sample products
const products = [
  {
    id: 1,
    name: "Premium NFT Course",
    price: 0.5, // in SOL
    description: "Learn how to create and launch your own NFT collection",
    image: "https://placehold.co/400x300/1a1a1a/ffffff?text=NFT+Course",
  },
  {
    id: 2,
    name: "Solana Development Guide",
    price: 0.3,
    description: "Master Solana development with our comprehensive guide",
    image: "https://placehold.co/400x300/1a1a1a/ffffff?text=Solana+Guide",
  },
  {
    id: 3,
    name: "Web3 Security Course",
    price: 0.7,
    description: "Learn best practices for securing your Web3 applications",
    image: "https://placehold.co/400x300/1a1a1a/ffffff?text=Security+Course",
  },
];

// Merchant address
const MERCHANT_ADDRESS = "7VmTfGAKXbFCwjJsamN92X1kFobgPMdp9VbUT3LswGnW";

export default function Home() {
  const { connected } = useWallet();
  const { setVisible } = useWalletModal();
  const searchParams = useSearchParams();
  const affiliateAddress = searchParams.get("ref");
  const processPurchase = useProcessPurchase();
  const queryClient = useQueryClient();

  const handlePurchase = async (productId: number) => {
    if (!connected) {
      setVisible(true);
      return;
    }

    if (!affiliateAddress) {
      toast.error("No affiliate reference found");
      return;
    }

    try {
      const product = products.find((p) => p.id === productId);
      if (!product) return;

      // Convert SOL to lamports using BN
      const lamports = new BN(product.price * LAMPORTS_PER_SOL);

      await processPurchase.mutateAsync({
        amount: lamports,
        merchantAuthority: new PublicKey(MERCHANT_ADDRESS),
        affiliateAuthority: new PublicKey(affiliateAddress),
      });

      // Invalidate balance query to trigger immediate refresh
      queryClient.invalidateQueries({ queryKey: ["balance"] });
      toast.success("Purchase successful!");
    } catch (error) {
      console.error("Purchase error:", error);
      toast.error("Failed to process purchase");
    }
  };

  return (
    <div className="py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Reflink Store</h1>
        <p className="text-gray-400">
          Purchase our premium courses and support your favorite affiliate
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-400 mb-4">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">{product.price} SOL</span>
                <Button
                  onClick={() => handlePurchase(product.id)}
                  disabled={processPurchase.isPending}
                  className="bg-indigo-500 hover:bg-indigo-600"
                >
                  {processPurchase.isPending ? "Processing..." : "Buy Now"}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
