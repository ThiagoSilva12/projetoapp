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
    <View style={styles.container}>
        <Image source={require("")} style={styles.imglogo}/
        <View style={styles.contoles}>
   <TextInput placeholder="Nome" style={styles.input}
        value={nome}
       onChanceText={(value)=>setNome(value)}
    
       />
        
      <TextInput placeholder="Senha" secureTextEntry style={styles.input}
          value={senha}
          onChanceText={(value)=>setSenha(value)}
          
          />
         <TouchableOpacity style={styles.btnatendimeto} onPress={()=>{
                nome=nome;
                senha=senha;  
                let retorno = efetuarAtendimento;
                
              if (retorno[0] == "Atendido"){
                navigation.navigate("Home", {dados:retorno});
              }
            }};  
            <Text style={styles.txtbtnpaciente>Paciente </Text> 
                </TouchableOpacity>
            </View>
             
            <TouchableOpacity style={styles.txtbtnatendimento} onPress={()=>{             
                 <navigation.navigate("Atendido")        
               }}>          
               <Text style={styles.txtbtnatendimento>Atendimento</Text> 
                        </TouchableOpacity>
                </View>
          )
}          
                
 function efetuarPaciente(){
    fetch(`${servidor}/paciente`,{
        method:"POST",
        headers:{
            accept:"application/json",
            "content-type":"application/json"
        },
        body:JSON.stringify({
            nome:us,
            senha:sh
        })
    })
    .then((response)=>response.json())
    .then((rs)=>{
      //  console.log(rs);
        resultado[0] = rs.output;
        resultado[1] = rs.payload;
        resultado[2] = rs.token;
    })
    .catch((erro)=>console.error(`Erro ao tentar buscar a api->${erro}`))
    return resultado;
} 
                   
                   
                   
