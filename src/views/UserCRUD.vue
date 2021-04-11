<template>
    <div>
        <TitlePage title="UserCRUD" />
        <button @click="create">Ajouter un utilisateurs</button>
        <table class="user__table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Email</th>
                    <th>Téléphone</th>
                    <th>Adresse</th>
                    <th>Admin</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in userArray" v-bind:key="user._id">
                    <td>{{ user._id }}</td>
                    <td>{{ user.lastName }}</td>
                    <td>{{ user.firstName }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.tel }}</td>
                    <td>
                        <p>{{ user.address.street }}</p>
                        <p>{{ user.address.city }}</p>
                        <p>{{ user.address.ccode }}</p>
                        <p>{{ user.address.country }}</p>
                    </td>
                    <td>{{ user.isAdmin }}</td>
                    <td>
                        <button class="btn_edit" @click="update(user._id)">
                            Modifier
                        </button>
                        <button class="btn_delete" @click="remove(user._id)">
                            Supprimer
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import apiConfigs from "../configs/api.configs";
import TitlePage from "../components/TitlePage";
import ApiUsers from "../mixins/ApiUsers";
export default {
    components: {
        TitlePage,
    },
    methods: {
        create() {
            this.$router.push("/userCreate");
        },
        update(user) {
            localStorage.setItem("user", user);
            this.$router.push("/userUpdate");
        },
        remove(id) {
        const token = localStorage.getItem("token");
        const requestOptions = {
            headers: {
                Authorization: token,
            }
        };  
            fetch(`${apiConfigs.apiUrl}/users/delete/${id}`, requestOptions)
                .then((res) => res.json())
                .catch((err) => console.log(err));
            this.$router.go();
        },
    },
    mixins: [ApiUsers],
};
</script>

<style lang="scss" scoped>
.user__table {
    margin: auto;
}
.user__table thead {
    background-color: black;
    color: white;
    font-size: 20px;
    border-color: black;
}
</style>
