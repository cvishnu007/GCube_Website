import React from 'react';

const TextArea = () => {
  return (
    <div style={{ 
      width: '100%', 
      padding: '10px', 
      borderRadius: '5px', 
      backgroundColor: 'rgba(255, 255, 255, 0.8)', 
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)' 
    }}>
      <textarea 
        rows="5" 
        style={{ 
          width: '100%', 
          border: 'none', 
          borderRadius: '5px', 
          padding: '10px', 
          fontSize: '16px', 
          outline: 'none' 
        }} 
        placeholder="Share your thoughts here..."
      />
    </div>
  );
};

export default TextArea;
