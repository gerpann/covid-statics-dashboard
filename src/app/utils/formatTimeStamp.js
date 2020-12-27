const formatTimestamp = (timeStamp) => {
    let date = new Date(timeStamp)
    let curTime = new Date()
    let result = parseInt(((curTime - date) / 86400).toFixed(0))
    if (result >= 1440) {
        let day = (result / 1440).toFixed(0)
        return day > 1 ? `${day} days ago` : `${day} day ago`
    } else if (result >= 60) {
        let hour = (result / 60).toFixed(0)
        return hour > 1 ? `${hour} hours ago` : `${hour} hour ago`
    } else {
        return result > 1 ? `${result} minutes ago` : `${result} minute ago`
    }
}

export default formatTimestamp