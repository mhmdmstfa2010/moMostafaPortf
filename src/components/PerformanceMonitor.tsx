"use client";

import { useEffect, useState } from 'react';
import { usePerformance } from '../contexts/PerformanceContext';

interface PerformanceStats {
  fps: number;
  memoryUsage: number;
  loadTime: number;
}

export default function PerformanceMonitor() {
  const { isLowEndDevice, deviceType, connectionType } = usePerformance();
  const [stats, setStats] = useState<PerformanceStats>({
    fps: 0,
    memoryUsage: 0,
    loadTime: 0
  });
  const [showMonitor, setShowMonitor] = useState(false);

  useEffect(() => {
    // عرض المونيتور في development mode فقط
    const isDev = process.env.NODE_ENV === 'development';
    if (!isDev) return;

    setShowMonitor(true);

    // قياس FPS
    let frameCount = 0;
    let lastTime = performance.now();
    
    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        setStats(prev => ({ ...prev, fps }));
        frameCount = 0;
        lastTime = currentTime;
      }
      
      requestAnimationFrame(measureFPS);
    };

    measureFPS();

    // قياس استخدام الذاكرة
    const memoryInterval = setInterval(() => {
      if ('memory' in performance) {
        const memory = (performance as any).memory; //eslint-disable-line
        const usedMB = Math.round(memory.usedJSHeapSize / 1048576);
        setStats(prev => ({ ...prev, memoryUsage: usedMB }));
      }
    }, 2000);

    // قياس وقت التحميل
    const loadTime = Math.round(performance.now());
    setStats(prev => ({ ...prev, loadTime }));

    return () => {
      clearInterval(memoryInterval);
    };
  }, []);

  if (!showMonitor) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-3 rounded-lg text-xs font-mono z-50 backdrop-blur-md">
      <div className="space-y-1">
        <div>FPS: <span className={stats.fps < 30 ? 'text-red-400' : stats.fps < 50 ? 'text-yellow-400' : 'text-green-400'}>{stats.fps}</span></div>
        <div>Memory: <span className={stats.memoryUsage > 100 ? 'text-red-400' : 'text-green-400'}>{stats.memoryUsage}MB</span></div>
        <div>Load: {stats.loadTime}ms</div>
        <div>Device: <span className={isLowEndDevice ? 'text-red-400' : 'text-green-400'}>{deviceType}</span></div>
        <div>Connection: <span className={connectionType === 'slow' ? 'text-red-400' : 'text-green-400'}>{connectionType}</span></div>
      </div>
    </div>
  );
}