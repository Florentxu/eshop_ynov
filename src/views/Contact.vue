<template>
    <div>
        <TitlePage title="Page Contact"/>
        <br>
        <Bouton buttonClass="btn-black" buttonName="Page Contact"  :buttonFunction="sayHello" />
    </div>
</template>

<script>
    import TitlePage from "../components/TitlePage";
    import Bouton from "../components/Button";
    export default {
        name:"Contact",
        components: {
            TitlePage,
            Bouton
        },
        data: function(){
            return{
            }
        },
        methods: {
            sayHello: function(){
                alert('Hello')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>