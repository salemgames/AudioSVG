import React, { useState, useEffect, useCallback } from "react";
import AudioCSSProcessor from "../../Components/AudioCSSProcessor/AudioCSSProcessor.js";
import style from "./AudioDataProcessor.module.css";

const AudioDataProcessor = ({ audio }) => {
  let analyser;
  let dataArray;
  let average;

  const [audioValue, setAudioValue] = useState(0);

  //////// declare Audio Context , create audio Stream
  useEffect(() => {
    let audioCTX = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioCTX.createAnalyser();
    analyser.smoothingTimeConstant = 0.8;
    let source = audioCTX.createMediaStreamSource(audio);
    source.connect(analyser);
    dataArray = new Uint8Array(analyser.frequencyBinCount);
    let rafId = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafId);
      analyser.disconnect();
      source.disconnect();
    };
  }, []);

  ///////// set up analyser
  const tick = useCallback(() => {
    analyser.getByteTimeDomainData(dataArray);
    analyser.getByteFrequencyData(dataArray);
    let values = 0;
    let length = dataArray.length;
    for (var i = 0; i < length; i++) {
      values += dataArray[i];
    }
    average = values / length;
    setAudioValue(average);
    average = values / length;
    requestAnimationFrame(tick);
  }, []);

  return (
    <>
      <div className={style.title}>Audio API / SVG interactive online Demo</div>
      <div className={style.audioUI}>
        <p className={style.legend}>
          Instructions : Clap your hands or make noise to make the hair move.
        </p>
        <div className={style.audioLevelDisplay}>
          <div>
            <span>Audio Input Value</span> from AudioDataProcessor.js file:
            <div className={style.audioValue}>{audioValue}</div>
          </div>
        </div>
        <p className={style.legend}>
          Image is an svg file made with{" "}
          <a href="https://inkscape.org/">Inkscape</a> opensource software.
          <p>Hair of the character is divided in 3 main parts.</p>
          Value of audiolevel are send through CSS variables and used in a skew
          transform to deform hair. For example :
        </p>
        <p className={style.example}>transform: skew(var(--value3));</p>

        <AudioCSSProcessor audioData={audioValue} />
      </div>
    </>
  );
};

export default AudioDataProcessor;
