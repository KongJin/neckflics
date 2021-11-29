import React from "react";
import styled from "styled-components";

const Div = styled.img`
  border-radius: 5px;
  width: 100%;
  height: 100%;
`;
// styled.img``

export const Poster = ({ id, poster_path }) => {
  return <Div src={`http://image.tmdb.org/t/p/original/${poster_path}`}></Div>;
};
