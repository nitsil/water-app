import React from 'react'
import { connect, useDispatch } from 'react-redux';
import { addToHistory } from '../redux/actions/history';
import moment from 'moment'
export default () => {
    let dispatch = useDispatch()
const drinkWater = () => {
    //...
    dispatch(addToHistory({ timestamp: moment().format('X') }))
}
return (
    <></>
)
}


