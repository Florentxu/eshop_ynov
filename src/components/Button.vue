<template>
  <div>
    <button :class="buttonClass" @click="buttonFunction">
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
  border-radius: 3px;
  font-size: 18px;
  text-transform: uppercase;
  transition: 0.3s all;
}

.btn {
  &-blue {
    background: blue;
    color: white;
  }

  &-green {
    background: green;
    color: white;
  }

  &-grey {
    background: grey;
    color: black;
  }
  &-black {
    background: black;
    color: white;
    border: 1px solid black;
    &:hover {
        background:white;
        color:black;
    }
  }
  &-white {
    background: white;
    color: black;
    border: 1px solid black;
    &:hover{
        background:black;
        color:white;
    }
  }
}
</style>
