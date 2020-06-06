import axios from 'axios'


const instance = axios.create({

      baseURL:"http://localhost:8081"

})

instance.defaults.headers.common['Something'] = "Something"

export default instance;