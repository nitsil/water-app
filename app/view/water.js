import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToHistory, clearHistory } from '../redux/actions/history';
import moment from 'moment'
import { Button, LayoutAnimation, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { clearWaterCups, drinkWater } from '../redux/actions/water';
import WaterBar from './components/WaterBar';
import { logout } from '../redux/actions/auth';
import Midnight from 'react-native-midnight'

export default WaterDetails = () => {
    let dispatch = useDispatch()
    const waterCups = useSelector(store => store.water.waterCups)
    const onPress = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.linear)
        dispatch(drinkWater())
        dispatch(addToHistory({ timestamp: moment().format('X'), waterCups }))
    }
    const onLogout = () => {
        dispatch(logout())
        dispatch(clearWaterCups())
        dispatch(clearHistory())
    }
    const onClearBar = () => {
        dispatch(clearWaterCups())
    }
    useEffect(() => {
        const listener = Midnight.addListener(() => {
            dispatch(clearWaterCups())
        })
        return () => listener.remove()
    }, [])
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.logout} onPress={onLogout}>
                <Text style={{ fontSize: 20 }}>Logout</Text>
            </TouchableOpacity>
            <WaterBar />
            <View style={{
                flexDirection: 'row'
            }}>
                <View style={{
                    paddingHorizontal: 15
                }}>
                    <Button
                        title="Clear water bar"
                        color="#CCC"
                        onPress={onClearBar} />
                </View>

                <View style={{
                    paddingHorizontal: 15
                }}>
                    <Button
                        title="Drink water"
                        onPress={onPress} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center' },
    logout: {
        alignSelf: 'flex-end',
        padding: 20
    }
})