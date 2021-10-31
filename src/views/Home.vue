<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Hola mundo</h1>
    <button class="btn btn-primary" @click="goToDayBook()">Hola</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  methods: {
    goToDayBook(){
      this.$router.push({name: 'no-entry'})
    }
  }
}
</script>
