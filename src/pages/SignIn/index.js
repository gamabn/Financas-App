import React,{useState,useContext} from 'react'
import {useNavigation} from '@react-navigation/native'
import { ActivityIndicator, Platform } from 'react-native'
import { Background,Container,Logo, AreaInput,Input,LinkText,Link,SubmitButton,SubmitText } from './styled'
import {AuthContext} from '../../context/auth'


export default function SignIn(){
   const {Register,loadingAth} = useContext(AuthContext)
    const navigation = useNavigation();
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

     function handleRegister(){
       Register(email,password)
    }


    return(
        <Background>
         <Container
          behavior={Platform.OS ==='ios' ? 'padding' : ''}
          enabled
         >
            <Logo
            source={require('../../assets/Logo.png')}
            />
            <AreaInput>
            <Input
            placeholder='Seu email'
            value={email}
            onChangeText={(text)=> setEmail(text)}
            />
            </AreaInput>

            <AreaInput>
            <Input
            placeholder='Password'
            value={password}
            onChangeText={(text)=> setPassword(text)}
            />
            </AreaInput>

            <SubmitButton activeOpacity={0.7} onPress={handleRegister}>
                {loadingAth ? (
                    <ActivityIndicator size={20} color='#fff'/>
                ) : (
                    <SubmitText>Entrar</SubmitText>
                )}
              
            </SubmitButton>

            <Link onPress={()=> navigation.navigate('SignUp')}>
            <LinkText>Cadastrar</LinkText>
            </Link>


         </Container>
        </Background>
    )
}