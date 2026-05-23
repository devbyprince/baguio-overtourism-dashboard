/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { KPIGrid } from './components/KPIGrid';
import { SentimentCharts } from './components/SentimentCharts';
import { AlertFeed } from './components/AlertFeed';

export default function App() {
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-slate-50 font-sans text-slate-800">
      <Header />
      <main className="flex-1 p-6 w-full mx-auto flex flex-col gap-5 overflow-y-auto">
        <KPIGrid />
        <SentimentCharts />
        <AlertFeed />
      </main>
    </div>
  );
}


