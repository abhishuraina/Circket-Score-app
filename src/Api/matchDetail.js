
const API_KEY = "H0nuD4WXn9MPfZ3m6HKTH1A97qu1"


const getMatchDetail = (id) =>{
    const url = `https://cricapi.com/api/cricketScore?apikey=${API_KEY}&unique_id=${id}`

    return fetch(url)
    .then((response) =>response.json())
    .catch((error) => console.log("ERROR:" , error))

}
export default getMatchDetail 