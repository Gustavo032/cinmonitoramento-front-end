//backend: conexão com a api

import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api-g.codematch.com.br/'
})

export default api;