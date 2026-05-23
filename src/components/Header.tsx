import React from 'react';

export function Header() {
  return (
    <header className="h-[72px] bg-white border-b border-slate-200 px-8 flex justify-between items-center shrink-0">
      <div className="flex flex-col">
        <h1 className="text-[18px] font-bold tracking-tight text-emerald-800 uppercase m-0 leading-tight">Baguio City Integrated Command Center (ICCC)</h1>
        <p className="text-[12px] text-slate-500 font-normal m-0 mt-0.5">Real-time Overtourism Sentiment & Urban Friction Monitoring</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-2.5 h-2.5 rounded-full bg-[#10b981] shadow-[0_0_8px_#10b981]"></div>
        <span className="text-[12px] font-semibold text-slate-500">System Active: Feb 20, 2026</span>
      </div>
    </header>
  );
}
