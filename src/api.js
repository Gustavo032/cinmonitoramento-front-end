//backend: conexão com a api

import axios from 'axios'

const api = axios.create({
    baseURL: 'https://maplebear.codematch.com.br:3033/'
})

export default api;