<template>
    <div class="login__form">
    <TitlePage title="Login" />
    <div class="form">    
        <form @submit.prevent="login">
    
        <div class="form__group">
            <label for="email">email</label><br>
            <input type="email" name="email" v-model="email"/>
        </div>
        <div class="form__group">
            <label for="password">password</label><br>
            <input type="password" name="password" v-model="password"/>
        </div>
        <div class="form__button">
            <input type="submit" value="Connexion" >
        </div>
    </form>
    <p v-if="messageError">
        {{ messageError}}
    </p>
    </div>
    </div>

</template>

<script>
    import TitlePage from "../components/TitlePage";
    import apiConfigs from "../configs/api.configs";
    export default {
        components: {
            TitlePage
        },
        data: function () {
            return{
                email:"",
                password:"",
                messageError:""
            }
        },
        methods: {
            login: function () {
                // console.log(this.email, this.password);
                // return fetch("https://my-first-api-ynov.herokuapp.com/api/v1/users")
                // .then((res) => res.json)

                const body = {
                    email:this.email, 
                    password:this.password
                };
                console.log(body, "body JS");
                const bodyToSend = JSON.stringify(body);
                console.log(bodyToSend, "body stringify");
                const requestOptions = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: bodyToSend
                }
                fetch(`${apiConfigs.apiUrl}/users/login`, requestOptions)
                .then(res => res.json())
                .then((data) => {
                    if (!data.auth){
                        this.messageError = data.message;
                    }else{
                        let token = data.token;
                        localStorage.setItem('token',token);
                        this.$router.push('/account');
                    }
                })
                .catch((err) => console.log(err))
                // if (auth = true) {
                    // localStorage.setItem(this.data.token)
                // }
                // 

            }   
        },
    }


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