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

                
                <TouchableOpacity style={styles.btnlogar} onPress={()=>{

nome = nomePaciente;
carteirinha = carteirinhaPaciente;
cpf = cpfPaciente;

efetuarAgendamento();

setNomePaciente("");
setCPFPaciente("");
setCarteirinhaPaciente("");

   }}>

<Text style={styles.txtbtnagendamento}>Agendar</Text>
</TouchableOpacity>
            </View>
        </View>
    );
}



function efetuarAgendamento(){


fetch(`${servidor}/agendamento`,{
    method:"POST",  
    headers:{
        accept:"application/json",
        "content-type":"application/json",
    },
    body:JSON.stringify({
        nome:nome,
        carteirinha:carteirinha,
        cpf:cpf,
       
    })
}).then((response)=>response.json())
.then((resultado)=>{
    Alert.alert("Aviso", resultado.output);
    // console.log(resultado);
})
.catch((erro)=>console.error(`Erro ao executar->${erro}`));


}




