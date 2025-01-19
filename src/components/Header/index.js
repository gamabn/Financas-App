import React from "react";
import {Container, Title, ButtonMenu} from './styled'
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Feather'

export default function Header({title}){

    const navigation = useNavigation()

   
    return(
        <Container>
            <ButtonMenu onPress={()=> navigation.openDrawer()}>
                <Icon name="menu" size={35}/>

            </ButtonMenu>
           {title && (
            <Title>{title}</Title>
           )}

        </Container>
    )
}