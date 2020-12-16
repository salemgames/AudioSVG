import React, { useState, useEffect } from "react";
import AudioDataProcessorView from "./views/AudioDataProcessor.view";

const App: React.FC = () => {
  const [audioMicSignal, setAudio] = useState<MediaStream>();
  useEffect(() => {
    getMicrophone();
  }, []);

  const getMicrophone = async () => {
    const audioMicSignal = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false,
    });
    setAudio(audioMicSignal);
  };

  return (
    <div>
      {audioMicSignal ? (
        <AudioDataProcessorView audioInputMic={audioMicSignal} />
      ) : (
        <div className="errorMessage">
          Sorry, no audio input signal detected. Please check your webcam or mic
          setup and refresh browser page (F5) :) Contact : jcdeyagere@gmail.com
        </div>
      )}
    </div>
  );
};

export default App;
