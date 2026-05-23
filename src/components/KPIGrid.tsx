import React from 'react';
import { KPI } from '../types';

const kpiData: KPI[] = [
  {
    title: "Total Utterances",
    value: "18,420",
    subtext: "English-exclusive Facebook records"
  },
  {
    title: "Primary Strain",
    value: "Water Depletion",
    subtext: "Critical Intensity: -0.82"
  },
  {
    title: "Monitored Event",
    value: "Panagbenga 2026",
    subtext: "High Volume Alert Phase"
  }
];

export function KPIGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 shrink-0">
      {kpiData.map((kpi, idx) => {
        let valueColor = "text-emerald-800";
        if (kpi.title === "Primary Strain") valueColor = "text-rose-500";
        if (kpi.title === "Monitored Event") valueColor = "text-amber-500";

        return (
          <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col justify-center">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">{kpi.title}</span>
            <span className={`text-[28px] font-bold leading-none ${valueColor}`}>{kpi.value}</span>
            <span className="text-[11px] text-slate-500 mt-1">{kpi.subtext}</span>
          </div>
        );
      })}
    </div>
  );
}
