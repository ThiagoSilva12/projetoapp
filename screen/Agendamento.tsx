import * as React from 'react';
import { Text, View } from 'react-native';

let nome ="";
let cpf = "";
let carteirinha ="";


export default function Agendamento(()){

const [nomePaciente,setNomePaciente]= React.useState("");
const [senhaPaciente,setSenhaPaciente]= React.useState("");
const [cpfPaciente,setCPFPaciente] = React.useState("");

    return(
        <View style={styles.container}>
            <Text style={styles.titulos}>Agenamento Cliente</Text>
            <View style={styles.controles>
            <TextInput 
                placeholder="Nome do Paciente" 
                style={styles.input} 
                onChanceText{(value)=>setNomePaciente(value)}     
                value={nomePaciente}
                />
            <TextInput
                placeholder="CPF"
                style={styles.input}
                onChanceText{(value)=>setCPFPaciente(value)}
                value={cpfPaciente}
                />
             <TextInput
                 placeholder="Carteirinha"
                style={styles.input}
                onChanceText{(value)=>setCarteirinhaPaciente(value)}
                value={carteirinhaPaciente}    
                />
            
        </View>
    )
}















