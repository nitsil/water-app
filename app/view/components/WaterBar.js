import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

const { width } = Dimensions.get('screen')
const dayliCups = 12

export default () => {
    const waterCups = useSelector(store => store.water.waterCups)
    const cupWidth = (width - 40) / dayliCups
    const cups = new Array(dayliCups).fill(0)
    return (
        <View style={{
            height: 80,
            width: (width - 40),
            marginTop: 40,
            marginBottom: 20,
            flexDirection: 'row'
        }}>
            
            {
                cups.map((item, index) => {
                    return (
                        <View key={`cup_${index}`} style={{
                            width: cupWidth,
                            backgroundColor: index + 1 <= waterCups ? 'blue' : '#FFF'
                        }}>
                        </View>
                    )
                })
            }
            <View style={{
                position: 'absolute',
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text>{Math.round(waterCups * 100 / dayliCups)} %</Text>
            </View>
        </View>
    )
}