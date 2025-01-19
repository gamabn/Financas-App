import React,{useContext} from "react"
import {Container,Message,Name,NewLink,LogoutButton,LogoutText,NewText} from './styled'
import Header from "../../components/Header"
import { AuthContext } from "../../context/auth"
import {useNavigation} from '@react-navigation/native'


export default function Profile(){
    const {user,storageSignOut} = useContext(AuthContext)

    const navigation = useNavigation()

   //async function SignOut(){
      // await storageSignOut()
   //}

    return(
      <Container>
         <Header title={'Perfil'}/>

         <Message>
           Hey, Bem vindo de volta
        </Message>
        <Name numberOflines={1}>{user && user.name}</Name>

        <NewLink onPress={()=> navigation.navigate('Registrando')}>
            <NewText>Fazer Registros</NewText>
        </NewLink>


        <LogoutButton onPress={()=> storageSignOut()}>
            <LogoutText>Sair</LogoutText>
        </LogoutButton>

      </Container>
       
    )
}