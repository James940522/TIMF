import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: rgb(49, 53, 62);
  color: rgb(213, 213, 213);
  padding-top: 1rem;
  padding-bottom: 1rem;
  /* position: relative; */
  bottom: 0px;
  text-align: center;
`;

export const FooterTextContainer = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  position: relative;
  width: 100%;
  min-height: 1px;
  margin-right: -15px;
  margin-left: -15px;
  justify-content: space-around;
  padding: 1rem;
  text-align: center;
`;

export const FooterP = styled.p`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 0.85rem;
  color: rgb(213, 213, 213);
  text-align: center;
`;

export const FooterHr = styled.hr`
  /* width: 85%; */
  margin-top: 0.8rem;
  margin-bottom: 1rem;
  border-top: 1px solid rgb(213, 213, 213);
  text-align: center;
`;

export const LightHr = styled.hr`
  border-top: 1px solid #d5d5d5;
  width: 100%;
  margin-top: 0.8rem;
  margin-bottom: 1rem;
  text-align: center;
`;
