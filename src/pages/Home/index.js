import React,{useContext,useState,useEffect} from 'react'
import { TouchableOpacity,Text,Modal } from 'react-native'
import {AuthContext} from '../../context/auth'
import Header from '../../components/Header'
import { Background,ListBalance, Area, Title, List} from './styled'
import { api } from '../../services/api'
import {format} from 'date-fns'
import { useIsFocused} from '@react-navigation/native'
import { Balance } from '../../components/Balance'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { HistoricoList} from '../../components/historicoList'
import CalendarModal from '../../components/CalendarModal'

export default function Home(){
    const isFocus = useIsFocused()
     const {storageSignOut, user} = useContext(AuthContext);
    const [listBalance, setListBalance] = useState([]);
    const [dateMoviments, setDateMoviments] = useState(new Date());
    const [movements, setMovements] = useState([]);
    const [modalVisible, setModalVisible] = useState(false)
      
    useEffect(()=>{

      let isActive =  true;

      async function GetMoviments(){
        //let dateFormat = format(dateMoviments, 'dd/MM/yyyy');
     
        let date = new Date(dateMoviments);
        let onLyDates = date.valueOf() + date.getTimezoneOffset() * 60 * 1000;
        let dateFormat = format(onLyDates, 'dd/MM/yyyy');

        console.log(dateFormat)

        const receives = await api.get('/receives',{
          params: {
            date: dateFormat
          }
        })

        const response = await api.get('/balance', {
          params: {
            date: dateFormat
          }
        })

        if(isActive){
          setMovements(receives.data)
          setListBalance(response.data)
        }
       
       // console.log(receives.data)
      }

      GetMoviments()

      return () => isActive = false;

    },[isFocus,dateMoviments])

    async function handleDelete(id){
      try{

        const response = await api.delete('/receives/delete',{
          params: {
             item_id : id,     
          }
        })

        
        setDateMoviments(new Date())

      }catch(err){
        console.log(err)
      }
    
    }

    function filterDateMovements(dateSelected){
        //console.log(dateSelected);

       setDateMoviments(dateSelected)
    }

    return(
      <Background>
        <Header title='Minhas movimentaçoes'/>
       

        <ListBalance
        data={listBalance}
        horizontal={true}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.tag}
        renderItem={({item})=>(<Balance data={item}/>)}
        />

        <Area>

           <TouchableOpacity onPress={()=> setModalVisible(true)}>
               <Icon name='event' color="#121212" size={30}/>
           </TouchableOpacity>

           <Title>Ultimas movimentaçoes</Title>

        </Area>

        <List
        data={movements}
        keyExtractor={item =>item.id} 
        renderItem={({item})=> <HistoricoList data={item} deleteItem={handleDelete}/>}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 20}}
        />

        <Modal
        visible={modalVisible}
        animationType='fade'
        transparent={true}
        >
          <CalendarModal
          setVisible={()=> setModalVisible(false)}
          handleFilter={filterDateMovements}
          />
        </Modal>

       
      </Background>
    )
}

