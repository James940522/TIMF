import styled from "styled-components";

export const NoticeContainer = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

export const NoticePadding = styled.div`
  padding-bottom: 2rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex: 0 0 50%;
  justify-content: space-between;
`;

export const NoticeH2 = styled.h2`
  margin-bottom: 2rem;
  margin-left: 0.5rem;
  font-size: 1.2rem;
  font-weight: 700;
`;

export const SectionDiv = styled.div`
  background-color: rgb(250, 250, 250);
  border-width: 1px;
  border-style: solid;
  border-color: rgb(238, 238, 238);
  border-image: initial;
  padding: 2rem !important;
  padding-bottom: 0.5rem !important;
  min-height: 100px;
  min-width: 500px;
`;

export const Section = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

export const SectionTitle = styled.div`
  display: flex;
  justify-content: left;
`;

export const NoticeContents = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;
