import styled from "styled-components";

export const NavDiv = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgb(248, 249, 250);
  /* flex: 0 7; */
`;

export const NavMenu = styled.div`
  display: flex;
  /* flex-direction: row; */
`;

export const NavUl = styled.ul`
  position: relative;
  list-style: none;
  /* z-index: 1; */
  display: none;
`;

export const NavSpan = styled.span`
  padding-right: 20px;

  &:hover ${NavUl} {
    display: block;
  }
`;

export const NavLi = styled.li`
  display: flex;
  flex-direction: column;
`;
