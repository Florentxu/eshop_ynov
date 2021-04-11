<template>
    <div class="page__shop" >
        <TitlePage title="Mon Eshop" />
        <div class="search__form">
            <input type="text" v-model="searchValue" @keyup="search" />
        </div>
        <div class="input__content">
            Résultat de votre recherche = {{searchValue}}
            <!-- <p>Ancienne recherche = {{oldSearchValue}}</p> -->
        </div>
        <div class="search__content">
        <ProductsGrid :productsArray="filteredShop" />

        </div>
        <!-- <ProductsGrid :productsArray="productsFromApi" /> -->
    </div>
</template>

<script>
import TitlePage from "../components/TitlePage";
import ProductsGrid from "../components/ProductsGrid";
import ApiProducts from "../mixins/ApiProducts";
export default {
    name: "Shop",
    components: {
        TitlePage,
        ProductsGrid,
    },
    data: function() {
        return {
            searchValue: "",
            // oldSearchValue:"",
        };
    },
    mixins: [ApiProducts],
    // methods: {
    //     getProducts : function(){
    //     fetch("http://localhost:3000/api/v1/products")
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         this.productsFromApi = data;
    //     })
    //     .catch(err => console.log(err))
    //     }
    // },
    methods: {
        search: function() {
            console.log(this.searchValue);
        }
    },
    computed:{
        filteredShop: function(){
            let filter = new RegExp(this.searchValue, "i");
            return this.productsFromApi.filter(item => item.title.match(filter)|| item.description.match(filter));
        }
    },
    // watch: {
    //     searchValue: function(newValue, oldValue) {
    //         this.oldSearchValue = oldValue;
    //     }
    // },
};
</script>

<style lang="css" scoped></style>
