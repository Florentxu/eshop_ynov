<template>
    <div>
        <TitlePage title="Payement Accepté" />
        <img
            src="../assets/check-mark-2180770_960_720.webp"
            style="width: 100px"
        />
        <div class="shopping__cart">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Titre</th>
                        <th>Quantité</th>
                        <th>Prix</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in cartArray" v-bind:key="product._id">
                        <td><img :src="product.img" class="img__product" /></td>
                        <td>{{ product.title }}</td>
                        <td>{{ product.qty }}</td>
                        <td>{{ product.price | formatPriceDecimal | formatPrice}}</td>
                        <td>
                            {{
                                (product.qty * product.price)
                                    | formatPriceDecimal
                                    | formatPrice
                            }}
                        </td>
                    </tr>
                                        <tr>
                        <td></td>
                        <td>Livraison: Chronopost</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>{{ prcDelivery | formatPriceDecimal | formatPrice }}</td>
                        <td>{{ prcDelivery | formatPriceDecimal | formatPrice }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div v-if="cartArray">
            Prix total : {{ prcTotal+prcDelivery | formatPriceDecimal | formatPrice }}
        </div>
    </div>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";
import TitlePage from "../components/TitlePage";
import Cart from "../mixins/Cart";
import apiConfigs from "../configs/api.configs";
export default {
    components: {
        TitlePage,
    },
    data() {
        return {
            cartArray: [],
            userObject: {},
            prcTotal: 0,
            total: "",
            products: "",
            user: "",
            prcDelivery:5,
        };
    },
    mixins: [Cart],
    created() {
        const prcDelivery = 5;
        this.cartArray = this.getCart();
        this.prcTotal = this.getCartTotal(this.cartArray);
        const token = localStorage.getItem("token");
        const decodedToken = VueJwtDecode.decode(token);
        const body = {
            total: this.prcTotal+prcDelivery,
            products: this.cartArray,
            user: decodedToken.id,
        };
        console.log("body", body);
        const bodyToSend = JSON.stringify(body);
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: bodyToSend,
        };
        fetch(`${apiConfigs.apiUrl}/order`, requestOptions)
        .then((res) => res.json())
        .catch((err) => console.log(err));
    },destroyed () {
        this.clearCart()
    },
};
</script>

<style lang="scss" scoped>
.shopping__cart {
    width: 70%;
    margin: 50px auto;
}
.img__product {
    max-width: 200px;
    max-height: 200px;
}
</style>
