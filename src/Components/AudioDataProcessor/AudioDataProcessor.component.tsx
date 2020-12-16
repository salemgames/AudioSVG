import React, { useState, useEffect, useCallback } from "react";
import AudioCSSProcessor from "../AudioCSSProcessor/AudioCSSProcessor.component";

import {
  AudioLevelMeter,
  AudioUI,
  AudioValueIndicator,
  ExampleTextDiv,
  LegendDiv,
  SignatureDiv,
  TitleDiv,
} from "./AudioDataProcessor.style";

interface Props {
  audio: MediaStream;
}

const AudioDataProcessor: React.FC<Props & Window> = (props) => {
  const [audioValue, setAudioValue] = useState(0);
  const [audioContext] = useState(
    new (window.AudioContext || window.process.env.REACT_APP_AUDIO_WEBKIT)()
  );
  const [audioContextAnalyser] = useState<AnalyserNode>(
    audioContext.createAnalyser()
  );
  const [frequenciesUint8Array] = useState<Uint8Array>(
    new Uint8Array(audioContextAnalyser.frequencyBinCount)
  );

  const getNumericAvarageValueFromAudioContextAnalyser = useCallback(() => {
    audioContextAnalyser.getByteTimeDomainData(frequenciesUint8Array);
    audioContextAnalyser.getByteFrequencyData(frequenciesUint8Array);
    let audioNumericValue = 0;
    let length = frequenciesUint8Array.length;
    for (var i = 0; i < length; i++) {
      audioNumericValue += frequenciesUint8Array[i];
    }
    let average = audioNumericValue / length;
    setAudioValue(average);
    requestAnimationFrame(getNumericAvarageValueFromAudioContextAnalyser);
  }, [audioValue]);

  useEffect(() => {
    audioContextAnalyser.smoothingTimeConstant = 0.8;
    let source = audioContext.createMediaStreamSource(props.audio);
    source.connect(audioContextAnalyser);
    let rafId = requestAnimationFrame(
      getNumericAvarageValueFromAudioContextAnalyser
    );
    return () => {
      cancelAnimationFrame(rafId);
      audioContextAnalyser.disconnect();
      source.disconnect();
    };
  }, [audioValue]);

  return (
    <>
      <TitleDiv>Audio API / SVG interactive online demo </TitleDiv>
      <SignatureDiv>
        Creative XP coding by Jean-Christophe Deyagère / @ :
        jcdeyagere@gmail.com
      </SignatureDiv>
      <SignatureDiv>
        Artwork by Jean-Christophe Deyagère, France, 2020
      </SignatureDiv>

      <AudioUI>
        <LegendDiv>
          Instructions : Clap your hands, make noise, or sing a song to make the
          hair move.
        </LegendDiv>
        <AudioLevelMeter>
          <div>
            <span>Audio Input Value</span> from AudioDataProcessor.js file:
            <AudioValueIndicator>{audioValue}</AudioValueIndicator>
          </div>
        </AudioLevelMeter>
        <LegendDiv>
          Image is an svg file made with{" "}
          <a href="https://inkscape.org/">Inkscape</a> opensource software.
          <p>Hair of the character is divided in 3 main parts.</p>
          Value of audiolevel are send through CSS variables and used in a skew
          transform to deform hair. For example :
        </LegendDiv>
        <ExampleTextDiv>
          In AudioDataProcessor.js : "[...
          document.body.style.setProperty("--value", audioData / 5 +
          "deg");...]"
        </ExampleTextDiv>
        <ExampleTextDiv>
          In index.css : "[...transform: skew(var(--value3));...]"
        </ExampleTextDiv>

        <AudioCSSProcessor audioData={audioValue} />
      </AudioUI>
    </>
  );
};

export default AudioDataProcessor;
