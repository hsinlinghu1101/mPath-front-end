import config from '../config';

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
  getListener(){
    return fetch(`${config.API_ENDPOINT}/pairs/speakers`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      }
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))  
          : res.json()
      )
  },
  getSpeaker(){
    return fetch(`${config.API_ENDPOINT}/pairs/listeners`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
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