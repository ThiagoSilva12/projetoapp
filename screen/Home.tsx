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
         
         
         
         
         
         
         
         
         
