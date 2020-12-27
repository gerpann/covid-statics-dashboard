import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {addGlobalData} from '../../../features/map/mapSlice'
import {getGlobalInfoAPI} from '../../../apis'
import formatTimeStamp from '../../utils/formatTimeStamp'
import './DashBoard.css'

const DashBoard = () => {
    const dispatch = useDispatch()

    const [isLoading, setIsLoading] = useState(true)
    const [globalData, setGlobalData] = useState(null)

    useEffect(() => {
        async function fetGlobalData() {
            try {
                let tempGlobalData = await getGlobalInfoAPI()
                setGlobalData(tempGlobalData)
                dispatch(addGlobalData(tempGlobalData))
                setIsLoading(!globalData)
            } catch (error) {
                console.log('Error while fetching data')
            }
        }
        fetGlobalData()
    }, [])

    return (
        <div className='dash-board'>
            <h2>
                Updated: {formatTimeStamp(globalData?.updated)}
            </h2>
            <h2>
                Total Cases: {globalData?.cases.toLocaleString()}
            </h2>
            <h2>
                Total Deaths: {globalData?.deaths.toLocaleString()}
            </h2>
            <h2>
                Total Recovered: {globalData?.recovered.toLocaleString()}
            </h2>
            <h2>
                Active: {globalData?.active.toLocaleString()}
            </h2>
        </div>
    )
}

export default DashBoard