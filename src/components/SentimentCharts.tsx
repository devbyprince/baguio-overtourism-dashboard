import React from 'react';
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from 'recharts';
import { ChartDataPolarity, ChartDataVector } from '../types';

const polarityData: ChartDataPolarity[] = [
  { name: 'Negative', value: 56.4, color: '#f43f5e' }, // rose-500
  { name: 'Neutral', value: 24.1, color: '#94a3b8' },  // slate-400
  { name: 'Positive', value: 19.5, color: '#065f46' }, // emerald-800
];

const vectorData: ChartDataVector[] = [
  { name: 'Traffic Gridlock', volume: 8500, sentiment: -0.45 },
  { name: 'Water Shortage', volume: 4000, sentiment: -0.82 },
  { name: 'Waste Mgmt', volume: 5920, sentiment: -0.65 },
];

export function SentimentCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-5 flex-1 min-h-[300px]">
      <div className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col">
        <div className="mb-4 flex justify-between items-center">
          <span className="text-[14px] font-semibold text-slate-800">Macro-Level Polarity</span>
        </div>
        <div className="flex-1 w-full relative flex justify-center items-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={polarityData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={2}
                dataKey="value"
                stroke="none"
              >
                {polarityData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value: number) => [`${value}%`, 'Share']}
                contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ fontSize: '10px', fontWeight: 600 }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col justify-between">
        <div className="mb-4 flex justify-between items-center">
          <span className="text-[14px] font-semibold text-slate-800">Infrastructural Vectors: Sentiment vs Volume</span>
        </div>
        <div className="flex-1 w-full pb-2 min-h-[160px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={vectorData}
              layout="vertical"
              margin={{ top: 10, right: 30, left: 10, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#e2e8f0" />
              <XAxis type="number" hide xAxisId="volume" />
              <XAxis type="number" hide xAxisId="sentiment" domain={[-1, 1]} />
              <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12, fontWeight: 500 }} />
              <Tooltip
                cursor={{ fill: '#f8fafc' }}
                contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Bar dataKey="volume" xAxisId="volume" name="Volume" fill="#f8fafc" stroke="#e2e8f0" strokeWidth={1} radius={[0, 4, 4, 0]} barSize={12} />
              <Bar dataKey="sentiment" xAxisId="sentiment" name="Sentiment Score" fill="#f43f5e" radius={[0, 4, 4, 0]} barSize={12} opacity={0.8} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-[10px] text-slate-500 mt-2 text-right m-0">
          *Bar width represents mention volume; color intensity represents sentiment severity.
        </p>
      </div>
    </div>
  );
}
