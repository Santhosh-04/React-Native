import call from 'react-native-phone-call';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  marginTop
} from 'react-native';
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Dial"
          component={DialScreen}
          //options={{title: ''}}
        />
        <Stack.Screen
          name="Home"
          component={ContactScreen}
          options={{title: 'Contacts'}}
        />
        <Stack.Screen
        name="Login"
        component={LoginScreen}
          options={{title: 'Add Contact'}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const DialScreen = ({navigation}) => {

  const [inputValue, setInputValue] = useState('');

  const triggerCall = () => {

    if (inputValue.length != 10) {
      alert('Please insert correct contact number');
      return;
    }

    const args = {
      number: inputValue,
      prompt: true,
    };
   
    call(args).catch(console.error);
  };
  return (
    <SafeAreaView style={styles.container}>
     <Button
      title="Go to Contacts"
      onPress={() =>
        navigation.navigate('Home')
      }
    />
    <Button title="ADD CONTACT"
     onPress={() =>
        navigation.navigate('Login')
     }
    />
      <View style={styles.container}>
        <Text style={styles.titleText}>
          Make a Phone Call
        </Text>
        <Text style={styles.titleTextsmall}>
          Enter Conatct Number to Call
        </Text>
        <TextInput
          value={inputValue}
          onChangeText={
            (inputValue) => setInputValue(inputValue)
          }
          placeholder={'Enter Conatct Number to Call'}
          keyboardType="numeric"
          style={styles.textInput}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={triggerCall}>
          <Text style={styles.buttonTextStyle}>
            Make a Call
          </Text>
        </TouchableOpacity>
       
      </View>
    </SafeAreaView>

  );
};
const LoginScreen =(navigation)=>{

    return (
        <SafeAreaView >
        <View>
           <TextInput
           placeholder="NAME"
             style={styles.input}
           />
           <TextInput
           placeholder="Enter Contact number"
             style={styles.input}
             keyboardType={'numeric'}
           />
           <Button title="Add" 
           
            />
            </View>
        </SafeAreaView>
    );
};

const ContactScreen = ({navigation}) => {
   return (
    <View style={styles.container}>
    
    <Button
      title="Go to Jane's contact"
      onPress={() =>
        navigation.navigate('Profile', {name: 'Jane',numbers:'9876543210'})
      }
    />

    <Button
      title="Go to Naveen's contact"
      onPress={() =>
        navigation.navigate('Profile', {name: 'Naveen' ,numbers:'9025466845'})
      }
    />
    </View>
  );
};
const ProfileScreen = ({navigation, route}) => {
   return <View style={styles.container}>
  <Text>This is {route.params.name}'s contact</Text>
  <Text> {route.params.numbers}</Text>
  <Button title="Call"/>
  <Button title="Message"/>
  </View>
};

export default MyStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    textAlign: 'center',
    
  },
    titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    
  },
  titleTextsmall: {
    marginVertical: 8,
    fontSize: 16,
  },
  buttonStyle: {
    justifyContent: 'center',
    marginTop: 15,
    padding: 10,
    backgroundColor: '#8ad24e',
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 10,
  },
  button:{
        marignTop: 100,
        marginVertical: 8,
         textAlign: 'center'
  },
   title: {
        fontSize: 40,
        color: 'black',
        marginBottom: 20,
        fontWeight: "bold",
    },
    input: {
        backgroundColor: "#fff",
        padding: 10,
        width: "80%",
        marginTop: 15,
        color: "#000",
    },
});
