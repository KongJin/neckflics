import React from "react";
import styled from "styled-components";
import { Poster } from "./Poster";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 250px;
  gap: 20px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 35px;
  font-weight: bold;
  margin-bottom: 20px;
`;
export const Grid = ({ data, title }) => {
  console.log(data);
  return (
    <>
      <Title>{title}</Title>
      <GridContainer>
        {data.map((datum) => {
          return <Poster id={datum.id} poster_path={datum.poster_path} />;
        })}
      </GridContainer>
    </>
  );
};

//export default Grid;
