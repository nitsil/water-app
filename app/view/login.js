import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import { addToHistory } from '../redux/actions/history';
import moment from 'moment'

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