import React, { useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import { addToHistory } from '../redux/actions/history';
import moment from 'moment'
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { login } from '../redux/actions/auth';

export default ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const onLogin = () => {
    dispatch(login(email, password))
  }
  return (
    <View style={styles.screenContainer}>
      <Text style={{ textAlign: 'center' }}>Login Screen</Text>
      <View style={styles.contentContainer}>
        <TextInput keyboardType='email-address' value={email} onChangeText={value => setEmail(value)} style={styles.input} placeholder="Email" />
        <TextInput secureTextEntry value={password} onChangeText={value => setPassword(value)} style={styles.input} placeholder="Password" />
        <View style={styles.buttonContainer}>
          <Button
            disabled={email == '' || password == ''}
            title="Log in"
            onPress={onLogin}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: { flex: 1, justifyContent: 'center' },
  input: {
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#CCC',
    backgroundColor: '#FFF'
  },
  buttonContainer: { 
    marginTop: 15, 
    alignItems: 'center'
  },
  contentContainer: { 
    marginHorizontal: 20
  }
})