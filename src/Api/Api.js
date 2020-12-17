
const API_KEY = "H0nuD4WXn9MPfZ3m6HKTH1A97qu1"


const getMatches = () => {
    const url = `https://cricapi.com/api/matches?apikey=${API_KEY}`

    return fetch (url)
    .then((response) => response.json())
    .catch((error) => console.log("ERROR :", error))


};


export default getMatches  