import styled from "styled-components/native";

export const Container = styled.View`
background-color: ${props=> props.bg};
margin-left: 14px;
margin-right: 14px;
border-radius: 14px;
justify-content: center;
align-items: flex-start;
width: 300px;
padding: 14px;
//gap: 20px;
`;

export const Label = styled.Text`
color: #fff;
font-size: 19px;
font-weight: bold;
`;

export const Balanc = styled.Text`
margin-top: 5px;
font-size: 30px;
color: #fff;

`;

//export const Input = styled.TextInput`
//`;