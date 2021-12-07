import React from "react";

import styled from "styled-components";

const Div = styled.img`
  border-radius: 5px;
  width: 100%;
  height: 100%;
`;

// styled.img``

export const Poster = ({ id, poster_path }) => {
  return (
    <Div
      src={
        poster_path !== null
          ? `http://image.tmdb.org/t/p/original/${poster_path}`
          : "https://raw.githubusercontent.com/nomadcoders/nomflix/master/src/assets/noPosterSmall.png"
      }
    ></Div>
  );
};
