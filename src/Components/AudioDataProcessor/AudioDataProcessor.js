import React, { useState, useEffect, useCallback } from "react";
import AudioCSSProcessor from "../../Components/AudioCSSProcessor/AudioCSSProcessor.js";
import style from "./AudioDataProcessor.module.css";

const AudioDataProcessor = ({ audio }) => {
  const [audioValue, setAudioValue] = useState(0);
  const [audioContext] = useState(
    new (window.AudioContext || window.webkitAudioContext)()
  );
  const [analyser] = useState(audioContext.createAnalyser());
  const [dataArray] = useState(new Uint8Array(analyser.frequencyBinCount));

  const tick = useCallback(() => {
    analyser.getByteTimeDomainData(dataArray);
    analyser.getByteFrequencyData(dataArray);
    let values = 0;
    let length = dataArray.length;
    for (var i = 0; i < length; i++) {
      values += dataArray[i];
    }
    let average = values / length;
    setAudioValue(average);
    requestAnimationFrame(tick);
  }, [analyser, dataArray]);

  useEffect(() => {
    analyser.smoothingTimeConstant = 0.8;
    let source = audioContext.createMediaStreamSource(audio);
    source.connect(analyser);
    let rafId = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafId);
      analyser.disconnect();
      source.disconnect();
    };
  }, [analyser, audio, audioContext, tick]);

  return (
    <>
      <div className={style.title}>
        Audio API / SVG interactive online demo
        <div className={style.sign}>
          Creative XP coding by Jean-Christophe Deyagère / @ :
          jcdeyagere@gmail.com
        </div>
        <div className={style.sign}>
          Artwork by Jean-Christophe Deyagère, France, 2020
        </div>
      </div>
      <div className={style.audioUI}>
        <p className={style.legend}>
          Instructions : Clap your hands, make noise, or sing a song to make the
          hair move.
        </p>
        <div className={style.audioLevelDisplay}>
          <div>
            <span>Audio Input Value</span> from AudioDataProcessor.js file:
            <div className={style.audioValue}>{audioValue}</div>
          </div>
        </div>
        <div className={style.legend}>
          Image is an svg file made with{" "}
          <a href="https://inkscape.org/">Inkscape</a> opensource software.
          <p>Hair of the character is divided in 3 main parts.</p>
          Value of audiolevel are send through CSS variables and used in a skew
          transform to deform hair. For example :
        </div>
        <div className={style.example}>
          {" "}
          In AudioDataProcessor.js : "[...
          document.body.style.setProperty("--value", audioData / 5 +
          "deg");...]"
        </div>
        <div className={style.example}>
          {" "}
          In index.css : "[...transform: skew(var(--value3));...]"
        </div>

        <AudioCSSProcessor audioData={audioValue} />
      </div>
    </>
  );
};

export default AudioDataProcessor;
