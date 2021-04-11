import apiConfigs from '../configs/api.configs';
import VueJwtDecode from 'vue-jwt-decode';

export default {
    data: function () {
        return {
            user:{},
            isLogged:false
        }
    },
    methods: {
        logout: function() {
            localStorage.removeItem("token");
            this.isLogged = false;
            this.$router.push("/login");
        },
    },
    created() {
            const token = localStorage.getItem('token');
            if (token){
                const decodedToken = VueJwtDecode.decode(token);
                fetch(`${apiConfigs.apiUrl}/users/${decodedToken.id}`,{
                    headers: {
                        Authorization: token,
                    }
                })
                .then(res => res.json())
                .then(data => {
                    this.user = data;
                    this.isLogged = true;
                    })
                .catch(err => console.log(err))
            }
            console.log("console log de la mixins")

    },

};