<template>
    <div class="shopping__cart">
        <TitlePage title="Panier" />
        <div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Titre</th>
                            <th></th>
                            <th>Quantité</th>
                            <th></th>
                            <th>Prix</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="product in cartArray"
                            v-bind:key="product._id"
                        >
                            <td>
                                <img :src="product.img" class="img__product" />
                            </td>
                            <td>{{ product.title }}</td>
                            <td>
                                <button @click="removeOne(product)">-</button>
                            </td>
                            <td>{{ product.qty }}</td>
                            <td>
                                <button @click="addItemToCart(product)">
                                    +
                                </button>
                            </td>
                            <td >
                                {{
                                    product.price
                                        | formatPriceDecimal
                                        | formatPrice
                                }}
                            </td>
                            <td >
                                {{
                                    (product.qty * product.price)
                                        | formatPriceDecimal
                                        | formatPrice
                                }}
                            </td>
                            <td>
                                <button @click="removeItem(product)">
                                    Supprimer l'élément
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Livraison: Chronopost</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                {{
                                    prcDelivery
                                        | formatPriceDecimal
                                        | formatPrice
                                }}
                            </td>
                            <td>
                                {{
                                    prcDelivery
                                        | formatPriceDecimal
                                        | formatPrice
                                }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div v-if="cartArray">Quantité total : {{ qtyTotal }}</div>
            <div v-if="cartArray">
                Prix total :
                {{
                    (prcTotal + prcDelivery) | formatPriceDecimal | formatPrice
                }}
            </div>
            <button @click="clear()">Vider le panier</button>
            <div>
                <button @click="checkout()" class="payer">Payer</button>
            </div>
        </div>
    </div>
</template>

<script>
import { loadStripe } from "@stripe/stripe-js";
import TitlePage from "../components/TitlePage";
import Cart from "../mixins/Cart";
import apiConfigs from "../configs/api.configs";
const stripePromise = loadStripe(
    "pk_test_51IYBDvDclEfXj97sYEwwIrMX8EJcUMY5eGoDiSTyqQyk6t2Ise7QAbExboLqriwsn6yj2rsCEuN1pB1yOSF1eZ1I00J9AiWGKO"
);
export default {
    mixins: [Cart],
    components: {
        TitlePage,
    },
    data: function() {
        return {
            cartArray: [],
            prix: this.prcTotal * 100,
            prcDelivery: 5,
            // qtyTotal:0,
            // prcTotal:0,
        };
    },
    created() {
        this.cartArray = this.getCart();
        console.log(this.getCart);
        console.log(this.prcTotal.toFixed(2) * 100);
        // this.qtyTotal = this.getCartCount(this.cartArray);
        // this.prcTotal = this.getCartTotal(this.cartArray);
    },
    computed: {
        qtyTotal() {
            return this.getCartCount(this.cartArray);
        },
        prcTotal() {
            return this.getCartTotal(this.cartArray);
        },
    },
    methods: {
        addItemToCart: function(product) {
            this.addOneQty(product);
            this.cartArray = this.getCart();
        },
        removeItem: function(product) {
            this.removeItemCart(product);
            this.cartArray = this.getCart();
        },
        removeOne: function(product) {
            this.removeOneQty(product);
            this.cartArray = this.getCart();
        },
        clear: function() {
            this.clearCart();
            this.cartArray = this.getCart();
        },
        checkout: async function() {
            // Get Stripe.js instance
            const stripe = await stripePromise;
            console.log("stripe", stripe);
            const amount = this.prcTotal + this.prcDelivery;
            // Call your backend to create the Checkout Session
            const response = await fetch(
                `${apiConfigs.apiUrl}/create-checkout-session`,
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify({
                        amount: amount.toFixed(2) * 100,
                    }),
                }
            );
            console.log("response", response);

            const session = await response.json();
            console.log("session", session);
            // When the customer clicks on the button, redirect them to Checkout.
            const result = await stripe.redirectToCheckout({
                sessionId: session.id,
            });
            console.log("result", result);

            if (result.error) {
                console.log(result.error);
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.shopping__cart {
    width: 50%;
    margin: 50px auto;
}

.img__product {
    max-width: 200px;
    max-height: 200px;
}
.payer {
    width: 300px;
    height: 200px;
    color: white;
    background-color: red;
    font-size: 50px;
}
</style>
