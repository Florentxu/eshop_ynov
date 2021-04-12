<template>
    <div>
        <TitlePage title="Modifier la commande" />
        <div class="order__update">
            <div class="form">
                <div class="form__data">Id: {{ _id }}</div>
                <div class="form__data">
                    Utilisateur: {{ user.lastName }} {{ user.firstName }}
                </div>
                <div class="form__data">
                    Total: {{ total | formatPriceDecimal | formatPrice }}
                </div>
                <div class="form__data">
                    Produit:
                    <div v-for="product in products" v-bind:key="product._id">
                        {{ product.title }}
                    </div>
                </div>
                <form @submit="edit">
                    <div class="form__group">
                        <label for="status">Status</label><br />
                        <select name="status" v-model="status">
                            <option value="Livré">Livré</option>
                            <option value="En cours">En cours</option>
                            <option value="Terminé">Terminé</option>
                        </select>
                    </div>
                    <div class="form__button">
                        <input type="submit" value="Modifier" />
                    </div>
                </form>
                <p v-if="messageError">
                    {{ messageError }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import apiConfigs from "../configs/api.configs";
import TitlePage from "../components/TitlePage";

export default {
    components: {
        TitlePage,
    },
    data: function() {
        return {
            products: [],
            status: "",
            total: "",
            user: "",
            messageError: "",
        };
    },
    methods: {
        edit() {
            const body = {
                status: this.status,
            };
            const order = localStorage.getItem("order");
            const bodyToSend = JSON.stringify(body);
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: bodyToSend,
            };
            fetch(`${apiConfigs.apiUrl}/order/update/${order}`, requestOptions)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                })
                .catch((err) => console.log(err))
                this.$router.push("/orderCRUD");

        },
    },
    created() {
        const order = localStorage.getItem("order");
        if (order) {
            fetch(`${apiConfigs.apiUrl}/order/${order}`)
                .then((res) => res.json())
                .then((data) => {
                    this._id = data._id;
                    this.products = data.products;
                    this.status = data.status;
                    this.total = data.total;
                    this.user = data.user;
                })
                .catch((err) => console.log(err));
        }
    },
    destroyed() {
        localStorage.removeItem("order");
    },
};
</script>

<style lang="scss" scoped>
.form {
    border: 1px solid lightgrey; 
    border-radius: 15px;
    width: 40%;
    margin: auto;
    padding: 20px;
}
.form__data{
    margin-bottom: 10px;
}
.form__group{
    margin-bottom: 10px;
}
.form__group label{
    font-size: bold;
}
.form__group select{
    width:40%;
}
.form__button input{
    background: blue;
    border: none;
    border-radius: 10px ;
    color: white;
    font-size: 20px;
    padding: 10px 20px 10px 20px;
    margin-top: 10px;
}
.form__button input:hover{
    background: steelblue;
}
.form__img {
    max-width: 200px;
    max-height: 200px;
}
</style>
