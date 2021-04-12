<template>
    <header>
        <nav class="header__nav">
            <span class="header__logo">
                <img src="../assets/logo.png" class="logo" alt="My App Vue" />
            </span>
            <router-link to="/">
                <button class="menu">Shop</button>
            </router-link>

            <router-link to="/wishlist">
                <button class="menu">WishList</button>
            </router-link>

            <router-link to="/cart">
                <button class="menu">Panier</button>
            </router-link>

            <router-link to="/account">
                <button class="menu">Account</button>
            </router-link>

            <span v-show="!isLogged" :key="isLogged">
                <router-link to="/login">
                    <button class="menu">Login</button>
                </router-link>

                <router-link to="/signup">
                    <button class="menu">SignUp</button>
                </router-link>
            </span>
            <span v-show="isLogged" :key="isLogged">
                <span class="dropdown">
                    <button class="btn__admin" v-show="user.isAdmin">
                        Admin
                    </button>
                    <div class="dropdown-content">
                        <router-link to="/userCRUD">
                            <button class="admin__menu">
                                Gestion des Utilisateurs
                            </button>
                        </router-link>
                        <router-link to="/productCRUD">
                            <button class="admin__menu">
                                Gestion des Produits
                            </button>
                        </router-link>
                        <router-link to="/categoryCRUD">
                            <button class="admin__menu">
                                Gestion des Catégories
                            </button>
                        </router-link>
                        <router-link to="/orderCRUD">
                            <button class="admin__menu">
                                Gestion des Commandes
                            </button>
                        </router-link>
                    </div>
                </span>

                <!-- <router-link to="/admin">
                    <button class="menu" v-show="user.isAdmin">Admin</button>
                </router-link> -->
                <button class="menu" @click="logout">Déconnexion</button>
            </span>
        </nav>
    </header>
</template>

<script>
import Button from "../components/Button.vue";
import User from "../mixins/User";
export default {
    components: { Button },
    mixins: [User],
    
};
</script>

<style lang="scss" scoped>
.logo {
    max-width: 100px;
    max-height: 100px;
    text-align: left;
}
.menu {
    padding: 10px;
    margin: 10px;
    background: rgb(65, 184, 131);
    color: white;
    border: 1px solid rgb(65, 184, 131);
    &:hover {
        background: white;
        color: rgb(65, 184, 131);
    }
}

.btn__admin {
    padding: 10px;
    margin: 10px;
    background: rgb(65, 184, 131);
    color: white;
    border: 1px solid rgb(65, 184, 131);
    &:hover {
        background: white;
        color: rgb(65, 184, 131);
    }
}

.admin__menu {
    width: 180px;
    padding: 10px 0px 10px 0px;
    background: rgb(65, 184, 131);
    color: white;
    border: 1px solid rgb(65, 184, 131);
    &:hover {
        background: white;
        color: rgb(65, 184, 131);
    }
}

.header_nav {
}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    min-width: 180px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
}
.dropdown:hover .dropdown-content {
    display: block;
}
</style>
