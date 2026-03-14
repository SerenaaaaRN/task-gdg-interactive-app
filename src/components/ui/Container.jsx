import React from 'react';

const Container = ({ children, className = '', ...props }) => {
  return (
    <div className={`mx-auto max-w-360 px-6 lg:px-12 ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Container;
