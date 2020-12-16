export const audioContextFrequenciesProcessing = (
  audioContextAnalyser: AnalyserNode,
  frequenciesUint8Array: Uint8Array
) => {
  audioContextAnalyser.getByteTimeDomainData(frequenciesUint8Array);
  audioContextAnalyser.getByteFrequencyData(frequenciesUint8Array);
  let audioNumericValue = 0;
  let length = frequenciesUint8Array.length;
  for (var i = 0; i < length; i++) {
    audioNumericValue += frequenciesUint8Array[i];
  }
  let average = audioNumericValue / length;
  return average;
};

export const audioContext = new (window.AudioContext ||
  window.process.env.REACT_APP_AUDIO_WEBKIT)();
export const audioContextAnalyser: AnalyserNode = audioContext.createAnalyser();
export const frequenciesUint8Array = new Uint8Array(
  audioContextAnalyser.frequencyBinCount
);
