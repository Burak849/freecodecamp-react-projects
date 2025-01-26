import React, { useState, useEffect, useCallback  } from 'react';
import '../App.css';


const soundBank = [
        {
            keyCode: 81,
            keyTrigger: "Q",
            id: "Heater-1",
            url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
        },
        {
            keyCode: 87,
            keyTrigger: "W",
            id: "Heater-2",
            url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
        }, 
        {
            keyCode: 69,
            keyTrigger: "E",
            id: "Heater-3",
            url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
        }, 
        {
            keyCode: 65,
            keyTrigger: "A",
            id: "Heater-4",
            url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
        }, 
        {
            keyCode: 83,
            keyTrigger: "S",
            id: "Clap",
            url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
        }, 
        {
            keyCode: 68,
            keyTrigger: "D",
            id: "Open-HH",
            url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
        }, 
        {
            keyCode: 90,
            keyTrigger: "Z",
            id: "Kick-n'-Hat",
            url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
        }, 
        {
            keyCode: 88,
            keyTrigger: "X",
            id: "Kick",
            url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
        }, 
        {
            keyCode: 67,
            keyTrigger: "C",
            id: "Closed-HH",
            url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
        }
    ];
         

        const DrumPad = ({ sound, playSound }) => {
            const handleKeyPress = useCallback(
              (e) => {
                if (e.keyCode === sound.keyCode) {
                  playSound(sound.id);
                }
              },
              [sound, playSound]
            );
          
            useEffect(() => {
              document.addEventListener("keydown", handleKeyPress);
              return () => {
                document.removeEventListener("keydown", handleKeyPress);
              };
            }, [handleKeyPress]);
          
            return (
              <button
                className="drum-pad"
                id={sound.id}
                onClick={() => playSound(sound.id)}
              >
                {sound.keyTrigger}
                <audio id={sound.keyTrigger} src={sound.url} className="clip" />
              </button>
            );
          };
          
          const Drum = () => {
            const [display, setDisplay] = useState("");
          
            const playSound = (id) => {
              const audio = document.getElementById(id[0]);
              if (audio) {
                audio.currentTime = 0;
                audio.play();
              }
              setDisplay(id);
            };
          
    
          return (
<section style={{display:'flex', justifyContent:'center'}}>
            <div id="drum-machine" style={{ boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.8)',display:'flex',flexDirection:'column',gap:'4rem', height:'auto', width:'30rem', border:'2px solid white', padding:'5rem', borderRadius:'25px', background:'#b77e7ecf'}}>
              <div id="display" style={{color:'white', fontSize:'1.4em', background: '#204949', display: 'flex', height: '5rem', color: 'white', fontSize: '1.4em', alignItems:'center', justifyContent: 'center'}}>{display}</div>
              <div className="pad-bank">
                {soundBank.map((sound) => (
                    <DrumPad key={sound.id} sound={sound} playSound={playSound}/>
                ))}
              </div>
            </div>
</section>
          );
        };

export default Drum;
