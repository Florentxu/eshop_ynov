<template>
    <div>
        <TitlePage title="Modifier l'utilisateur" />
        <div
            class="form"
        >
            <form @submit.prevent="edit">
                <div class="form__group">
                    <label for="lastName">Nom de famille</label><br />
                    <input type="text" name="lastName" v-model="lastName" />
                </div>
                <div class="form__group">
                    <label for="firstName">Prénom</label><br />
                    <input type="text" name="firstName" v-model="firstName" />
                </div>
                <div class="form__group">
                    <label for="isAdmin">Status</label><br />
                    <select name="isAdmin" v-model="isAdmin">
                        <option value="false">Utilisateur</option>
                        <option value="true">Administrateur</option>
                    </select>
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
                <div class="form__button">
                    <input type="submit" value="Modifier l'utilisateur" />
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
import ApiUsers from "../mixins/ApiUsers";
import TitlePage from "../components/TitlePage";
export default {
    components: {
        TitlePage,
    },
    mixins: [ApiUsers],
    data: function() {
        return {
            firstName: "",
            lastName: "",
            tel: "",
            email: "",
            address: "",
            street: "",
            city: "",
            ccode: "",
            country: "",
            messageError: "",
            isAdmin: "",
        };
    },
    methods: {
        edit: function() {
            const body = {
                firstName: this.firstName,
                lastName: this.lastName,
                tel: this.tel,
                email: this.email,
                address: {
                    street: this.street,
                    city: this.city,
                    ccode: this.ccode,
                    country: this.country,
                },
                isAdmin: this.isAdmin,
            };
            const token = localStorage.getItem("token");
            const user = localStorage.getItem("user");
            const bodyToSend = JSON.stringify(body);
            const requestOptions = {
                method: "POST",
                headers: {
                    Authorization: token,
                    "Content-Type": "application/json",
                },
                body: bodyToSend,
            };
            fetch(`${apiConfigs.apiUrl}/users/adminUpdate/${user} `, requestOptions)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    this.$router.push("/userCRUD");
                })
                .catch((err) => console.log(err));
        },
    },
    created() {
        const token = localStorage.getItem("token");
        const user = localStorage.getItem("user");
        if (user) {
            const requestOptions = {
                headers: {
                    Authorization: token,
                },
            };
            fetch(`${apiConfigs.apiUrl}/users/${user}`, requestOptions)
                .then((res) => res.json())
                .then((data) => {
                    this.firstName = data.firstName;
                    this.lastName = data.lastName;
                    this.tel = data.tel;
                    this.email = data.email;
                    this.street = data.address.street;
                    this.city = data.address.city;
                    this.ccode = data.address.ccode;
                    this.country = data.address.country;
                    this.isAdmin = data.isAdmin;
                })
                .catch((err) => console.log(err));
                
        }
    },
    destroyed() {
        localStorage.removeItem("user");
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
</style>
