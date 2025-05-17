import React, { useState } from 'react';
import { Link, Globe, FileImage, FileCode, MapPin, Phone, Mail, ShoppingCart, Wifi, Share2 } from 'lucide-react';
import Button from '../common/Button';
import { Card, CardHeader, CardContent, CardFooter } from '../common/Card';

const QrCodeGenerator: React.FC = () => {
  const [qrType, setQrType] = useState('url');
  const [urlValue, setUrlValue] = useState('https://');
  const [color, setColor] = useState('#2563EB');
  const [shape, setShape] = useState('square');
  const [withLogo, setWithLogo] = useState(false);
  
  const types = [
    { id: 'url', name: 'Website URL', icon: <Globe className="h-5 w-5" /> },
    { id: 'text', name: 'Plain Text', icon: <FileCode className="h-5 w-5" /> },
    { id: 'location', name: 'Location', icon: <MapPin className="h-5 w-5" /> },
    { id: 'phone', name: 'Phone Number', icon: <Phone className="h-5 w-5" /> },
    { id: 'email', name: 'Email', icon: <Mail className="h-5 w-5" /> },
    { id: 'product', name: 'Product', icon: <ShoppingCart className="h-5 w-5" /> },
    { id: 'wifi', name: 'WiFi', icon: <Wifi className="h-5 w-5" /> },
    { id: 'social', name: 'Social Profile', icon: <Share2 className="h-5 w-5" /> },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="w-full lg:w-2/3">
        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold text-gray-900">Create a new QR Code</h2>
            <p className="text-sm text-gray-500 mt-1">
              Choose type and customize your QR code
            </p>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                QR Code Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {types.map((type) => (
                  <button
                    key={type.id}
                    className={`p-3 flex flex-col items-center justify-center rounded-lg border transition-colors hover:bg-gray-50 ${
                      qrType === type.id 
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 text-gray-700'
                    }`}
                    onClick={() => setQrType(type.id)}
                  >
                    {type.icon}
                    <span className="mt-1 text-xs">{type.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1">
                Website URL
              </label>
              <input
                id="url"
                type="url"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={urlValue}
                onChange={(e) => setUrlValue(e.target.value)}
                placeholder="https://example.com"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  QR Color
                </label>
                <div className="flex items-center">
                  <input
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="h-10 w-10 rounded border border-gray-300 cursor-pointer"
                  />
                  <input
                    type="text"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="ml-3 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Corner Shape
                </label>
                <div className="flex items-center space-x-4">
                  <button
                    className={`h-10 w-10 border ${shape === 'square' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'} rounded flex items-center justify-center`}
                    onClick={() => setShape('square')}
                  >
                    <div className="h-6 w-6 bg-gray-700"></div>
                  </button>
                  <button
                    className={`h-10 w-10 border ${shape === 'rounded' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'} rounded flex items-center justify-center`}
                    onClick={() => setShape('rounded')}
                  >
                    <div className="h-6 w-6 bg-gray-700 rounded-lg"></div>
                  </button>
                  <button
                    className={`h-10 w-10 border ${shape === 'circle' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'} rounded flex items-center justify-center`}
                    onClick={() => setShape('circle')}
                  >
                    <div className="h-6 w-6 bg-gray-700 rounded-full"></div>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center mb-6">
              <input
                id="with-logo"
                type="checkbox"
                checked={withLogo}
                onChange={() => setWithLogo(!withLogo)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="with-logo" className="ml-2 block text-sm text-gray-700">
                Add logo to center (Pro feature)
              </label>
            </div>

            {withLogo && (
              <div className="mb-6 p-4 border border-dashed border-gray-300 rounded-lg text-center">
                <div className="space-y-2">
                  <FileImage className="h-8 w-8 text-gray-400 mx-auto" />
                  <p className="text-sm text-gray-600">Drag and drop your logo here, or click to select a file</p>
                  <p className="text-xs text-gray-500">PNG, JPG or SVG up to 2MB</p>
                  <Button variant="outline" size="sm">
                    Select file
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">
              Reset
            </Button>
            <Button>
              Generate QR Code
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="w-full lg:w-1/3">
        <Card className="sticky top-24">
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900">Preview</h3>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="w-48 h-48 border border-gray-300 rounded flex items-center justify-center mb-4">
              {/* Simulated QR code preview - Just a visual representation */}
              <div 
                className="w-40 h-40 p-2 grid grid-cols-7 grid-rows-7 gap-0.5"
                style={{ 
                  color: color
                }}
              >
                {Array.from({ length: 49 }).map((_, i) => {
                  // Pattern that resembles a QR code
                  const isCornerTL = i < 15 && (i < 3 || i % 7 < 3);
                  const isCornerTR = i < 15 && (i % 7 > 3);
                  const isCornerBL = i > 33 && (i % 7 < 3);
                  
                  return (
                    <div 
                      key={i} 
                      className={`
                        ${isCornerTL || isCornerTR || isCornerBL || Math.random() > 0.6 ? 'bg-current' : 'bg-transparent'}
                        ${shape === 'rounded' && (isCornerTL || isCornerTR || isCornerBL) ? 'rounded-lg' : ''}
                        ${shape === 'circle' && (isCornerTL || isCornerTR || isCornerBL) ? 'rounded-full' : ''}
                      `}
                    ></div>
                  );
                })}
                {withLogo && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center">
                      <FileImage className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500">
                Scan to visit <span className="font-medium text-gray-700 break-all">{urlValue}</span>
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center space-x-3">
            <Button variant="outline" size="sm">
              Download
            </Button>
            <Button variant="outline" size="sm">
              Share
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default QrCodeGenerator;