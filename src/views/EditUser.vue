<template>
    <div>
        <TitlePage title="Modifier l'utilisateur" />
        <div class="user__info" v-if="user">
            <div
                class="form"
            >
                <form @submit="edit">
                    <div class="form__group">
                        <label for="lastName">Nom de famille</label><br />
                        <input type="text" name="lastName" v-model="lastName" />
                    </div>
                    <div class="form__group">
                        <label for="firstName">Prénom</label><br />
                        <input
                            type="text"
                            name="firstName"
                            v-model="firstName"
                        />
                    </div>
                    <div class="form__group">
                        <label for="tel">Téléphone</label><br />
                        <input type="text" name="tel" v-model="tel" />
                    </div>
                    <div class="form__group">
                        <label for="street">Rue</label><br />
                        <input type="text" name="street" v-model="street" />
                    </div>
                    <div class="form__group">
                        <label for="ccode">Code Postal</label><br />
                        <input type="text" name="ccode" v-model="ccode" />
                    </div>
                    <div class="form__group">
                        <label for="city">Ville</label><br />
                        <input type="text" name="city" v-model="city" />
                    </div>
                    <div class="form__group">
                        <label for="country">Pays</label><br />
                        <input type="text" name="country" v-model="country" />
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
import VueJwtDecode from "vue-jwt-decode";
import apiConfigs from "../configs/api.configs";
import User from "../mixins/User";
import TitlePage from "../components/TitlePage";
import Bouton from "../components/Button";
export default {
    components: {
        TitlePage,
        Bouton,
    },
    mixins: [User],
    data: function() {
        return {
            firstName: "",
            lastName: "",
            tel: "",
            street: "",
            city: "",
            ccode: "",
            country: "",
            messageError: "",
        };
    },
    methods: {
        edit() {
            const body = {
                firstName: this.firstName,
                lastName: this.lastName,
                tel: this.tel,
                address: {
                    street: this.street,
                    city: this.city,
                    ccode: this.ccode,
                    country: this.country,
                },
            };
            const token = localStorage.getItem("token");
            const decodedToken = VueJwtDecode.decode(token);
            console.log(body, "body JS");
            const bodyToSend = JSON.stringify(body);
            console.log(bodyToSend, "body stringify");
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: bodyToSend,
            };
            fetch(
                `${apiConfigs.apiUrl}/users/update/${decodedToken.id}`,
                requestOptions
            )
                .then((res) => res.json())
                .catch((err) => console.log(err));
                this.$router.push("/account");
        },
    },
    created() {
        const token = localStorage.getItem("token");
        if (token) {
            const decodedToken = VueJwtDecode.decode(token);
            fetch(`${apiConfigs.apiUrl}/users/${decodedToken.id}`, {
                headers: {
                    Authorization: token,
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    this.lastName = data.lastName;
                    this.firstName = data.firstName;
                    this.tel = data.tel;
                    this.street = data.address.street;
                    this.city = data.address.city;
                    this.ccode = data.address.ccode;
                    this.country = data.address.country;
                })
                .catch((err) => console.log(err));
        }
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
</style>
