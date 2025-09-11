interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  duration?: number;
  className?: string;
  startDelay?: number;
}

export default function AnimatedCounter({ 
  target, 
  suffix = '', 
  duration = 2000, 
  className = '',
  startDelay = 0 
}: AnimatedCounterProps) {
  const formatNumber = (num: number, suffix: string) => {
    if (suffix === 'K+') {
      // Display full number with commas for readability (e.g., "10,000+")
      return num.toLocaleString() + '+';
    }
    if (suffix === 'B+') {
      // Display billions properly (e.g., "$2.0B+")
      return '$' + (num / 1000).toFixed(1) + 'B+';
    }
    if (suffix === 'M+') {
      // Display millions properly (e.g., "$500M+")
      return '$' + num.toString() + 'M+';
    }
    // For numbers without special suffixes, add commas for readability
    if (num >= 1000) {
      return num.toLocaleString() + suffix;
    }
    return num.toString() + suffix;
  };

  // ULTIMATE TEST: Show both raw and formatted values
  const formatted = formatNumber(target, suffix);
  
  return (
    <div className={className}>
      RAW: {target} | SUFFIX: {suffix} | FORMATTED: {formatted}
    </div>
  );
}