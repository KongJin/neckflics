import React, { useState } from "react";
import styled from "styled-components";

const Sinput = styled.input`
  all: unset;
  border-bottom: 1px solid gold;
  padding: 0px 10px;
`;

export const Search = ({ search, handle }) => {
  return (
    <Sinput
      type="text"
      placeholder="Search movies or tv ..."
      onKeyUp={(e) => {
        if (e.key === "Enter") {
          handle();
        }
      }}
      onChange={(e) => search(e.target.value)}
    ></Sinput>
  );
};
