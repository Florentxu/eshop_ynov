<template>
    <div>
        <button :class="buttonClass" v-on:click="buttonFunction">
            {{ buttonName }}
        </button>
    </div>
</template>

<script>
export default {
    name: "Bouton",
    props: {
        buttonName: {
            type: String,
            required: true,
        },
        buttonFunction: {
            type: Function,
        },
        buttonClass: {
            type: String,
        },
    },
};
</script>

<style lang="scss" scoped>
.btn {
    display: inline-block;
    border-radius: 50px;
    font-size: 15px;
    font-weight: bold;
    text-transform: uppercase;
    transition: 0.3s all;
    padding: 15px;
    margin: 15px;
}

.btn {

    &-chocolate {
        background: chocolate;
        color: white;
        border: 1px solid chocolate;
        &:hover {
            background: white;
            color: chocolate;
        }
    }
    
    &-green {
        background: rgb(65, 184, 131);
        color: white;
        border: 1px solid rgb(65, 184, 131);

        &:hover {
            background: white;
            color: rgb(65, 184, 131);
        }
    }

    &-red {
        background: red;
        color: white;
        border: 1px solid red;
        &:hover {
            background: white;
            color: red;
        }
    }

    &-black {
        background: black;
        color: white;
        border: 1px solid black;
        &:hover {
            background: white;
            color: black;
        }
    }
    &-white {
        background: white;
        color: black;
        border: 1px solid black;
        &:hover {
            background: black;
            color: white;
        }
    }
    &-blue {
        background: blue;
        color: white;
        border: 1px solid blue;
        &:hover {
            background-color: white;
            color: blue;
        }
    }

    &-grey {
        background: darkgrey;
        color: white;
        &:hover {
            background-color: white;
            color: darkgrey;
        }
    }
}
</style>
