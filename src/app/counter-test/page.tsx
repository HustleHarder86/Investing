'use client';

import { useState, useEffect } from 'react';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

export default function CounterTestPage() {
  const [mounted, setMounted] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  
  useEffect(() => {
    setMounted(true);
    
    // Capture console logs
    const originalLog = console.log;
    const originalWarn = console.warn;
    const originalError = console.error;
    
    console.log = (...args) => {
      originalLog(...args);
      setLogs(prev => [...prev, `[LOG] ${args.join(' ')}`]);
    };
    
    console.warn = (...args) => {
      originalWarn(...args);
      setLogs(prev => [...prev, `[WARN] ${args.join(' ')}`]);
    };
    
    console.error = (...args) => {
      originalError(...args);
      setLogs(prev => [...prev, `[ERROR] ${args.join(' ')}`]);
    };
    
    return () => {
      console.log = originalLog;
      console.warn = originalWarn;
      console.error = originalError;
    };
  }, []);

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold mb-8">Counter Animation Test Page</h1>
      
      <div className="mb-8 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Component Mount Status</h2>
        <div className="text-lg">
          Mounted: <span className={mounted ? 'text-green-600' : 'text-red-600'}>
            {mounted ? '✅ Yes' : '❌ No'}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Counter 1: Families (10K+)</h3>
          <div className="text-3xl font-bold">
            <AnimatedCounter 
              target={10000} 
              suffix="K+" 
              startDelay={200}
              debug={true}
            />
          </div>
          <div className="mt-2 text-sm text-gray-600">
            Target: 10000, Suffix: K+, Delay: 200ms
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Counter 2: Cities (21)</h3>
          <div className="text-3xl font-bold">
            <AnimatedCounter 
              target={21} 
              startDelay={400}
              debug={true}
            />
          </div>
          <div className="mt-2 text-sm text-gray-600">
            Target: 21, No suffix, Delay: 400ms
          </div>
        </div>

        <div className="bg-purple-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Counter 3: Assets ($500M+)</h3>
          <div className="text-3xl font-bold">
            <AnimatedCounter 
              target={500} 
              suffix="M+" 
              startDelay={600}
              debug={true}
            />
          </div>
          <div className="mt-2 text-sm text-gray-600">
            Target: 500, Suffix: M+, Delay: 600ms
          </div>
        </div>
      </div>

      <div className="mb-8 p-4 bg-yellow-50 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Test Without Debug Mode</h2>
        <div className="flex gap-8 text-3xl font-bold">
          <div>
            <AnimatedCounter target={10000} suffix="K+" startDelay={0} />
          </div>
          <div>
            <AnimatedCounter target={21} startDelay={200} />
          </div>
          <div>
            <AnimatedCounter target={500} suffix="M+" startDelay={400} />
          </div>
        </div>
      </div>

      <div className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-auto max-h-96">
        <h2 className="text-xl font-semibold mb-2 text-white">Console Logs</h2>
        <pre className="text-xs font-mono">
          {logs.length === 0 ? 'No logs yet...' : logs.join('\n')}
        </pre>
      </div>

      <div className="mt-8 p-4 bg-red-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Legend</h2>
        <div className="space-y-2 text-sm">
          <div>🟡 Yellow Border = Animation Pending</div>
          <div>🟢 Green Border = Animation Running</div>
          <div>🔵 Blue Border = Animation Complete</div>
        </div>
      </div>
    </div>
  );
}