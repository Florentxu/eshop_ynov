import apiConfigs from '../configs/api.configs';

export default {
    data() {
        return {
            userArray:[]
        }
    },
    created() {
        const token = localStorage.getItem("token");
        const requestOptions = {
            headers: {
                Authorization: token,
            }
        };        
        fetch(`${apiConfigs.apiUrl}/users`, requestOptions)
            .then((res) => res.json())
            .then((data) => {
                this.userArray = data;
            })
            .catch((err) => console.log(err));
    },
}