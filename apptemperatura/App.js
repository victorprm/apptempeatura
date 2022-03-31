import  React, {useState} from 'react';
import { Text, View, StyleSheet , TextInput, TouchableOpacity} from 'react-native';


export default function App() {
  
 
    //Criar variavel
    var [C, setC] = useState ('');
    var [F, setF] = useState ('');


  
  function CalcularTemperatura(){
    F = (9 *  parseFloat(C) + 160) / 5;

    alert ("TEMPERATURA EM fahrenheit: " + F );

  }

 
  return (
    <View style={styles.container}>
       <Text style= {styles.titulo}> Aplicativo Temperatura</Text>

       <TextInput style ={styles.campo} 
       placeholder = "Digite uma temp, em celsius"
       keyboardType = "numeric"
       onChangeText = {setC}
       />

       <TouchableOpacity style = {styles.botao} onPress = {CalcularTemperatura}>
       <Text style = {styles.textBotao}>Calcular</Text>
       </TouchableOpacity>
  
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue"
  },

  titulo:{
    textAlign: "center",
    marginTop: 40,
    marginBottom: 40, 
    color: "#FFF",
    fontSize: 25,
  },

  campo:{
    backgroundColor: "#FFF",
    borderRadius: 30,
    margin: 15,
    padding: 10,
    fontSize: 15,
    borderRadius: 15,
    
  },

  botao:{
    justifyContent: "center",
    alignItems: "center",
    margin : 15,
    backgroundColor: "red",
    padding: 10,

  },

  textBotao: {
    fontSize: 20
  },




});
