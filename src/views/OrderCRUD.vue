<template>
    <div>
        <TitlePage title="Gestionnaire des commandes" />
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
                        <button class="btn btn-brown" @click="update(order._id)">Modifier</button>
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
.order__table, td{
    margin-top: 20px;
    border-collapse: collapse ;
    border: 1px solid black;
    margin: auto;
}
.order__table th{
    padding: 20px;
    background-color: rgb(65, 184, 131);
    color: white;
    font-size: 20px;
    width: auto;
}
.order__table td{
    padding: 20px;
}

.btn {
    display: inline-block;
    border-radius: 50px;
    font-size: 15px;
    font-weight: bold;
    text-transform: uppercase;
    transition: 0.3s all;
    padding: 15px;
    margin: 15px;
}

.btn {

    &-brown {
        background: brown;
        color: white;
        border: 1px solid brown;
        &:hover {
            background: white;
            color: brown;
        }
    }
}
</style>
