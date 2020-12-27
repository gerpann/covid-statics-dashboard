import React, {useState, useEffect} from 'react'
import {MapContainer, TileLayer, useMapEvents} from 'react-leaflet'
import {useDispatch} from 'react-redux'
import Makers from './Makers'
import {addCountriesData, setCurZoom} from '../../../features/map/mapSlice'
import {getCountriesInfoAPI} from '../../../apis'

const Map = () => {
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function fetchCountriesData() {
            try {
                let tempCountriesData = await getCountriesInfoAPI()
                dispatch(addCountriesData(tempCountriesData))
                setIsLoading(false)
            } catch (error) {
                console.log('Error while fetching data')
            }
        }
        fetchCountriesData()
    }, [])

    const CustomComponent = () => {
        const map = useMapEvents({
            zoom: () => {
                let curZoom = map.getZoom()
                dispatch(setCurZoom(curZoom))
            }
        })
        return null
    }

    return (
        isLoading === true ? null : (
            <MapContainer className="map"
                id="mapid"
                center={[0, 0]}
                zoom={2}
                doubleClickZoom={false}
                dragging={true}
                zoomControl={true}
                scrollWheelZoom={false}
                style={{height: "100vh", width: "50%"}}
            >
                <CustomComponent />
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright"></a>'
                    noWrap={false}
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Makers />
            </MapContainer>
        )
    )
}

export default Map