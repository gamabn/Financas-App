import React,{useMemo} from 'react'
import {Container, Label,Balanc} from './styled'

export  function Balance({data}){

    const labelName = useMemo(()=>{

        if(data.tag === 'saldo'){
         return{
          label: 'Saldo Atual',
          color: '#3b3dbf'
         }
        }else if(data.tag === 'receita'){
          return{
            label: 'Entradas de hoje',
            color: '#00b94a'
          }
        }else{
          return{
             label: 'Saidas de hoje',
             color: '#EF463A'
          }
         
        }

    },[data])

  return(
  <Container bg={labelName.color}>
   
      <Label>Teste: {labelName.label}</Label>
      <Balanc>{data.saldo}</Balanc>
    
  </Container>
  )
}