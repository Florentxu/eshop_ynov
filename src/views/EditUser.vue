<template>
    <div>
        <TitlePage title="Modifier l'utilisateur" />
        <div class="user__info" v-if="user">
            <p>Nom :{{ user.firstName }}</p>
            <p>Prenom:{{ user.lastName }}</p>
            <p>Email :{{ user.email }}</p>
        </div>
    </div>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";
import apiConfigs from "../configs/api.configs";

import TitlePage from "../components/TitlePage";
import Bouton from "../components/Button";
export default {
    components: {
        TitlePage,
        Bouton,
    },
    data: function() {
        return {
            user: {},
        };
    },
    created() {
        const token = localStorage.getItem("token");
        if (token) {
            const decodedToken = VueJwtDecode.decode(token);
            fetch(`${apiConfigs.apiUrl}/users/${decodedToken.id}`, {
                headers: {
                    Authorization: token,
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    this.user = data;
                })
                .catch((err) => console.log(err));
        }
    },
};
</script>

<style lang="scss" scoped></style>
