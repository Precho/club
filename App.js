import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, FlatList, Button,TouchableOpacity } from 'react-native';
import Data from './data.json'
import Clubs from './components/Clubs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    
    
    </View>
  );
}

function HomeScreen({navigation}) {
  const [data, setData] = useState(Data.all)
  return (
    <View style={styles.container}>
      {/* {
         data.map(club =>{
           return <Clubs clubname={club.name}/>
         
         })
      } */}
      <FlatList
      data={data}
  
      renderItem={({item})=>(
        

        
        <Clubs  clubname={item} />
        
      )}
      />
      <Button
    title="eloo"  onPress={() => navigation.navigate('Details')} />
      
    </View>
  );
}

export default function App() {

  useEffect(()=>{
      // fetch("https://reqres.in/api/users?page=2")
      // .then( res=> res.json())
      // .then( res=> setData(res.data))
      // .catch(err => console.log(err)) 
      // // console.log(data)
      // console.log(data)
  },[])

  
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
   
    
  },
});
