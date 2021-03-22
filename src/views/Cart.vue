<template>
    <div class="shopping__cart">
        <TitlePage title="Panier" />
        <div >
            <table>
                <thead>
                    <tr>
                        <th> </th>
                        <th>Titre</th>
                        <th></th>
                        <th>Quantité</th>
                        <th></th>
                        <th>Prix</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in cartArray" v-bind:key="product._id">
                        <td><img :src=product.img style="width: 300px"></td>
                        <td> {{product.title}} </td>
                        <td><button @click="removeOne(product)"> - </button></td>
                        <td> {{product.qty}} </td>
                        <td><button @click="addItemToCart(product)"> + </button></td>
                        <td> {{product.price}} </td>
                        <td> {{product.qty*product.price | formatPriceDecimal | formatPrice}} </td>
                        <td><button @click="removeItem(product)">Supprimer l'élément</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div>Quantité total : {{qtyTotal}} </div>
        <div>Prix total : {{prcTotal | formatPriceDecimal | formatPrice}} </div>
        <button @click="clear()">Vider le panier</button>
    </div>
</template>

<script>
import Button from '../components/Button.vue';
import TitlePage from "../components/TitlePage";
import Cart from "../mixins/Cart";
export default {
    mixins: [Cart],
    components: {
        TitlePage,
        Button
    },
    data: function() {
        return {
            cartArray: [],
            // qtyTotal:0,
            // prcTotal:0,
        };
    },
    created() {
        this.cartArray = this.getCart();
        console.log(this.getCart);
        // this.qtyTotal = this.getCartCount(this.cartArray);
        // this.prcTotal = this.getCartTotal(this.cartArray);
    },
    computed: {
        qtyTotal() {
            return this.getCartCount(this.cartArray);
        },
        prcTotal(){
            return this.getCartTotal(this.cartArray);
        }
    },
    methods:{
        addItemToCart: function (product) {
            this.addOneQty(product);
            this.cartArray= this.getCart();
        },
        removeItem: function(product) {
            this.removeItemCart(product)
            this.cartArray= this.getCart();
        },
        removeOne: function(product) {
            this.removeOneQty(product);
            this.cartArray= this.getCart();
            // console.log('hell')
        },
        clear: function() {
            this.clearCart();
            this.cartArray= this.getCart();
        }

    },

};
</script>

<style lang="scss" scoped>
.shopping__cart{
    width: 50%; 
    margin: 50px auto;
}

</style>
