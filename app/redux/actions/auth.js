import auth from '@react-native-firebase/auth';
import moment from 'moment';
import { Alert } from 'react-native';
import PushNotification from 'react-native-push-notification';

export const SET_TOKEN = 'SET_TOKEN';

function setToken(token) {
    return {
        type: SET_TOKEN,
        token
    }
}

export function login(email, password) {
    return (dispatch) => {
        return auth()
            .signInWithEmailAndPassword(email, password)
            .then((res) => {
                if (!!res && res.user) {
                    const { user } = res
                    PushNotification.createChannel(
                        {
                            channelId: 'com.waterapp',
                            channelName: 'waterapp',
                        },
                        (created) => console.log(`createChannel returned '${created}'`)
                    );
                    const repeatTime = moment.duration(2, 'h').asMilliseconds()
                    PushNotification.localNotificationSchedule({
                        channelId: "com.waterapp",
                        message: 'Don’t forget to drink a water!',
                        repeatType: 'time',
                        repeatTime,
                        date: moment().add(2, 'h').toDate()
                    });
                    dispatch(setToken(user?.uid))
                } else {
                    Alert.alert('Error', 'Wrong login data')
                }
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }
                dispatch(setToken(null))
                Alert.alert('Error', 'Wrong login data')
            });
    }
}

export function logout() {
    return (dispatch) => {
        return auth()
            .signOut()
            .then(() => {
                PushNotification.cancelAllLocalNotifications()
                dispatch(setToken(null))
            });
    }
}