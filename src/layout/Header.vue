<template>
    <header class="header__main">
        <div class="header__logo">
            <img src="../assets/logo.png" class="logo" alt="My App Vue" />
        </div>
        <nav class="header__nav">
            <router-link  to="/">
                <button class="menu">Home</button>
            </router-link>

            <router-link  to="/about">
                <button class="menu">About</button>
            </router-link>

            <router-link  to="/shop">
                <button class="menu">Shop</button>
            </router-link>

            <router-link  to="/wishlist">
                <button class="menu">WishList</button>
            </router-link>

            <router-link  to="/cart">
                <button class="menu">Panier</button>
            </router-link>

            <router-link  to="/account">
                <button class="menu">Account</button>
            </router-link>

            <span v-show="!isLogged">
                <router-link  to="/login">
                    <button class="menu">Login</button>
                </router-link>

                <router-link  to="/signup">
                    <button class="menu">SignUp</button>
                </router-link>
            </span>

            <router-link  to="/contact">
                <button class="menu">Contact</button>
            </router-link>

            <router-link  to="/admin">
                <button class="menu" v-show="user.isAdmin">Admin</button>
            </router-link>
			<button class="menu" :key="isLogged" @click="logout" v-show="isLogged" >Déconnexion</button>
        </nav>
    </header>
</template>

<script>
import Button from '../components/Button.vue';
import User from "../mixins/User";
export default {
  components: { Button },
    mixins: [User],
    methods: {
        hello() {
            console.log("hello")
        },
    },
};
</script>

<style lang="scss" scoped>
.logo {
    max-width: 100px;
    max-height: 100px;
}
.menu {
    padding: 10px;
	margin: 10px;
}
</style>
