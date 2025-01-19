import React, {useContext, useState} from "react";
import {Platform , ActivityIndicator} from 'react-native'
import {Background,Container,AreaInput,Input,SubmitButton,SubmitText} from  '../SignIn/styled'
import {AuthContext} from '../../context/auth'



export default function SignUp(){
    const [nome,setNome] = useState('');
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('')

        
    const {signUp,loadingAth } = useContext(AuthContext)

     function handle(){
        if(nome === '' || email === '' ||  password === '')return;
         signUp(nome,email,password)
        //console.log(user)   
    }

    return(
<Background>

    <Container behavior={Platform.OS ==='ios' ? 'padding' : ''} enabled>

        <AreaInput>
        <Input
         placeholder="Nome"
         value={nome}
         onChangeText={(text)=> setNome(text)}
         />
        </AreaInput>

        
        <AreaInput>
        <Input placeholder="Seu email"
           value={email}
           onChangeText={(text)=> setEmail(text)}
        />
       
        </AreaInput>

        
        <AreaInput>
        <Input placeholder="Sua senha"
           value={password}
           onChangeText={(text)=> setPassword(text)}
           secureTextEntry={true}
        
        />
        </AreaInput>

        <SubmitButton onPress={handle}>
            {loadingAth ?(
                <ActivityIndicator size={20} color='#1c1c1c'/>
            ):
               <SubmitText>Cadastrar</SubmitText>
            }
            
        </SubmitButton>

    </Container>

</Background>
    )
}