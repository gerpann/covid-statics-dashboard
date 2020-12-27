import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import Maker from './Maker'

const Makers = () => {
    const {countriesData} = useSelector(state => state.mapSlice)

    return (
        <React.Fragment>
            {
                countriesData.map(countryData => {
                    return (
                        <Maker
                            countryData={countryData}
                            key={Math.random() + ""}
                        />
                    )
                })
            }
        </React.Fragment>
    )
}

export default Makers