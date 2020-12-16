import React, { useState } from "react";
import AudioDataProcessor from "../Components/AudioDataProcessor/AudioDataProcessor.component";
import textAssets from "../assets/texts/text.json";
import AudioCSSProcessor from "../Components/AudioCSSProcessor/AudioCSSProcessor.component";

import {
  MainFlexContainer,
  TextFlexContainer,
  AudioLevelMeter,
  LegendDiv,
  SignatureDiv,
  TitleDiv,
  LabelText,
  LinkStandardDiv,
  AudioValueIndicator,
} from "./AudioDataProcessor.style";

interface Props {
  audioInputMic: MediaStream;
}

const AudioDataProcessorView: React.FC<Props> = (props) => {
  const [audioValue, setAudioValue] = useState<number>(0);
  if (textAssets)
    return (
      <>
        <AudioDataProcessor
          sendAvarageAudioValue={setAudioValue}
          audioInputMic={props.audioInputMic}
        />
        <MainFlexContainer>
          <TextFlexContainer>
            <TitleDiv>{textAssets.mainTitle}</TitleDiv>
            <SignatureDiv>{textAssets.contact}</SignatureDiv>
            <SignatureDiv>{textAssets.signature}</SignatureDiv>
            <LegendDiv>{textAssets.legend}</LegendDiv>
            <LegendDiv>
              <AudioLevelMeter>
                <LabelText>{textAssets.AudioInputValueLabel}</LabelText>
                <AudioValueIndicator>{audioValue}</AudioValueIndicator>
              </AudioLevelMeter>
            </LegendDiv>
            <LegendDiv>
              {textAssets.imageIsDoneWith}
              <LinkStandardDiv href={textAssets.inkscapeUrl}>
                {textAssets.inkscape}
              </LinkStandardDiv>{" "}
            </LegendDiv>
            <LegendDiv>{textAssets.graphicDescription}</LegendDiv>
            <LegendDiv>{textAssets.processDescription}</LegendDiv>
          </TextFlexContainer>
        </MainFlexContainer>
        <AudioCSSProcessor audioInputData={audioValue} />
      </>
    );

  return <>No text data found</>;
};

export default AudioDataProcessorView;
