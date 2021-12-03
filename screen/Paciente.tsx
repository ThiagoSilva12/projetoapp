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
                
                
