import axios from 'axios'

const api = axios.create({
    // A URL *PRECISA* terminar com /
    baseUrl: 'https://api.faustocintra.com.br/'
})

export default api