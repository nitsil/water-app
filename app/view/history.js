import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import { addToHistory } from '../redux/actions/history';
import moment from 'moment'
export default () => {
    let history = useSelector(store => store.history) //history.data = [{timestamp}]

return (
    <></>
)
}


