import React from 'react';

interface ResponsiveLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const ResponsiveLayout: React.FC<ResponsiveLayoutProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`responsive-layout ${className}`}>
      <div className="container mx-auto">
        {children}
      </div>
    </div>
  );
};

// Mobile-first responsive utilities
export const MobileView: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="block md:hidden">{children}</div>
);

export const TabletView: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="hidden md:block lg:hidden">{children}</div>
);

export const DesktopView: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="hidden lg:block">{children}</div>
);

export const TabletDesktopView: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="hidden md:block">{children}</div>
);