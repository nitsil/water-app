import React from 'react'
import { connect, useDispatch } from 'react-redux';
import { addToHistory } from '../redux/actions/history';
import moment from 'moment'

export default WaterDetails = () => {
    let dispatch = useDispatch()
    let history = useSelector(store => store.history.data)
    const drinkWater = () => {
        //...
        dispatch(addToHistory({ timestamp: moment().format('X') }))
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Water Details Screen</Text>
            <Text>Number of drunk water</Text>
            <Text>{history.length}</Text>
            <Text>{history[history.length - 1].timestamp}</Text>

            <Button
                title="Add water"
                onPress={drinkWater} />
        </View>
    )
}