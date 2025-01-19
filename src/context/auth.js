import React,{createContext, useEffect, useState} from 'react';
import {api} from '../services/api'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({})


function AuthProvider({children}){
    const navigator = useNavigation()
    const [user,setUser] = useState(null)
    const [loadingAth, setLoadingAth] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        async function loadStorage(){
          const storage = await AsyncStorage.getItem('@token');
          if (storage) {
            try {
                const response = await api.get('/me', {
                    headers: {
                        'Authorization': `Bearer ${storage}`
                    }
                });
             //   console.log('API Response:', response);
        
                if (response.data) {
                    api.defaults.headers['Authorization'] = `Bearer ${storage}`;
                    setUser(response.data);
                } else {
                    console.log('No data returned:', response);
                    setUser(null);
                }
            } catch (error) {
              //  console.log('API error:', error);
                setUser(null);
            } finally {
                setLoading(false);
            }
        } else {
            setLoading(false);
        }
//====================================================
//if(storage){
// const response = api.get('/me', {
//     headers:{
//         'Authorization': `Bearer ${storage}`
//
//     }
// }).catch(()=> {
//     setUser(null)
// })
//     api.defaults.headers['Authorization'] = `Bearer ${storage}`;
//     setUser(response.data);
//     console.log(response.data)
//     setLoading(false)
// }
//  setLoading(false)
//=============================================================================
}  
       loadStorage()
    },[])

    async function signUp(nome,email,password){
        setLoadingAth(true);
        try{
            const response = await api.post('/users',{
                name: nome,
                email: email,
                password: password,
            });
           // console.log('Email', response.data)
           setLoadingAth(false)
            navigator.goBack()
        }catch(err){
            setLoadingAth(false)
            console.log('Erro ao acessar a Api',err)
        }
        console.log('Email', {name:nome})
    }

    async function storageSignOut(){
       await AsyncStorage.clear()
       .then(()=> {
        setUser(null);
       })
    }

    async function Register(email,password){
        setLoadingAth(true);

        try{
          const response = await api.post('/login',{
            email: email,
            password: password
           });
         
           const {id,name, token} = response.data
          // setUser(response)
          const data = {id,name,token,email};

          await AsyncStorage.setItem('@token', token)

          api.defaults.headers['Authorization'] = `Bearer ${token}`;

          

           setUser({id,name,email});

          setLoadingAth(false);

        }catch(err){
            console.log('Erro ao acessar a Api', err)
            setLoadingAth(false)
        }
    }
    return(
        <AuthContext.Provider value={{signed:!!user, user,signUp,loadingAth,Register, loading,storageSignOut}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;