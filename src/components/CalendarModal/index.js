import React, {useState} from "react"
import {TouchableWithoutFeedback,View} from 'react-native'
import * as S from './styled'
import {Calendar,LocaleConfig} from 'react-native-calendars'
import {ptBR} from './localeCalendar'

LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';

export  default function CalendarModal({setVisible, handleFilter}){

 const [dateNow, setDateNow] = useState(new Date());
 const [marketDates, setMarketDates] =  useState({})

 function HandleOnDayPress (date){
   // console.log(date.dateString)
   setDateNow(new Date(date.dateString))

   let markedDay = {};

   markedDay[date.dateString] = {
    selected: true,
    selectedColor: '#3b3dbf',
    textColor: '#fff'
   }

   setMarketDates(markedDay)
 }

 function handerFilterDate(){
    handleFilter(dateNow);
    setVisible()
   // alert('teste')
    //console.log(HandleOnDayPress())
 }

    return(
        <S.Container>
            <TouchableWithoutFeedback onPress={setVisible}>
                <View style={{flex:1}}></View>
            </TouchableWithoutFeedback >
            <S.ModalContent>

                <Calendar
                    onDayPress={HandleOnDayPress}
                    markedDates={marketDates}
                    enableSwipeMonths={true}
                    theme={{
                        todayTextColor: '#ff0000',
                        selectedDayBackgroundColor: '#00adf5',
                        selectedDayTextColor: '#FFF'
                    }}
                />

             <S.ButtonFilter onPress={handerFilterDate}>
                 <S.ButtonText>Filtrar</S.ButtonText>
             </S.ButtonFilter>
               
            </S.ModalContent>
        {/* <S.ButtonText>Teste</S.ButtonText> */}
        </S.Container>
    )
}