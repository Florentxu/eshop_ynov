<template>
    <div >
        <TitlePage title="Account" />
        <div v-if="isLogged">
            <div class="user__info" v-if="user">
                <p>Nom :{{user.firstName}}</p>
                <p>Prenom:{{user.lastName}}</p>
                <p>Email :{{user.email}}</p>
                <button @click="logout">Déconnexion</button>
            </div>
        </div>
        <div v-else>
            Vous n'etes pas connecté
        </div>
    </div>
</template>

<script>
    import VueJwtDecode from "vue-jwt-decode";
    import TitlePage from "../components/TitlePage";
    import Bouton from "../components/Button";
    export default {
        components: {
            TitlePage,
            Bouton
        },
        methods: {
            logout: function () {
                localStorage.removeItem('token');
                this.isLogged = false;
            }
        },
        data: function () {
            return {
                user:{},
                isLogged:false
                }
        },
        created () {
            const token = localStorage.getItem('token');
            if (token){
                const decodedToken = VueJwtDecode.decode(token);
                fetch(`https://my-first-api-ynov.herokuapp.com/api/v1/users/${decodedToken.id}`,{
                    headers: {
                        Authorization: token,
                    }
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    this.user = data;
                    this.isLogged = true;
                    })
                .catch(err => console.log(err))
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>