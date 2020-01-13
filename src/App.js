import React, { useState, useEffect } from "react";
import AudioDataProcessor from "./Components/AudioDataProcessor/AudioDataProcessor";

const App = () => {
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    getMicrophone();
  }, []);

  const getMicrophone = async () => {
    const audio = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false
    });
    setAudio(audio);
  };

  return (
    <div className="App">
      {audio ? (
        <AudioDataProcessor audio={audio} />
      ) : (
        <div className="errorMessage">
          Sorry, no audio input signal detected. Please check your webcam or mic
          setup and refresh browser page (F5) :)
          Contact : jcdeyagere@gmail.com
        </div>
      )}
    </div>
  );
};

export default App;
