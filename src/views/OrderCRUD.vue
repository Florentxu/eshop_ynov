<template>
    <div>
        <TitlePage title="OrderCRUD" />
        <table class="order__table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Status</th>
                    <th>Produits</th>
                    <th>Utilisateur</th>
                    <th>Prix</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="order in orderArray" v-bind:key="order._id">
                    
                    <td>{{ order._id }}</td>
                    <td>{{ order.status }}</td>
                    <td>
                        <p v-for="product in order.products" v-bind:key="product._id">
                        {{ product.title }}
                        </p>
                    </td>
                    <td>{{ order.user.lastName }} {{ order.user.firstName }}</td>
                    <td>{{ order.total | formatPriceDecimal | formatPrice}}</td>
                    <td>
                        <button class="btn_edit" @click="update(order._id)">Modifier</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import TitlePage from "../components/TitlePage";
import apiConfigs from "../configs/api.configs";
export default {
    components: {
        TitlePage,
    },
    data() {
        return {
            orderArray: []
        }
    },
    methods: {
        update(order) {
            localStorage.setItem('order',order)
            this.$router.push('/orderUpdate')
        },
    },
    created () {
        fetch(`${apiConfigs.apiUrl}/order`)
        .then(res => res.json())
        .then((data) => {
            this.orderArray = data;
        })
        .catch((err) => console.log(err));
    },
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
}
</style>
