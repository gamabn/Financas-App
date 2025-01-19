import React,{useState} from 'react'
import {Container,Tipo, TipoText,ValorText,IconView} from './styled'
import Icon from 'react-native-vector-icons/Feather'
import {Alert, TouchableOpacity,TouchableWithoutFeedback} from 'react-native'



export function  HistoricoList({data, deleteItem}){
 const [icon, setIcon] = useState('receita')

    async function handleDeleteItem(){
        Alert.alert(
           'Atençao',
           'Voce tem certeza que deseja deletar esse registro',
           [
            {
                text: 'Cancel',
                style: 'cancel',
            },
            {

                text:'Continuar',
                onPress: ()=> deleteItem(data.id)
            }
           ]


        )
 }


    return(
        <TouchableWithoutFeedback onLongPress={handleDeleteItem}>
            <Container>
               <Tipo>
               
                  
                      <IconView tipo={data.type}>
                        <Icon name={data.type === 'despesa' ? 'arrow-down' : 'arrow-up'} size={20} color="#fff"/>
                        <TipoText>{data.type}</TipoText>
                        <TipoText>{data.date}</TipoText>
                        <TipoText>{data.description}</TipoText>
                        </IconView>
                    
                   
                    
                      
               </Tipo>

               <ValorText>
               {data.value}
               </ValorText>
            </Container>
            </TouchableWithoutFeedback>
    )
}