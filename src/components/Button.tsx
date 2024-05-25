// src/components/Button.tsx
import React from 'react';

interface ButtonProps {
  onClick: () => void;
  label: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: '#2b2c41',
        color: '#edcc6f',
        padding: '20px 40px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '24px',
        marginTop: '20px'
      }}
    >
      {label}
    </button>
  );
};

export default Button;
