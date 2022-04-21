export default function fetchData(url, method, data) {
    if(!method) {
        method = 'GET'
    }

    return new Promise((resolve, reject) => {
        fetch(url,{
            method: method,
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(data),
        } )
        .then((res)=> res.json())
        .then((ReceivedData) => resolve(ReceivedData))
        .catch((err) => reject(err) )
    })
}

