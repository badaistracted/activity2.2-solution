import React from 'react';

function App() {
  const digicenter = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  };

  return (
    <div style={digicenter}>
      <h1>Badi Was Here</h1>
        <p>Saya tinggal di Bandung, saya 19 tahun</p>
        <p>
        Nama saya Badi Radisamalik, NPM 120510233012, ini <a href="https://www.linkedin.com/in/badi-radisamalik">LinkedIn</a> saya
       </p>
    </div>
  );
}

export default App;
