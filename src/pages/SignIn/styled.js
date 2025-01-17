import styled from 'styled-components/native'

export const Background = styled.View`
flex: 1;
background-color: #f9f9fd;
`;

export const Container = styled.KeyboardAvoidingView`
flex: 1;
justify-content: center;
align-items: center;
`;

export const Logo = styled.Image`
margin-bottom: 25px;
`;

export const AreaInput = styled.View`
flex-direction: row;
`;

export const Input = styled.TextInput`
background-color: #fff;
//border: 1px solid #2c2c2c;
width: 90%;
font-size: 17px;
padding: 10px;
border-radius: 8px;
color: #121212;
margin-bottom: 15px;
`;

export const SubmitButton = styled.TouchableOpacity`
height: 45px;
width: 90%;
border-radius: 8px;
padding: 10px;
background-color: #3b3bbf;
margin-top: 10px;
align-items: center;
justify-content: center;
`;
export const SubmitText = styled.Text`

font-size: 20px;
color: #fff;
`;


export const Link = styled.TouchableOpacity`
margin-top: 10px;
margin-bottom: 10px;
`;
export const LinkText = styled.Text`
color: #000
`;