import config from '../config';

const ListenerApiService ={
  postLogin(listenerInfo){
    return fetch(`${config.API_ENDPOINT}/pairs`, {
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
  }
}

export default ListenerApiService