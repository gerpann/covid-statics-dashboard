import axios from 'axios'

const getCountriesInfo = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios.get('https://disease.sh/v3/covid-19/countries')
            let countriesInfoData = response.data
            return resolve(countriesInfoData)
        } catch (error) {
            return reject(error)
        }
    })
}

export default getCountriesInfo