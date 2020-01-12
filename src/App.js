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
        "Sorry, no audio signal detected. Check yout webcam or mic setup please :)"
      )}
    </div>
  );
};

export default App;
