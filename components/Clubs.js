import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Clubs = (props) => {
    return ( 
      <TouchableOpacity onPress={()=>console.log(props.clubname.name)}>
        <Text  style={styles.row} >{props.clubname.name}</Text>
        </TouchableOpacity>
     );
}
 
export default Clubs;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'stretch',
      
    },
    row:{
    //   flex:,
      backgroundColor: 'red',
      borderWidth: 4,
      borderColor: "#20232a",
      borderRadius: 6,
      backgroundColor: "#61dafb",
      color: "#20232a",
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold",
      marginTop: 20
      
    },
  });
  