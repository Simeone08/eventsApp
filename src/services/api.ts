import axios from 'axios';

// <https://api.doity.com.br/public/aplicativos/v2/eventos/24043/parceiros?sort=ordem&direction=ASC&limit=200&d_rdhid=59c654f003e03cb1f34fb921af330a24cb619c99>

const api = axios.create({
    baseURL: 'https://api.doity.com.br/public/aplicativos/v2/eventos/24043'
})

export default api