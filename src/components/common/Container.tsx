// React
import React from 'react';

interface ContainerProps { 
  children: React.ReactNode
}

const Container = (props: ContainerProps) => {
  return (
    <div className="container">
      {props.children}
    </div>
  );
}

export default Container;
