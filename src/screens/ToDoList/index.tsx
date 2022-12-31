import React from "react";
import { View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { CirlceContainer, ComponentContainer, IconContainer, ListContainer, TextDate, TextItem } from "./styles";

export default function TodoList({ item, deleteItem }) {
  return (
    <ComponentContainer>
      <ListContainer>
        <CirlceContainer>
          <Entypo name="circle" size={20} color="red" />
        </CirlceContainer>
        <View>
          <TextItem>{item.value}</TextItem>
          <TextDate> Task</TextDate>
        </View>
        <IconContainer onPress={() => deleteItem(item.key)}>
          <MaterialIcons name="delete" size={24} color="red" />
        </IconContainer>
      </ListContainer>
    </ComponentContainer>
  );
}

