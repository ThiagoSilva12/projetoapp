import * as React from 'react';
import { Text, View } from 'react-native';

let nome = "";
let senha = "";
let atendimento : any [];

export default function Paciente ((navigation)){

const[nome, setNome] = React.useState("");
const[senha,setSenha] =React.useState("");

    return(
        <View>
            <Text>Tela Paciente</Text>
        </View>
    )
}