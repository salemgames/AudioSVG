import React, { useEffect } from "react";
import SVGImage from "../SVGImage/SVGtoJSXImage.component";

interface Props {
  audioInputData: number;
}

const AudioCSSProcessor: React.FC<Props> = (props) => {
  const listenToAudioInput = () => {
    if (props.audioInputData) {
      document.body.style.setProperty(
        "--value",
        props.audioInputData / 5 + "deg"
      );
      document.body.style.setProperty(
        "--value2",
        props.audioInputData / 8 + "deg"
      );
      document.body.style.setProperty(
        "--value3",
        props.audioInputData / 5 + "deg"
      );
      document.body.style.setProperty(
        "--value4",
        props.audioInputData / 10 + ""
      );
    }
  };

  useEffect(() => {
    listenToAudioInput();
  }, [props.audioInputData]);

  return (
    <>
      <SVGImage />
    </>
  );
};

export default AudioCSSProcessor;
