import React from "react";
import { ComponentContainer, EmptyImage, EmptyText } from "./styles";

export default function Empty() {
  return (
    <ComponentContainer>
      <EmptyImage
        source={require("../../../assets/images/emptytodo-removebg-preview.png")}
      />
      <EmptyText>Add To-Do.</EmptyText>
    </ComponentContainer>
  );
}

