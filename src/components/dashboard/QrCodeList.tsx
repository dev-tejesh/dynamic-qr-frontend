import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart2, Edit2, Trash2, ExternalLink, QrCode } from 'lucide-react';
import Button from '../common/Button';
import { Card, CardHeader, CardContent } from '../common/Card';

interface QrCodeItemProps {
  id: string;
  name: string;
  url: string;
  type: 'static' | 'dynamic';
  createdAt: string;
  scans: number;
}

const QrCodeItem: React.FC<QrCodeItemProps> = ({ id, name, url, type, createdAt, scans }) => {
  return (
    <div className="p-4 border-b border-gray-100 hover:bg-gray-50">
      <div className="flex items-center">
        <div className="h-12 w-12 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center mr-4">
          <QrCode className="h-6 w-6 text-gray-500" />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-sm font-semibold text-gray-900 truncate">
              {name}
            </h3>
            <span className={`text-xs px-2 py-1 rounded ${
              type === 'dynamic' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
            }`}>
              {type === 'dynamic' ? 'Dynamic' : 'Static'}
            </span>
          </div>
          <div className="flex items-center text-xs text-gray-500">
            <span className="truncate">{url}</span>
            <ExternalLink className="h-3 w-3 ml-1 inline flex-shrink-0" />
          </div>
          <div className="flex items-center text-xs text-gray-500 mt-1">
            <span>Created: {createdAt}</span>
            <span className="mx-2">•</span>
            <span className="flex items-center">
              <BarChart2 className="h-3 w-3 mr-1" />
              {scans} scans
            </span>
          </div>
        </div>
        
        <div className="ml-4 flex items-center space-x-2">
          <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-gray-100 rounded">
            <Edit2 className="h-4 w-4" />
          </button>
          <button className="p-1.5 text-gray-500 hover:text-red-600 hover:bg-gray-100 rounded">
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

const QrCodeList: React.FC = () => {
  const qrCodes = [
    {
      id: '1',
      name: 'Website QR',
      url: 'https://example.com/landing-page',
      type: 'dynamic' as const,
      createdAt: '2 days ago',
      scans: 342
    },
    {
      id: '2',
      name: 'Product Brochure',
      url: 'https://example.com/products/brochure-spring-2025',
      type: 'dynamic' as const,
      createdAt: '1 week ago',
      scans: 128
    },
    {
      id: '3',
      name: 'Contact Card',
      url: 'https://example.com/contact/john-doe',
      type: 'static' as const,
      createdAt: '3 weeks ago',
      scans: 56
    },
    {
      id: '4',
      name: 'Event Registration',
      url: 'https://example.com/events/tech-conference-2025',
      type: 'dynamic' as const,
      createdAt: '1 month ago',
      scans: 213
    },
    {
      id: '5',
      name: 'Menu QR',
      url: 'https://example.com/restaurant/menu',
      type: 'static' as const,
      createdAt: '2 months ago',
      scans: 854
    }
  ];

  return (
    <Card>
      <CardHeader className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Your QR Codes</h2>
          <p className="text-sm text-gray-500 mt-1">
            Manage and track all your QR codes
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            Bulk actions
          </Button>
          <Link to="/dashboard/create">
            <Button size="sm">
              Create new
            </Button>
          </Link>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-hidden">
          {qrCodes.map((qrCode) => (
            <QrCodeItem
              key={qrCode.id}
              id={qrCode.id}
              name={qrCode.name}
              url={qrCode.url}
              type={qrCode.type}
              createdAt={qrCode.createdAt}
              scans={qrCode.scans}
            />
          ))}
        </div>
        
        <div className="p-4 flex items-center justify-between border-t border-gray-100">
          <p className="text-sm text-gray-500">
            Showing 5 of 5 QR codes
          </p>
          <div className="flex space-x-1">
            <button className="px-3 py-1 text-sm border border-gray-300 rounded-md bg-white text-gray-500 hover:bg-gray-50">
              Previous
            </button>
            <button className="px-3 py-1 text-sm border border-gray-300 rounded-md bg-white text-gray-500 hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QrCodeList;