import React from 'react'
import {CircleMarker, Popup} from 'react-leaflet'
import {useSelector} from 'react-redux'
import formatTimestamp from '../../utils/formatTimeStamp'

const Maker = (props) => {
    const {countryData} = props
    const {curZoom} = useSelector(state => state.mapSlice)
    const fixRadius = (cases) => {
        let radius = cases * 0.000001 * curZoom
        radius = parseInt(radius.toFixed(0)) + 1
        if (curZoom > 3) {
            radius = cases * 0.0001 * curZoom
            if (radius > 100) {
                radius = cases * 0.000003 * curZoom
            }
            if (radius < 15) {
                radius = 15
            }
        }
        return radius
    }

    return (
        <CircleMarker
            center={[countryData.countryInfo.lat, countryData.countryInfo.long]}
            radius={fixRadius(countryData.cases)}
            fillColor="red"
            color="red"
            fillOpacity="50%"
        >
            <Popup>
                Country: {countryData.country}<br />
                Updated: {formatTimestamp(countryData.updated)}<br />
                Total cases: {countryData.cases.toLocaleString()}<br />
                Total deaths: {countryData.deaths.toLocaleString()}<br />
            </Popup>
        </CircleMarker>
    )
}

export default Maker