import axios from 'axios'

const api = axios.create({
    // A URL *PRECISA* terminar com /
    baseURL: 'https://api.faustocintra.com.br/'
})

export default api