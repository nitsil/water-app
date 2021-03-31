import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import { addToHistory } from '../redux/actions/history';
import moment from 'moment'
import { FlatList } from 'react-native-gesture-handler';

export default History = () => {
    let history = useSelector(store => store.history) //history.data = [{timestamp}]

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>History</Text>
            <FlatList
                keyExtractor={item => item.id}
                data={history}
                renderItem={item => (<Text>{moment(item.timestamp).format('DD-MM-YYYY HH:mm')}</Text>)}
            />
            {/* { history.map((el, index => {
                return <div key={el + index}>
                    {moment(el.timestamp).format('DD-MM-YYYY HH:mm')} //moment(availability.time_start).format('YYYY-MM-DD')
                </div>
            }))} */}
        </View>
    )
}
