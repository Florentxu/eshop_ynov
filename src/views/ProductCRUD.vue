<template>
    <div>
        <TitlePage title="ProductCRUD" />
        <button @click="create" > Ajouter un produit</button>
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
                        <button class="btn_edit" @click="update(product._id)">Modifier</button>
                        <button class="btn_delete" @click="remove(product._id)">Supprimer</button>
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
.product__table{
    margin: auto;
}
.product__table thead{
    background-color: black;
    color: white;
    font-size: 20px;
    border-color: black;
}
</style>
