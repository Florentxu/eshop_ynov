<template>
    <div class="product__page">
        <div class="product__content" v-if="productItem">
            <TitlePage :title="productItem.title"/>
            <p> <img :src=productItem.img></p>
            <p>{{productItem.description}}</p>
            <p>{{productItem.price | formatPriceDecimal | formatPrice}}</p>
        </div>
    </div>
</template>

<script>
    import apiConfigs from '../configs/api.configs';
    import TitlePage from "../components/TitlePage";
    export default {
        components: {
            TitlePage
        },
        name:"Product",
        data: function() {
            return{
                productItem:{}
            }
        },
        created () {
            fetch(`${apiConfigs.apiUrl}/products/${this.$route.params.id}`)
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                this.productItem = data;
                })
            .catch(err => console.log(err));
            console.log(this.$route.params);
        }
    }
</script>

<style lang="scss" scoped>

</style>