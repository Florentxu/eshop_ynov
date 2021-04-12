<template>
    <div>
        <TitlePage title="Gestionnaire des utilisateurs" />
        <button class="btn btn-green" @click="create">Ajouter un utilisateurs</button>
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
                        <button class="btn btn-brown" @click="update(user._id)">
                            Modifier
                        </button></br>
                        <button class="btn btn-red" @click="remove(user._id)">
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
.user__table, td{
    margin-top: 20px;
    border-collapse: collapse ;
    border: 1px solid black;
    margin: auto;
}
.user__table th{
    padding: 20px;
    background-color: rgb(65, 184, 131);
    color: white;
    font-size: 20px;
    width: auto;
}
.user__table td{
    padding: 20px;
}
.btn {
    display: inline-block;
    border-radius: 50px;
    font-size: 15px;
    font-weight: bold;
    text-transform: uppercase;
    transition: 0.3s all;
    padding: 15px;
    margin: 15px;
}

.btn {

    &-brown {
        background: brown;
        color: white;
        border: 1px solid brown;
        &:hover {
            background: white;
            color: brown;
        }
    }
    
    &-green {
        background: rgb(65, 184, 131);
        color: white;
        border: 1px solid rgb(65, 184, 131);

        &:hover {
            background: white;
            color: rgb(65, 184, 131);
        }
    }

    &-red {
        background: red;
        color: white;
        border: 1px solid red;
        &:hover {
            background: white;
            color: red;
        }
    }
}
</style>
