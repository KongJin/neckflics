import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  -webkit-box-shadow: 0px 11px 10px -4px rgba(0, 0, 0, 0.9);
  box-shadow: 0px -5px 10px 10px rgba(0, 0, 0, 0.9);
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  height: 50px;
  background-color: #2d2827;
`;
const Ul = styled.ul`
  display: flex;
  width: 200px;
  height: 100%;
`;
const Li = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 50px;
  cursor: pointer;
  &:hover {
    color: gold;
    font-weight: bold;
  }
  height: 100%;
`;
const Alink = styled(Link)`
  ${({ check }) => check === "true" && "font-weight: bold; color: gold"};
`;
// eslint-disable-next-line
export default () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <Header>
      <Ul>
        <Alink to="/" check={pathname === "/" ? "true" : "false"}>
          <Li>Movies</Li>
        </Alink>
        <Alink to="/tv" check={pathname === "/tv" ? "true" : "false"}>
          <Li>TV</Li>
        </Alink>
        <Alink to="/search" check={pathname === "/search" ? "true" : "false"}>
          <Li>Search</Li>
        </Alink>
      </Ul>
    </Header>
  );
};
