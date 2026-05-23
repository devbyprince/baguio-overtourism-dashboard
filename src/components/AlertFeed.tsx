import React from 'react';
import { Alert as AlertType } from '../types';

const alertData: AlertType[] = [
  {
    id: "1",
    type: "high",
    category: "High Alert - Water",
    message: "\"NO WATER again in our barangay for 3 days now. This is extremely frustrating!!!\"",
    score: -0.89
  },
  {
    id: "2",
    type: "warning",
    category: "Warning - Waste",
    message: "\"Session road is beautiful but the trash bins are overflowing right now.\"",
    score: -0.55
  },
  {
    id: "3",
    type: "positive",
    category: "Positive - Event",
    message: "\"The float parade was absolutely stunning today! So proud of Baguio.\"",
    score: 0.75
  }
];

export function AlertFeed() {
  return (
    <div className="flex flex-col gap-[10px] shrink-0">
      {alertData.map((alert) => {
        let badgeClass = "";
        let scoreClass = "";

        if (alert.type === 'high') {
          badgeClass = "bg-[#fff1f2] text-rose-500 border border-[#ffe4e6]";
          scoreClass = "text-rose-500";
        } else if (alert.type === 'warning') {
          badgeClass = "bg-[#fffbeb] text-amber-500 border border-[#fef3c7]";
          scoreClass = "text-amber-500";
        } else {
          badgeClass = "bg-emerald-50 text-emerald-800 border border-[#d1fae5]";
          scoreClass = "text-emerald-800";
        }

        return (
          <div key={alert.id} className="grid grid-cols-[120px_1fr_80px] items-center py-3 px-4 bg-white border border-slate-200 rounded-lg text-[13px]">
            <span className={`px-2 py-[3px] rounded text-[10px] font-bold uppercase text-center flex items-center justify-center ${badgeClass}`}>
              {alert.type === 'high' ? 'High Alert' : alert.type === 'warning' ? 'Warning' : 'Positive'}
            </span>
            <span className="text-slate-800 px-4">{alert.message}</span>
            <span className={`font-bold text-right ${scoreClass}`}>
              {alert.score > 0 ? '+' : ''}{alert.score.toFixed(2)}
            </span>
          </div>
        );
      })}
    </div>
  );
}
