import React, { useState } from "react";
import { SafeAreaView, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import { Background, SubmitText, Input, SubmitButton } from "./styled";
import Header from "../../components/Header";
import { RegisterType } from "../../components/RegisterType";
import { api } from "../../services/api";
import {format} from 'date-fns'
import { useNavigation } from "@react-navigation/native";



export default function New() {
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState(0);
    const [type, setType] = useState('receita')

    const navigation = useNavigation()

    let data = format(new Date(), 'dd/MM/yyyy')

    async function HandleRegister() {
        Keyboard.dismiss()

        if (isNaN(valor) || type === null) {
            alert('preencha todos os campos')
            return;
        }

        Alert.alert(
            'Confirmando dados',
            `Tipo: ${type} - valor:${parseFloat(valor)}`,
            [{
                text: 'Cancelar',
                style: 'cancel'
            },
            {
                text: 'Confirmar',
                onPress: () => handleAdd()
            }]
        )

        async function handleAdd(item) {
            Keyboard.dismiss()
            try {
                const response = api.post('/receive', {
                    description: descricao,
                    type: type,
                    value: Number(valor),
                    date: data,
                })
                setDescricao('')
                setValor('')
                navigation.navigate('Home')

            } catch (err) {
                console.log(err)
            }
        }
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Background>
                <Header title='Registrando' />

                <SafeAreaView style={{ marginTop: 14, alignItems: 'center' }}>

                    <Input
                        placeholder="Descriçao desse registro"
                        value={descricao}
                        onChangeText={(text) => setDescricao(text)}
                    />

                    <Input
                        placeholder="Valor desejado"
                        keyboardType="numeric"
                        value={valor}
                        onChangeText={(text) => setValor(text)}
                    />

                    <RegisterType type={type} sendTypeChanged={(item) => setType(item)} />



                    <SubmitButton onPress={HandleRegister}>
                        <SubmitText>Registrar</SubmitText>
                    </SubmitButton>
                </SafeAreaView>
            </Background>
        </TouchableWithoutFeedback>
    )
}