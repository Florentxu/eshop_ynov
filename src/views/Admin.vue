<template>
    <div>
    <div v-if="user.isAdmin">
        <TitlePage title="Bienvenue administrateur " />
        <router-link to="/userCRUD">
            <button class="menu">Gestion des Utilisateurs</button>
        </router-link>
        </br>
        <router-link to="/productCRUD">
            <button class="menu">Gestion des Produits</button>
        </router-link>
        </br>
        <router-link to="/categoryCRUD">
            <button class="menu">Gestion des Catégories</button>
        </router-link>
        </br>
        <router-link to="/orderCRUD">
            <button class="menu">Gestion des Commandes</button>
        </router-link>
    </div>
    <div v-else>
        <TitlePage title="Vous n'etes pas censé être ici"/>
    </div>
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

<style lang="scss" scoped>
.menu {
    display: inline-block;
    border-radius: 50px;
    font-size: 15px;
    font-weight: bold;
    text-transform: uppercase;
    transition: 0.3s all;
    padding: 15px;
    margin: 15px;
    background: rgb(65, 184, 131);
    color: white;
    border: 1px solid rgb(65, 184, 131);
    &:hover {
        background: white;
        color: rgb(65, 184, 131);
    }
}
</style>
