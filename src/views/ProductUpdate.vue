<template>
    <div>
        <TitlePage title="Modifier le produit" />
        <div class="product__update">
            <div class="form">
                <form @submit="edit">
                    <img class="form__img" :src="img" />
                    <div class="form__group">
                        <label for="img">Image</label><br />
                        <input type="text" name="img" v-model="img" />
                    </div>
                    <div class="form__group">
                        <label for="title">Nom du produit</label><br />
                        <input type="text" name="title" v-model="title" />
                    </div>
                    <div class="form__group">
                        <label for="description">Description</label><br />
                        <input type="text" name="description" v-model="description" />
                    </div>
                    <div class="form__group">
                        <label for="category">Categorie</label><br />
                        <select name="category" v-model="category">
                            <option
                                v-for="category in categoryArray"
                                v-bind:key="category._id"
                                :value="category._id"
                                >{{ category.title }}
                            </option>
                        </select>
                    </div>
                    <div class="form__group">
                        <label for="price">Prix</label><br />
                        <input type="text" name="price" v-model="price" />
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
import ApiProducts from "../mixins/ApiProducts";
import ApiCategory from "../mixins/ApiCategory";
import TitlePage from "../components/TitlePage";
import Bouton from "../components/Button";

export default {
    components: {
        TitlePage,
        Bouton,
    },
    mixins: [ApiProducts, ApiCategory],
    data: function() {
        return {
            title: "",
            description: "",
            price: "",
            category:"",
            img: "",
            messageError: "",
        };
    },
    methods: {
        edit() {
            const body = {
                title: this.title,
                description: this.description,
                category: this.category,
                price: this.price,
                img: this.img,
            };
            const product = localStorage.getItem("product");
            const bodyToSend = JSON.stringify(body);
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: bodyToSend,
            };
            fetch(
                `${apiConfigs.apiUrl}/products/update/${product}`,
                requestOptions
            )
                .then((res) => res.json())
                .then((data) => console.log(data))
                .catch((err) => console.log(err));
                this.$router.push("/productCRUD");
        },
    },
    created() {
        const product = localStorage.getItem("product");
        if (product) {
            fetch(`${apiConfigs.apiUrl}/products/${product}`)
                .then((res) => res.json())
                .then((data) => {
                    this.title = data.title;
                    this.description = data.description;
                    this.price = data.price;
                    this.img = data.img;
                    this.category = data.category;
                })
                .catch((err) => console.log(err));
        }
    },
    destroyed() {
        localStorage.removeItem("product");
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
.form__group input,select{
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
