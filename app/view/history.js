import React from 'react'
import { useSelector } from 'react-redux';
import { FlatList, StyleSheet, Text, View } from 'react-native'
import moment from 'moment';

export default History = () => {
    let history = useSelector(store => store.history.data) //history.data = [{timestamp}]
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text>Your history</Text>
            </View>
            <FlatList
                keyExtractor={(item, index) => `history_${index}`}
                data={history}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                    const date = moment(+item.timestamp * 1000).format('DD-MM-YYYY HH:mm')
                    const whaterCups = item.waterCups + 1
                    const cupsText = whaterCups > 1 ? 'cups' : 'cup'
                    
                    return (
                        <View style={styles.historyItemContainer}>
                            <Text>{date} - </Text>
                            <Text style={{
                                fontWeight: '600'
                            }}>{whaterCups} {cupsText} ({Math.round(whaterCups * 100 / 12)}%)</Text>
                        </View>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, paddingHorizontal: 20, marginBottom: 15 },
    headerContainer: { marginTop: 15 },
    historyItemContainer: { paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#CCC', flexDirection: 'row' }
})