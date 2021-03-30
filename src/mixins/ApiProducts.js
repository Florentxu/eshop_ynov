import apiConfigs from '../configs/api.configs';

export default {
    methods: {
            getProducts: function (){
                console.log(apiConfigs.apiUrl);
                return fetch(`${apiConfigs.apiUrl}/products`)
                .then(res=>res.json())       
            }
        }   
}