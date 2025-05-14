import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PublicKey } from "@solana/web3.js";
import { toast } from "sonner";

interface MerchantConfigProps {
  currentAddress: string;
  onAddressChange: (address: string) => void;
}

export function MerchantConfig({
  currentAddress,
  onAddressChange,
}: MerchantConfigProps) {
  const [newAddress, setNewAddress] = useState(currentAddress);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    try {
      // Validate the address is a valid Solana public key
      new PublicKey(newAddress);
      onAddressChange(newAddress);
      setIsEditing(false);
      toast.success("Merchant address updated successfully");
    } catch (error) {
      console.error(error);
      toast.error("Invalid Solana address");
    }
  };

  if (!isEditing) {
    return (
      <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg mb-8">
        <div className="flex-1">
          <p className="text-sm text-gray-400">Current Merchant Address:</p>
          <p className="font-mono text-sm">{currentAddress}</p>
        </div>
        <Button onClick={() => setIsEditing(true)}>Change Address</Button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg mb-8">
      <Input
        value={newAddress}
        onChange={(e) => setNewAddress(e.target.value)}
        placeholder="Enter new merchant address"
        className="flex-1 font-mono"
      />
      <Button onClick={handleSave}>Save</Button>
      <Button variant="outline" onClick={() => setIsEditing(false)}>
        Cancel
      </Button>
    </div>
  );
}
