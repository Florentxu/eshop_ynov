<template>
    <div>
        <TitlePage title="Creer un produit" />
        <div
            class="form"
            style="border: 1px solid; background-color: grey; border-radius: 15px"
        >
            <form @submit.prevent="create">
                <div class="form__group">
                    <label for="img">Image</label><br />
                    <input type="text" name="img" v-model="img" required />
                </div>
                <div class="form__group">
                    <label for="title">Nom</label><br />
                    <input type="text" name="title" v-model="title" required />
                </div>
                <div class="form__group">
                    <label for="description">Description</label><br />
                    <textarea name="description" v-model="description" required />
                </div>
                <div class="form__group">
                    <label for="category">Categorie</label><br />
                    <select name="category" v-model="category">
                        <option v-for="category in categoryArray" v-bind:key="category._id" :value="category._id">{{ category.title}} </option>
                    </select>
                </div>
                <div class="form__group">
                    <label for="price">Prix</label><br />
                    <input type="text" name="price" v-model="price" required />
                </div>
                <div class="form__group">
                    <input type="submit" value="Créer le produit" />
                </div>
            </form>
            <p v-if="messageError">
                {{ messageError }}
            </p>
        </div>
    </div>
</template>

<script>
import apiConfigs from "../configs/api.configs";
import TitlePage from "../components/TitlePage";
import ApiCategory from "../mixins/ApiCategory";
export default {
    components: {
        TitlePage,
    },
    mixins: [ApiCategory],
    data: function() {
        return {
            img: "",
            title: "",
            category: "",
            description: "",
            price: "",
            messageError: "",
        };
    },
    methods: {
        create: function() {
            const body = {
                img: this.img,
                title: this.title,
                category: this.category,
                description: this.description,
                price: this.price,
            };
            console.log(body, "body JS");
            const bodyToSend = JSON.stringify(body);
            console.log(bodyToSend, "body stringify");
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: bodyToSend,
            };
            fetch(`${apiConfigs.apiUrl}/products`, requestOptions)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    this.$router.push("/productCRUD");
                })
                .catch((err) => console.log(err));
        },
    },
    
};
</script>

<style lang="scss" scoped></style>
