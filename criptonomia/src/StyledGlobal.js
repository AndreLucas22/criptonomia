import styled from 'styled-components'
import { TextInputMask } from 'react-native-masked-text'

export const ButtonGlobal = styled.TouchableOpacity`
  background-color: #9EC63E;
  height:45;
  justify-content: center;
  align-items: center; 
  border-radius: 20;
  
`
export const TextInputForm = styled.TextInput.attrs({ placeholderTextColor: "#949499"})`
  background-color: #F6F6F6;
  border-radius: 10;
  border-width: 0.7;
  border-color:#d3d3d3;
  height: 45;
` 

export const TextInputMaskForm = styled(TextInputMask)`
  background-color: #F6F6F6;
  border-radius: 10;
  border-width: 0.7;
  border-color:#d3d3d3;
  height: 40;
` 
export const ButtonListaUsuarios = styled.TouchableOpacity`
  background-color: #0d0d58;
  height:50;
  justify-content: center;
  align-items: center; 
  border-radius: 10;
`
export const ButtonTabBar = styled.TouchableOpacity`
  height:65;
  justify-Content: space-around;
  align-items: center; 
`