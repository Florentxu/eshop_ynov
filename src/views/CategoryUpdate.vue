<template>
    <div>
        <TitlePage title="Modifier la catégorie" />
        <div class="category__update">
            <div class="form">
                <form @submit.prevent="edit">
                    <div class="form__group">
                        <label for="title">Nom de la catégorie</label><br />
                        <input type="text" name="title" v-model="title" />
                    </div>

                    <div class="form__button">
                        <input type="submit" value="Modifier" />
                    </div>
                </form>
                <p v-if="messageError">
                    {{ messageError }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import apiConfigs from "../configs/api.configs";
import TitlePage from "../components/TitlePage";

export default {
    components: {
        TitlePage,
    },
    data: function() {
        return {
            title: "",
            messageError: "",
        };
    },
    methods: {
        edit() {
            const body = {
                title: this.title,
            };
            const category = localStorage.getItem("category");
            const bodyToSend = JSON.stringify(body);
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: bodyToSend,
            };
            fetch(
                `${apiConfigs.apiUrl}/category/update/${category}`,
                requestOptions
            )
                .then((res) => res.json())
                .then((data) => 
                    {console.log(data)
                    this.$router.push("/categoryCRUD")
                })
                .catch((err) => console.log(err));
        },
    },
    created() {
        const category = localStorage.getItem("category");
        if (category) {
            fetch(`${apiConfigs.apiUrl}/category/${category}`)
                .then((res) => res.json())
                .then((data) => {
                    this.title = data.title;
                })
                .catch((err) => console.log(err));
        }
    },
    destroyed() {
        localStorage.removeItem("category");
    },
};
</script>

<style lang="scss" scoped>
.form {
    border: 1px solid lightgrey; 
    border-radius: 15px;
    width: 40%;
    margin: auto;
    padding: 20px;
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
.form__img {
    max-width: 200px;
    max-height: 200px;
}
</style>
