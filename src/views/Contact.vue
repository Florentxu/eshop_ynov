<template>
    <div>
        <TitlePage :title="myTitle"/>
        <br>
        <Bouton buttonClass="btn-black" :buttonName="myTitle"  :buttonFunction="sayHello" />
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
                myTitle:"Page Contact"

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