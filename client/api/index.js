import axios from 'axios'


const url=import.meta.env.VITE_API_URL
class Api{
    defaultHeaders={
        'Content-Type': 'text/plain'
    }
    jsonHeader={
        'Content-Type': 'application/json'
    }
    formDataHeader={
        'Content-Type': 'multipart/formdata'
    }
    async getIndex(){
        const {data}=await axios.get(`${url}`,{
            headers:this.defaultHeaders
        })
        return data
    }
    async compressImage(body){

    }
}
export default new Api