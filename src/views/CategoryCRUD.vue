<template>
    <div>
        <TitlePage title="CategoryCRUD" />
        <div class="form">
            <form @submit.prevent="create">
                <div class="form__group">
                    <label for="title">Titre</label><br />
                    <input type="text" name="title" v-model="title" required />
                </div>
                <div class="form__group">
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
                        <button class="btn_edit" @click="update(category._id)">
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
.category__table {
    margin: auto;
}
.category__table thead {
    background-color: black;
    color: white;
    font-size: 20px;
    border-color: black;
}
.form {
    border: 1px solid;
    background-color: grey;
    border-radius: 15px;
    width: 20rem;
    margin: auto;
    margin-bottom: 20px;
    color: white;
}
</style>
