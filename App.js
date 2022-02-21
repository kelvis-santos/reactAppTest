// In App.js in a new project

import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { navigationRef } from './routes/RootNavigation';
// Import de outras telas
import LoginScreen from './components/Login'
import MenuScreen from './components/Menu'
import ListMovieScreen from './components/Lista'
// import HeaderTop from './components/Header'

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
    </View>
  );
}

function Article() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Article Screen</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigationRef.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigationRef.navigate('Details')}
      />
      <Button title="Go to Home" onPress={() => navigationRef.navigate('Home')} />
      <Button title="Go to Login" onPress={() => navigationRef.navigate('Login')} />
      <Button title="Go to Menu" onPress={() => navigationRef.navigate('Menu')} />
      <Button title="Go to List" onPress={() => navigationRef.navigate('List')} />
    </View>
  );
}

const Stack = createNativeStackNavigator();


function Root() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Article" component={Article} />
      <Stack.Screen name="Feed" component={Feed} />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={Root}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="List" component={ListMovieScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;