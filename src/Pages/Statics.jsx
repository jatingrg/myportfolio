import React from 'react';

function Statics() {
  const imageStyle = {
    maxWidth: '100%',
    width: '400px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.3)'
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      gap: '20px', 
      padding: '2rem' 
    }}>
      <img
        src="https://github-readme-stats.vercel.app/api/top-langs?username=jatingrg&show_icons=true&locale=en&layout=compact"
        alt="Top programming languages used by jatingrg on GitHub"
        style={imageStyle}
      />
      <img
        src="https://github-readme-stats.vercel.app/api?username=jatingrg&show_icons=true&locale=en"
        alt="GitHub profile stats for jatingrg"
        style={imageStyle}
      />
      <img
        src="https://github-readme-streak-stats.herokuapp.com/?user=jatingrg"
        alt="GitHub contribution streak of jatingrg"
        style={imageStyle}
      />
    </div>
  );
}

export default Statics;
