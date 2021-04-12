<template>
    <div>
        <TitlePage title="Account" />
        <div v-if="isLogged">
            <div class="user">
            <div class="user__info" v-if="user">
                <p>Nom :{{ user.firstName }}</p>
                <p>Prenom:{{ user.lastName }}</p>
                <p>Téléphone :{{ user.tel }}</p>
                <p>Email :{{ user.email }}</p>
                <p>Adresse :{{ user.address.street }} {{ user.address.ccode }} {{ user.address.city }} {{ user.address.country }}</p>
            </div>
            <div>Probleme avec le Header, besoin de faire "F5" pour actualiser le Header</div>
            <div>
                <Button buttonClass="btn btn-black" :buttonFunction="goToEdit" buttonName="Modifier les informations" />
            </div>
            </div>
            <table class="order__table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Status</th>
                    <th>Produits</th>
                    <th>Prix</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="order in user.orders" v-bind:key="order._id">
                    
                    <td>{{ order._id }}</td>
                    <td>{{ order.status }}</td>
                    <td>
                        <p v-for="product in order.products" v-bind:key="product">
                        {{ product }}
                        </p>
                    </td>
                    <td>{{ order.total | formatPriceDecimal | formatPrice}}</td>
                </tr>
            </tbody>
        </table>

        </div>
        <div v-else>
            Vous n'etes pas connecté
        </div>
    </div>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";
import TitlePage from "../components/TitlePage";
import Button from "../components/Button";
import User from "../mixins/User";
import apiConfigs from "../configs/api.configs";
export default {
    components: {
        TitlePage,
        Button,
    },
    methods: {
        // logout: function() {
        //     localStorage.removeItem("token");
        //     this.isLogged = false;
        //     this.$router.push("/login");
        // },

        goToEdit() {
            const token = localStorage.getItem("token");
            const decodedToken = VueJwtDecode.decode(token);
            this.$router.push({
                name: "EditUser",
                params: { id: `${decodedToken.id}` },
            });
        },
    },
    mixins: [User],
};
</script>
<style lang="scss" scoped>

.user{
    border: lightgrey solid 1px;
    width: 40%;
    margin: auto;
    margin-bottom: 10px;
}

.user__info{
    margin: 10px;
    text-align: left;
    font-size: 15;
}

.order__table, td {
    margin-top: 20px;
    border-collapse: collapse ;
    border: 1px solid black;
    margin: auto;
}
.order__table th{
    padding: 10px 0px 10px 0px;
    background-color: rgb(60, 151, 236);
    color: white;
    font-size: 20px;
    width: 300px;
}


</style>
