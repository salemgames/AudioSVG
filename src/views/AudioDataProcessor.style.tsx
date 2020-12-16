import styled from "styled-components";

export const MainFlexContainer = styled.div`
  display: flex;
  padding: 1rem;
`;

export const TextFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 1rem;
  border-radius: 0.5rem;
  height: 50%;
  width: 50%;
  background: linear-gradient(to right, rgb(115, 122, 124), white);
  filter: drop-shadow(0.2em 0.2em 0.2em rgba(255, 255, 255, 0.6));
`;

export const AudioLevelMeter = styled.div`
  display: flex;
  font-weight: bolder;
  color: rgb(0, 0, 0);
`;

export const LegendDiv = styled.div`
  padding-top: 1em;
  font-weight: 900;
  font-weight: bolder;
`;

export const AudioValueIndicator = styled.div`
  padding-left: 1rem;
  font-weight: bolder;
  color: rgb(54, 54, 54);
  text-shadow: black 0.1em;
  font-size: 2rem;
`;

export const TitleDiv = styled.div`
  padding: 0.2rem;
  top: 1em;
  font-weight: bolder;
  color: rgb(32, 34, 41);
  white-space: nowrap;
  text-decoration: underline;
  padding-bottom: 2rem;
`;

export const SignatureDiv = styled.div`
  min-height: 2em;
`;

export const LabelText = styled.div`
  min-height: 2em;
`;

export const LinkStandardDiv = styled.a`
  min-height: 2em;
`;
