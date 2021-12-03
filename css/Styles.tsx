import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container:{
      flex:1,
    justifyContent:'center',
        alignItems:"center"
    },
    imglogo:{
        width:100,
        heigth:200,
        resideMode:'cover'
    },
    controles:{
width:'80%',
padding:10,
margin:20,
shadowColor:'black',
shadowOffset:{width:10, height:10},
shadowOpacity:1,
shadowRadius:10,
elevation:2,
backgroundColor:'white'
},
input:{
    borderBottomColor:'#ddd',
    borderBottomWidth:1,
    padding:1,
    marginBottom:10,
    fontSize: 15,
},

    btnatendimento:    {
   padding:30, 
    },
    txtbtnatendimento:{
        textAling:'center',
        color:'red'
    },
    txtbtnpaciente:{
        fontSize:30,
        fontWeigth:'bold',
        color:'red',
        textTransform:"uppercase",
    textAlign:"center"
},
  titulos:{  
    fontSize:30,
    fontWeigth:'bold',
    textAlign:"center"
  },
    nome:{
        fontSize:15,
        fontWeigth:'bold'
    },
    cpf:{
    fontSize:12,
    fontWeigth:'bold'
    },      
     carteirinha:{   
       fontSize:15, 
        color:"#f00',
       resizeMode:'cover'
     },
        
        
        
        
        
})
