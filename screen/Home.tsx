import * as React from 'react';
import { Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
let rs = "";
export default function Home ((route)){
    const {dados} = route.params
    rs = dados[2];
    return(
      <NavigationContainer>
          <Stack.Screen name="TelaHome" component="TelaHome"/>
          <Stack.Screen name="Agendado" component="Agendado"/>
      </NavigationContainer>
    )
}
 function TelaHome({navigation}){   
    
   console.log(`Dados na Home->${rs}`) 
    
    const[lstPaciente,setLstPaciente] React=useState("")
     
     React.useEffect(()=>{
      fetch(`${servidor}`,{
        method:'GET';
        headers:{
        accept:'apllication/json',
     'content-type':'application/json,
          token=rs,
        }
    }) 
     .then((response)=>response.json())     
     .then ((result)=>{    
        console.log(result);
       setLstPaciente(result.output);
      }) 
     .catch((erro)=>cosole.error(`Erro ao ler o api->${erro}`))
      },[])   
    
     
   return (    
     <View style={styles.container}
     
     <ScrollView horizontal={false} style={styles.scroll}>
     
         <Image source {{uri:""}}style={styles.imgpaciente}/>
         <View>
             {
         lstPaciente.map((item.index))=>(
               <View style={styles.paciente} key={index}>
                   <Text style={styles.nome}>Nome:  {item.nome}</Text>
                   <Text style={styles.cpf}>CPF:  {item.cpf}</Text>
                 <Text style={styles.carteirinha}>Carteirinha:  {item.carteirinha}</Text>
         <TouchableOpacity onPress={()=>{
                        navigation.navigate("Atualizar",{cliente:item , token:rs});

                    }}>
                   <AntDesign name="edit" size={24} color="black" />
                    </TouchableOpacity>
                   </View>
                         ))
            }
           </View>
           </ScrollView>
        </View>
    )
}
