import axios from 'axios';

const API_URL ='https://60950bdb94009e00176b6593.mockapi.io';

export default function CallApi (endpoint, method, body){
    return axios({
        method: method,
        url: `${API_URL}/${endpoint}`,
        data: body
    }).catch(err =>{
        console.log(err);
    })
}