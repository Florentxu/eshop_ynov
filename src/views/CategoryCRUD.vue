<template>
    <div>
        <TitlePage title="Gestionnaire des catégories" />
        <div class="form">
            <form @submit.prevent="create">
                <div class="form__group">
                    <label for="title">Titre</label><br />
                    <input type="text" name="title" v-model="title" required />
                </div>
                <div class="form__button">
                    <input type="submit" value="Ajouter la categorie" />
                </div>
            </form>
            <p v-if="messageError">
                {{ messageError }}
            </p>
        </div>
        <table class="category__table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Titre</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="category in categoryArray" v-bind:key="category._id">
                    <td>{{ category._id }}</td>
                    <td>{{ category.title }}</td>
                    <td>
                        <button class="btn btn-brown" @click="update(category._id)">
                            Modifier
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import TitlePage from "../components/TitlePage";
import apiConfigs from "../configs/api.configs";
import apiCategory from "../mixins/ApiCategory";
export default {
    components: {
        TitlePage,
    },
    data() {
        return {
            title: "",
        };
    },
    mixins: [apiCategory],
    methods: {
        update(category) {
            localStorage.setItem("category", category);
            this.$router.push("/categoryUpdate");
        },
        create() {
            const body = {
                title: this.title,
            };
            const bodyToSend = JSON.stringify(body);
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: bodyToSend,
            };
            fetch(`${apiConfigs.apiUrl}/category`, requestOptions)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    this.$router.go();
                })
                .catch((err) => console.log(err));
        },
    },
};
</script>

<style lang="scss" scoped>
.category__table, td{
    margin-top: 20px;
    border-collapse: collapse ;
    border: 1px solid black;
    margin: auto;
}
.category__table th{
    padding: 20px;
    background-color: rgb(65, 184, 131);
    color: white;
    font-size: 20px;
    width: auto;
}
.category__table td{
    padding: 20px;
}
.form {
    border: 1px solid lightgrey; 
    border-radius: 15px;
    width: 40%;
    margin: auto;
    padding: 20px;
    margin-bottom: 10px;
}

.form__group{
    margin-bottom: 10px;
}
.form__group label{
    font-size: bold;
}
.form__group input{
    width:40%;
}
.form__button input{
    background: blue;
    border: none;
    border-radius: 10px ;
    color: white;
    font-size: 20px;
    padding: 10px 20px 10px 20px;
    margin-top: 10px;
}
.form__button input:hover{
    background: steelblue;
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
}
</style>
