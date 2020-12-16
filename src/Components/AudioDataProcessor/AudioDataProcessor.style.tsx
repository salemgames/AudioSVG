import styled from "styled-components";

export const MainFlexCOntainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  min-height: 100%;
  min-width: 100%;
  background: linear-gradient(to right, rgb(115, 122, 124), rgb(39, 56, 77));
`;

export const AudioLevelMeter = styled.div`
  font-size: 1vw;
  font-weight: bolder;
  color: rgb(0, 0, 0);
`;

export const AudioLevelMeterSpan = styled.span`
  font-size: 1vw;
  font-weight: bolder;
  color: rgb(117, 134, 182);
  text-shadow: 1px 1px 5px black;
`;

export const LegendDiv = styled.div`
  font-size: 1vw;
  margin-top: 1em;
  font-weight: 900;
  font-weight: bolder;
`;

export const ExampleTextDiv = styled.div`
  font-size: 1vw;
  margin-top: 1em;
  font-weight: 900;
  font-style: italic;
`;

export const AudioUI = styled.div`
  left: 2em;
  margin-top: 3em;
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 30%;
  z-index: 45;
`;

export const AudioValueIndicator = styled.div`
  font-size: 3vw;
  font-weight: bolder;
  color: rgb(117, 134, 182);
  text-shadow: 1px 1px 5px black;
`;

export const TitleDiv = styled.div`
  margin-top: 2.5vw;
  margin-left: 2vw;
  padding: 0.2vw;
  top: 1em;
  font-size: 2vw;
  font-weight: bolder;
  color: rgb(32, 34, 41);
  white-space: nowrap;
  text-decoration: underline;
`;

export const ADivStyle = styled.div`
  font-size: 1.2vw;
  margin-top: 1em;
  font-weight: 900;
  font-style: italic;
  color: rgb(117, 134, 182);
  text-shadow: 1px 1px 5px black;
`;

export const SignatureDiv = styled.div`
  font-size: 0.6em;
`;
