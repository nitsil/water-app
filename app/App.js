import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, Button } from 'react-native';
import configureStore from './redux/configureStore'
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import auth from '@react-native-firebase/auth';
import { TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

auth()
  .signInWithEmailAndPassword('test@water.app', 'test@water.app')
  .then((res) => {
    console.log('User account created & signed in!', res);

    const storeData = async (res) => {
      try {
        await AsyncStorage.setItem('@storage_Key', res)
      } catch (e) {
        // saving error
      }
    }
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });

function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
      <TextInput placeholder="Login" />
      <TextInput placeholder="Password" />

      <Button
        title="Log in"
        onPress={() => navigation.navigate('WaterDetails')}
      />
    </View>
  );
}

function WaterDetails() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Water Details Screen</Text>
    </View>
  );
}

function History() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>History</Text>
    </View>
  );
}


const Stack = createStackNavigator();
const LoginStack = createStackNavigator();

function App({ navigation }) {
  return (
    <Provider store={configureStore.store}>
      <PersistGate
        loading={null}
        persistor={configureStore.persistor}>
        <NavigationContainer>
          {
            !isLogin ?
              <LoginStack.Navigator>
                <LoginStack.Screen name="Login" component={LoginScreen} options={{ title: 'Log in' }} />
              </LoginStack.Navigator>
              :
              <Tab.Navigator>
                <Tab.Screen name="WaterDetails" component={WaterDetails} />
                <Tab.Screen name="History" component={History} />
              </Tab.Navigator>

          }
          <Button title="Log out" onPress={() => navigation.popToTop()} />

        </NavigationContainer>
      </PersistGate>
    </Provider>

  );
}
export default App;