<template>
    <div>
        <TitlePage title="S'inscrire" />
        <div class="form">
            <form @submit.prevent="signup">
                <div class="form__group">
                    <label for="lastName">Nom de famille</label><br />
                    <input type="text" name="lastName" v-model="lastName" />
                </div>
                <div class="form__group">
                    <label for="firstName">Prénom</label><br />
                    <input type="text" name="firstName" v-model="firstName" />
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
                <div class="form__group">
                    <label for="email">Email</label><br />
                    <input type="email" name="email" v-model="email" />
                </div>
                <div class="form__group">
                    <label for="password">Mot de passe</label><br />
                    <input type="password" name="password" v-model="password" />
                </div>

                <div class="form__button">
                    <input type="submit" value="S'inscrire" />
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

export default {
    components: {
        TitlePage,
    },
    data: function() {
        return {
            firstName: "",
            lastName: "",
            tel: "",
            email: "",
            password: "",
            address: "",
            street: "",
            city: "",
            ccode: "",
            country: "",
            messageError: "",
        };
    },
    methods: {
        signup: function() {
            const body = {
                firstName: this.firstName,
                lastName: this.lastName,
                tel: this.tel,
                email: this.email,
                password: this.password,
                address: {
                    street: this.street,
                    city: this.city,
                    ccode: this.ccode,
                    country: this.country,
                },
            };
            console.log(body, "body JS");
            const bodyToSend = JSON.stringify(body);
            console.log(bodyToSend, "body stringify");
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: bodyToSend,
            };
            fetch(`${apiConfigs.apiUrl}/users`, requestOptions)
                .then((res) => res.json())
                .then((data) => {
                    if (!data.auth) {
                        this.messageError = data.message;
                    } else {
                        let token = data.token;
                        localStorage.setItem("token", token);
                        this.$router.push("/account");
                    }
                })
                .catch((err) => console.log(err));
        },
    },
    beforeDestroy () {
        // permet de rafraichir la page pour modifer le header
        this.$router.go(0);
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
