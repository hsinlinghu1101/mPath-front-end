import config from '../config';
import TokenService from './token-service'
const PairsApiService ={
  postListener(listenerInfo){
    return fetch(`${config.API_ENDPOINT}/pairs/listeners`, {
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(listenerInfo),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))  
          : res.json()
      )
  },
  postSpeaker(speakerInfo){
    return fetch(`${config.API_ENDPOINT}/pairs/speakers`, {
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(speakerInfo),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))  
          : res.json()
      )
  },
  getListener(topic, gender, age){
    return fetch(`${config.API_ENDPOINT}/pairs/listeners/${topic}/${gender}/${age}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))  
          : res.json()
      )
      
  },
  getSpeaker(topic, gender, age){
    return fetch(`${config.API_ENDPOINT}/pairs/speakers/${topic}/${gender}/${age}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
       'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))  
          : res.json()
      )
  },
  
}

export default PairsApiService