import * as React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import { NavigationContainer, navigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    height: 1040,
  },
  b:{
    backgroundColor: 'blue',

  },
  
  title: {
    backgroundColor: 'black',
    height: 80,
    fontWeight: 'bold',
  },
  
  heading: {
    padding: 20,
    fontSize: 25,
    color: 'beige',
    textAlign:'center',
  },
  sub1: {
    fontSize: 20,
    padding: 10,
    color: 'white',
    fontWeight: 'bold',
  },
  sub1content: {
    padding: 20,
    fontSize: 15,
    color: 'white',
    fontWeight: 'light',
  },
  tinyLogo: {
    width: 150,
    height: 100,
    marginLeft: 90,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  content: {
    height: 300,
    backgroundColor: 'grey',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  footer: {
    marginTop: 885,
    backgroundColor: 'black',
  },
  footertext: {
    textAlign: 'center',
    color: 'beige',
  },
  contentmain: {
    padding: 20,
    backgroundColor: 'grey',
  },
  maincontainer: {
    borderBottomColor: 'blue',
    borderBottomWidth: 1,
    backgroundColor:'grey',
  },
});
function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.heading}>V Cinemas</Text>
        </View>
        <View style={{ height: 50 }}>
          <Text style={styles.sub1}>NOW SHOWING:</Text>
          <View style={styles.content}>
            <Text style={styles.sub1content}>
              AVATAR: The Way of Water
8.8/10,
147.8K votes
Action,Adventure,Fantasy,
•UA •16 Dec, 2022
            </Text>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: 'https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg',
              }}
            />
            <Button
              title="BOOK TICKETS"
              onPress={() => navigation.navigate('Second')}
            />
          </View>
          <View style={styles.content}>
            <Text style={styles.sub1content}>
            CONNECT: 2D
Tamil,Telugu
1h 39m
•
Horror
,
Thriller
•UA
•
22 Dec, 2022
            </Text>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: 'https://static.toiimg.com/thumb/msid-95548408,imgsize-1331696,width-400,resizemode-4/95548408.jpg',
              }}
            />
            <Button title="BOOK TICKETS" onPress={() => navigation.navigate('Third')} />
          </View>
          <View style={styles.content}>
            <Text style={styles.sub1content}>
            LATHTHI: 2DTamil,Hindi,
            Malayalam,Kannada
              7.7/10
              6.3K votes
            </Text>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: 'http://timesofindia.indiatimes.com/photo/90102829.cms',
              }}
            />
            <Button
              title="BOOK TICKETS"
              onPress={() => navigation.navigate('Fourth')}
            />
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footertext}>ALL RIGHTS RESERVED</Text>
        </View>
      </View>
    </ScrollView>
  );
}

function SecondScreen({ navigation }) {
  return (
    <View>
      <View style={styles.title}>
        <Text style={styles.heading}>AVATAR:The Way of water</Text>
      </View>
      <View styles={styles.maincontainer}>
        <Text style={styles.contentmain}>
          ABOUT THE MOVIE:
           
        </Text>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'data:image/jpeg;base64,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',
          }}
        />
        <Text style={styles.contentmain}>
        Set more than a decade after the events of the first film, "Avatar The Way of Water" begins to tell the story of the Sully family (Jake, Neytiri and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive and the tragedies they endure.
        </Text>
      </View>
      <Button 
       title="Home" onPress={() => navigation.navigate('Home')} />
       <Button 
        title="login" onPress={() => navigation.navigate('Home')} />
      
    </View>
  );
}
function ThirdScreen({ navigation }) {
  return (
    <View>
      <View style={styles.title}>
        <Text style={styles.heading}>CONNECT</Text>
      </View>
      <View styles={styles.maincontainer}>
        <Text style={styles.contentmain}>
          ABOUT THE MOVIE:
        </Text>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9_8Qjl_0GN5Q6ckDf12ACqz0ex9aJ233thw&usqp=CAU',
          }}
        />
        <Text style={styles.contentmain}>
          About the movie
During the COVID-19 lockdown in India, a single mother notices strange changes in her daughter`s behavior after she tests positive with the virus. The mother tries to get medical help, but has no luck. Desperate for a solution, she seeks help from an old priest, who suggests a virtual exorcism over a zoom call.
        </Text>
      </View>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
      <Button 
        title="login" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
function FourthScreen({ navigation }) {
  return (
    <View>
      <View style={styles.title}>
        <Text style={styles.heading}>LATHTHI</Text>
      </View>
      <View styles={styles.maincontainer}>
        <Text style={styles.contentmain}>
             ABOUT THE MOVIE:
        </Text>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'data:image/jpeg;base64,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',
          }}
        />
        <Text style={styles.contentmain}>
                  
Muruganantham is a suspended police constable who hits Vellai unaware he is the son of a notorious don. He is forced to confront the villains as his son is being exposed to villainy. Can he save his family and himself?
        </Text>
      </View>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
      <Button 
        title="login" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Main page' }}
        />
        <Stack.Screen
          name="Second"
          component={SecondScreen}
          options={{ title: 'V cinemas' }}
        />
        <Stack.Screen
          name="Third"
          component={ThirdScreen}
          options={{ title: 'V cinemas' }}
        />
        <Stack.Screen
          name="Fourth"
          component={FourthScreen}
          options={{ title: 'V cinemas' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;