import styled from 'styled-components/native'

export const RegisterContainer = styled.View`
flex-direction: row;
width: 100%;
padding: 0 5%;
justify-content: space-between;
align-items: center;
`;

export const RegisterLabel = styled.Text`
margin-left: 8px;
font-size: 17px;
`;



export const RegisterTypeButton = styled.TouchableOpacity`
background-color: ${props  => props.checked ? '#fff' : '#e7e7e7'};
width: 47%;
justify-content: center;
align-items: center;
border-radius: 4px;
flex-direction: row;
height: 45px;
border-width: 1.5px;
margin-bottom: 14px;
border-color: ${props =>props.checked ? '#3b3db7': "transparent"};

`;