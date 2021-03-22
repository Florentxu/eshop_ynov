<template>
  <header class="header__main">
      <div class="header__logo">
          <img src="../assets/logo.png" alt="My App Vue" />
      </div>
    <div class="header__nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/shop">Shop</router-link> |
      <router-link to="/contact">Contact</router-link> |
      <router-link to="/cart">Panier</router-link> |
      <router-link to="/account">Account</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/signup">Sign UP</router-link> |

    </div>
  </header>
</template>

<script>
    export default {
        
    };
</script>

<style lang="scss" scoped></style>
