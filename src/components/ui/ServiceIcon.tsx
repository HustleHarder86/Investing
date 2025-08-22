interface ServiceIconProps {
  serviceIcon: string; // 'divorce', 'inheritance', 'business', 'severance'
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function ServiceIcon({ serviceIcon, size = 'md', className = '' }: ServiceIconProps) {
  const sizeClasses = {
    sm: 'w-5 h-5',
    md: 'w-7 h-7', 
    lg: 'w-8 h-8'
  };

  const iconClass = `${sizeClasses[size]} ${className}`;

  switch (serviceIcon) {
    case 'divorce':
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L8 6v3l4-2 4 2V6l-4-4zm8 7.5c0 .83-.67 1.5-1.5 1.5S17 10.33 17 9.5 17.67 8 18.5 8s1.5.67 1.5 1.5zM7 9.5C7 10.33 6.33 11 5.5 11S4 10.33 4 9.5 4.67 8 5.5 8 7 8.67 7 9.5zM12 11l-4 6h8l-4-6z"/>
        </svg>
      );
    
    case 'inheritance':
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 20 20">
          <path d="M3.05 13h1.9V7H3.05c-.504 0-1.05.5-1.05 1v4c0 .5.546 1 1.05 1zm14 0h1.9c.504 0 1.05-.5 1.05-1V8c0-.5-.546-1-1.05-1h-1.9v6zM10 7c-2.761 0-5 2.239-5 5v6h10v-6c0-2.761-2.239-5-5-5z" />
        </svg>
      );
    
    case 'business':
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
        </svg>
      );
    
    case 'severance':
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      );
    
    default:
      return (
        <div className={iconClass} />
      );
  }
}