import axios from 'axios'

const getGlobalInfo = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios.get('https://disease.sh/v3/covid-19/all')
            let globalInfoData = response.data
            return resolve(globalInfoData)
        } catch (error) {
            return reject(error)
        }
    })
}

export default getGlobalInfo