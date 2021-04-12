<template>
    <div>
        <TitlePage title="Gestionnaire des produits" />
        <button class="btn btn-green" @click="create" > Ajouter un produit</button>
        <table class="product__table">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Nom</th>
                    <th>Description</th>
                    <th>Categorie</th>
                    <th>Prix</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in productsFromApi" v-bind:key="product._id">
                    
                    <td>
                        <img :src="product.img" style=" max-width:200px"/>
                    </td>
                    <td>{{ product.title }}</td>
                    <td>{{ product.description }}</td>
                    <td>{{ product.category.title }}</td>
                    <td>{{ product.price | formatPriceDecimal | formatPrice}}</td>
                    <td>
                        <button class="btn btn-brown" @click="update(product._id)">Modifier</button></br>
                        <button class="btn btn-red" @click="remove(product._id)">Supprimer</button>
                    </td>
                </tr>
        </tbody>
        </table>
    </div>
</template>

<script>
import Bouton from '../components/Button.vue';
import TitlePage from "../components/TitlePage";
import ApiProducts from "../mixins/ApiProducts";
import apiConfigs from "../configs/api.configs";
export default {
    components: {
        TitlePage,
        Bouton,
    },
    mixins: [ApiProducts],
    methods: {
        create() {
            this.$router.push('/productCreate')
        },
        update(product) {
            localStorage.setItem('product',product)
            this.$router.push('/productUpdate')
        },
        remove(id) {
            fetch(`${apiConfigs.apiUrl}/products/delete/${id}`)
                .then((res) => res.json())
                .catch((err) => console.log(err));
                this.$router.go();
        }
    },
};
</script>

<style lang="scss" scoped>
.product__table, td{
    margin-top: 20px;
    border-collapse: collapse ;
    border: 1px solid black;
    margin: auto;
}
.product__table th{
    padding: 20px;
    background-color: rgb(65, 184, 131);
    color: white;
    font-size: 20px;
    width: auto;
}
.product__table td{
    padding: 20px;
}.btn {
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
    
    &-green {
        background: rgb(65, 184, 131);
        color: white;
        border: 1px solid rgb(65, 184, 131);

        &:hover {
            background: white;
            color: rgb(65, 184, 131);
        }
    }

    &-red {
        background: red;
        color: white;
        border: 1px solid red;
        &:hover {
            background: white;
            color: red;
        }
    }
}
</style>
