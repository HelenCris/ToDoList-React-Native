import React, { useState } from "react";
import { Image } from 'react-native'
import { ComponentContainer, InputContainer, SubmitButton, Input } from "./styles";


export default function AddInput() {
  const [value, setValue] = useState("");

  const onChangeText = (value: string) => {
    setValue(value);
  };

  return (
    <ComponentContainer>
      <InputContainer>
        <Input placeholder="Add Task..." onChangeText= {onChangeText} />
      </InputContainer>
      <SubmitButton onPress={() => { alert('button clicked') }}>
        <Image source={require('../../../assets/images/plus(1).png')}/>
      </SubmitButton>
    </ComponentContainer>
  );
}