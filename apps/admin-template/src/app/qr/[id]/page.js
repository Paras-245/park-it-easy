"use client";
import { useState, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { useRouter } from "next/router";

const DynamicQR = () => {
  const [qrCodeValue, setQRCodeValue] = useState("");
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    // Function to generate a random value
    const generateRandomValue = () => {
      const randomValue = Math.floor(1000 + Math.random() * 9000); // Generates a 4-digit random number
      setQRCodeValue(`${id}-${randomValue}`);
    };

    // Generate QR code initially
    generateRandomValue();

    // Update the QR code every 10 seconds (for example)
    const intervalId = setInterval(() => {
      generateRandomValue();
    }, 10000); // 10 seconds

    // Cleanup on component unmount
    return () => clearInterval(intervalId);
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-4">Your Dynamic QR Code</h1>
      <div className="mt-4 flex justify-center">
        <QRCodeCanvas value={qrCodeValue} size={256} />
      </div>
      <p className="text-sm text-gray-500 mt-2">QR changes every 10 seconds.</p>
    </div>
  );
};

export default DynamicQR;
