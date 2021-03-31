import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button } from 'react-native';

function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
      <Text>Login Screen</Text>
      <Button
        title="Log in and continue"
        onPress={() => navigation.navigate('WaterDetails')}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Water Details Screen</Text>
    </View>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>History</Text>
  </View>

  <Button title="Log out" onPress={() => navigation.popToTop()} />
  </>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" >
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Log in' }} />
        <Stack.Screen name="WaterDetails" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;