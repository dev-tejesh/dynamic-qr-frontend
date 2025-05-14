// Dynamic QR Code SaaS - QR Code Creation Page Implementation

import { useState } from "react";

export default function QRCodeCreationPage() {
  const [url, setUrl] = useState("");
  const [qrStyle, setQrStyle] = useState("Standard");
  const [color, setColor] = useState("#000000");
  const [preview, setPreview] = useState("");

  const handleGenerateQR = () => {
    // Placeholder for QR generation logic
    setPreview(`Generated QR for: ${url}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-extrabold text-white mb-8 drop-shadow-lg tracking-wide">
        Create QR Code
      </h1>

      <div className="bg-white shadow-xl p-8 rounded-2xl w-full max-w-lg">
        <div className="mb-6">
          <label className="block mb-2 text-gray-700 font-bold">
            Enter URL:
          </label>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-gray-700 font-bold">
            Select QR Style:
          </label>
          <select
            value={qrStyle}
            onChange={(e) => setQrStyle(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option>Standard</option>
            <option>Rounded</option>
            <option>Dotted</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-gray-700 font-bold">
            Select Color:
          </label>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-full h-10 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={handleGenerateQR}
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl hover:opacity-90 transition transform hover:scale-105"
          >
            Generate QR Code
          </button>
        </div>

        {preview && (
          <div className="mt-10 p-4 bg-gray-100 rounded-lg shadow-lg text-center">
            <p className="text-gray-700">{preview}</p>
          </div>
        )}
      </div>
    </div>
  );
}
