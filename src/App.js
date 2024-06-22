import React from 'react';
import './App.css';
import DrumButton from './components/DrumButton';


const drumSounds = [
  { key: 'w', sound: 'tom-1.mp3', image: 'tom1.png' },
  { key: 'a', sound: 'tom-2.mp3', image: 'tom2.png' },
  { key: 's', sound: 'tom-3.mp3', image: 'tom3.png' },
  { key: 'd', sound: 'tom-4.mp3', image: 'tom4.png' },
  { key: 'j', sound: 'snare.mp3', image: 'snare.png' },
  { key: 'k', sound: 'crash.mp3', image: 'crash.png' },
  { key: 'l', sound: 'kick-bass.mp3', image: 'kick.png' },
];

function App() {
  return (
    <div className="App">
      <h1 id="title">Drum 🥁 Kit</h1>
      <div className="set">
        {drumSounds.map((drum) => (
          <DrumButton
            key={drum.key}
            drumKey={drum.key}
            sound={drum.sound}
            image={drum.image}
          />
        ))}
      </div>
      <footer>
        Made by Hari Sankar.
      </footer>
    </div>
  );
}

export default App;

