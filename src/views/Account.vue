<template>
    <div>
        <TitlePage title="Account" />
        <div v-if="isLogged">
            <div class="user__info" v-if="user">
                <p>Nom :{{ user.firstName }}</p>
                <p>Prenom:{{ user.lastName }}</p>
                <p>Téléphone :{{ user.tel }}</p>
                <p>Email :{{ user.email }}</p>
                <p>Adresse :{{ user.address.street }} {{ user.address.ccode }} {{ user.address.city }} {{ user.address.country }}</p>
            </div>
            <div>
                <Button buttonClass="btn btn-black" :buttonFunction="goToEdit" buttonName="Modifier les informations" />
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
        <div class="user__order" v-if="user.order">
            presence de order
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
        logout: function() {
            localStorage.removeItem("token");
            this.isLogged = false;
            this.$router.push("/login");
        },
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
.order__table{
    margin: auto;
}
.order__table thead{
    background-color: black;
    color: white;
    font-size: 20px;
    border-color: black;
}</style>
