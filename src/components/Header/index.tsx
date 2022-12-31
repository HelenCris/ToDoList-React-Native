import React from "react";
import { ComponentContainer, HeaderList, HeaderText } from "./styles";

let today = new Date().toISOString().slice(0, 10);

export default function Header() {
  return (
    <ComponentContainer>
      <HeaderText>To-Do.</HeaderText>
      <HeaderList>{today}</HeaderList>
    </ComponentContainer>
  );
}
