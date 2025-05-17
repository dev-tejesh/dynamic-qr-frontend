import React from 'react';
import { Calendar, MapPin, Smartphone, LampDesk as Desktop, Clock, ArrowUpRight, Filter } from 'lucide-react';
import { Card, CardHeader, CardContent } from '../common/Card';
import Button from '../common/Button';

const AnalyticsDashboard: React.FC = () => {
  // Dummy data for analytics
  const stats = [
    { label: 'Total Scans', value: '1,584', change: '+12.5%', trend: 'up' },
    { label: 'Unique Visitors', value: '832', change: '+8.3%', trend: 'up' },
    { label: 'Avg. Session Duration', value: '1m 42s', change: '-2.1%', trend: 'down' },
    { label: 'Conversion Rate', value: '3.2%', change: '+0.8%', trend: 'up' },
  ];

  // Generate dummy data for the chart
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const generateRandomData = (min: number, max: number, count: number) => {
    return Array.from({ length: count }, () => Math.floor(Math.random() * (max - min + 1)) + min);
  };
  
  const weekData = generateRandomData(50, 200, 7);
  const maxValue = Math.max(...weekData);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
          <p className="text-gray-600">Track performance and gain insights from your QR codes</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button 
            variant="outline" 
            size="sm"
            leftIcon={<Calendar className="h-4 w-4" />}
          >
            Last 7 days
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            leftIcon={<Filter className="h-4 w-4" />}
          >
            Filter
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Card key={i} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <h3 className="text-sm font-medium text-gray-500">{stat.label}</h3>
              <div className="mt-2 flex items-baseline justify-between">
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                <p className={`flex items-center text-sm ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                  <ArrowUpRight className={`h-3 w-3 ml-1 ${
                    stat.trend === 'down' && 'transform rotate-90'
                  }`} />
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-col sm:flex-row justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Scan Activity</h2>
              <p className="text-sm text-gray-500">Daily scan counts for the past week</p>
            </div>
            <div className="flex space-x-2 mt-2 sm:mt-0">
              <button className="text-xs font-medium text-gray-700 px-2 py-1 rounded border border-gray-200 bg-white">Day</button>
              <button className="text-xs font-medium text-blue-600 px-2 py-1 rounded border border-blue-200 bg-blue-50">Week</button>
              <button className="text-xs font-medium text-gray-700 px-2 py-1 rounded border border-gray-200 bg-white">Month</button>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="h-64 flex items-end justify-between px-2">
              {weekData.map((value, index) => (
                <div key={index} className="flex flex-col items-center flex-1">
                  <div 
                    className="w-full max-w-12 bg-blue-500 rounded-t"
                    style={{ 
                      height: `${(value / maxValue) * 180}px`,
                      opacity: 0.7 + (value / maxValue) * 0.3
                    }}
                  ></div>
                  <span className="mt-2 text-xs text-gray-600">{days[index]}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold text-gray-900">Top Insights</h2>
            <p className="text-sm text-gray-500">Key metrics at a glance</p>
          </CardHeader>
          <CardContent className="space-y-6 pt-2">
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
                <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                Top Locations
              </h3>
              <div className="space-y-2">
                {[
                  { name: 'New York, US', value: '32%' },
                  { name: 'London, UK', value: '18%' },
                  { name: 'Paris, FR', value: '12%' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{item.name}</span>
                    <span className="text-sm font-medium text-gray-900">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
                <Smartphone className="h-4 w-4 mr-1 text-gray-400" />
                Devices
              </h3>
              <div className="space-y-2">
                {[
                  { name: 'Mobile', value: '68%', icon: <Smartphone className="h-4 w-4 text-gray-400" /> },
                  { name: 'Desktop', value: '27%', icon: <Desktop className="h-4 w-4 text-gray-400" /> },
                  { name: 'Tablet', value: '5%', icon: <Smartphone className="h-4 w-4 text-gray-400" /> },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 flex items-center">
                      {item.icon}
                      <span className="ml-2">{item.name}</span>
                    </span>
                    <span className="text-sm font-medium text-gray-900">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
                <Clock className="h-4 w-4 mr-1 text-gray-400" />
                Peak Hours
              </h3>
              <div className="space-y-2">
                {[
                  { name: '2:00 PM - 4:00 PM', value: '35%' },
                  { name: '6:00 PM - 8:00 PM', value: '28%' },
                  { name: '10:00 AM - 12:00 PM', value: '22%' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{item.name}</span>
                    <span className="text-sm font-medium text-gray-900">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;