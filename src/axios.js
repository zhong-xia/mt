import axios from 'axios'

axios.defaults.baseURL = 'http://api.duyiedu.com'
axios.interceptors.request.use(function(config){
    console.log(config);
    config.params = {
        ...config.params,//如果前面传过数据后面直接拼接上
         appkey:'zhongxia_1_1555678279824'
    }
    return config;
},function(error){
    return Promise.reject(error);
});

export default axios;