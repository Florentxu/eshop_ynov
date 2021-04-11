<template>
    <div>
        <TitlePage v-if="user.isAdmin" title="Bienvenue administrateur " />
        <router-link to="/userCRUD">
            <button class="menu">Gestion des Utilisateurs </button>
        </router-link>

        <router-link to="/productCRUD">
            <button class="menu">Gestion des Produits </button>
        </router-link>

        <router-link to="/categoryCRUD">
            <button class="menu">Gestion des Catégories </button>
        </router-link>

        <router-link to="/orderCRUD">
            <button class="menu">Gestion des Commandes </button>
        </router-link>
    </div>
</template>

<script>
import TitlePage from "../components/TitlePage";
import User from "../mixins/User";
export default {
    components: { TitlePage },
    mixins: [User],
};
</script>

<style lang="scss" scoped></style>
