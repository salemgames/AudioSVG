import React, { useState, useEffect, useCallback } from "react";
import {
  audioContextFrequenciesProcessing,
  audioContext,
  audioContextAnalyser,
  frequenciesUint8Array,
} from "../../utils/audioUtils";

interface Props {
  audioInputMic: MediaStream;
  sendAvarageAudioValue: (audioAvarageValue: number) => void;
}

const AudioDataProcessor: React.FC<Props> = (props) => {
  const [audioValue, setAudioValue] = useState<number>(0);
  const getAudioAvarageFrequencyValue = useCallback(() => {
    if (props.sendAvarageAudioValue !== undefined) {
      props.sendAvarageAudioValue(
        audioContextFrequenciesProcessing(
          audioContextAnalyser,
          frequenciesUint8Array
        )
      );
    }
    setAudioValue(
      audioContextFrequenciesProcessing(
        audioContextAnalyser,
        frequenciesUint8Array
      )
    );
    requestAnimationFrame(getAudioAvarageFrequencyValue);
  }, [audioValue]);

  useEffect(() => {
    audioContextAnalyser.smoothingTimeConstant = 0.8;
    let source = audioContext.createMediaStreamSource(props.audioInputMic);
    source.connect(audioContextAnalyser);
    let rafId = requestAnimationFrame(getAudioAvarageFrequencyValue);
    return () => {
      cancelAnimationFrame(rafId);
      audioContextAnalyser.disconnect();
      source.disconnect();
    };
  }, [audioValue]);

  return <></>;
};

export default AudioDataProcessor;
