const axios = require('axios')
const { OMDB_API_KEY } = process.env

exports.handler = async function (event) {
  console.log(event)
  const payload = JSON.parse(event.body)
  const { title, type, year, page, id } = payload
  const url = id 
    ? `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}` 
    : `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`

  try {
    const { data } = await axios.get(url)
    if(data.Error) {
      return {
        statusCode: 400, // 잘못된 요청에 대한 에러코드
        body: data.Error
      }
    }
    return {
      statusCode: 200, // 정상적인 요청에 대한 코드
      body: JSON.stringify(data)
    }
  } catch (error) {
    return {
      statusCode: error.response.status,
      body: error.message
    }
  }
}