import call from 'react-native-phone-call';
import React,{useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
   FlatList,
  TouchableHighlight
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
          <Stack.Screen name="ViewForm" component={ListPage} />
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
    <View>
     <Button
      title="Go to Contacts"
      onPress={() =>
        navigation.navigate('Home')
      }
    />
    <Button onPress={()=>navigation.navigate('ViewForm')} title="View Form" color="#345584" />
    <Button title="ADD CONTACT"
     onPress={() =>
        navigation.navigate('Login')
     }
    />
    </View>
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

const Formpage = ({navigation}) => {
  const [Form,setForm ] = useState({name:"",email:"",mobile:"",team:"",city:""})
  const formChange = (value,field) =>{
    let prev = {...Form}
    prev[field] = value;
    setForm(prev)
  }
  const handleSubmit = async() => {
    console.log(Form);
    const response = await fetch('http://192.168.9.6:3001/api/insert', {
      method: 'POST',
      mode: 'cors', 
      cache: 'no-cache', 
      credentials: 'same-origin', 
      headers: {
        'Content-Type': 'application/json'
       
      },
     
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(Form) 
    });
    console.log(response.json());
  };

  return (
    <SafeAreaView>
      <TextInput
        onChangeText={(text) =>formChange(text,"name")}
        value={Form.name}
        style={styles.input}
        placeholder="Enter your name"
      />
      <TextInput
        onChangeText={(text) =>formChange(text,"mobile")}
        value={Form.mobile}
        style={styles.input}
        placeholder="Enter Phone"
      />
      <TextInput
        onChangeText={(text) =>formChange(text,"email")}
        value={Form.email}
        style={styles.Input}
        placeholder="Enter Email"
      />
      <TextInput
        onChangeText={(text) =>formChange(text,"team")}
        value={Form.team}
        style={styles.Input}
        placeholder="My Team"
      />
      <TextInput
       onChangeText={(text) =>formChange(text,"city")}
        value={Form.city}
        style={styles.Input}
        placeholder="City"
      />
      <TouchableHighlight
        onPress={()=>{
          handleSubmit()
          Alert.alert('Form Submitted')
        }}
        style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableHighlight>
      <Button onPress={()=>navigation.navigate('Dial')} title="home" color="#841584" />
    </SafeAreaView>
  );
};

const ListPage = ({navigation}) => {
  const [Form,setForm ] = useState([])
  const [selectedId, setSelectedId] = useState(null);
  const handleSubmits = async() => {
    fetch('http://192.168.9.6:3001/api/find')
    .then((response) => response.json())
    .then((data) => setForm(data.data));
  }
 useEffect(()=>{
  handleSubmits()
 },[])
 const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}> Name  {item?.name}</Text>
  
    <Text style={[styles.title, textColor]}>email  {item?.email}</Text>
    <Text style={[styles.title, textColor]}>mobile  {item?.mobile}</Text>
    <Text style={[styles.title, textColor]}>my team  {item?.team}</Text>
    <Text style={[styles.title, textColor]}>city  {item?.city}</Text>
  </TouchableOpacity>
);
 const renderItem = ({ item }) => {
  const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
  const color = item.id === selectedId ? 'white' : 'black';

  return (
<>
    <Item
      item={item}
      onPress={() => setSelectedId(item.id)}
      backgroundColor={{ backgroundColor }}
      textColor={{ color }}
    />
    <View style={{marginBottom:21}} />
    </>
  );
};
  return (
    <SafeAreaView>
      <FlatList
        data={Form}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
       
      />
      <TouchableHighlight
       
        style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableHighlight>
      <Button onPress={()=>navigation.navigate('Home')} title="home" color="#841584" />
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
     item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      marginBottom:20
    },
    input: {
        backgroundColor: "#fff",
        padding: 10,
        width: "80%",
        marginTop: 15,
        color: "#000",
    },
});
