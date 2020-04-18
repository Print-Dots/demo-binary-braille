<template>
  <div id="app">
    <Header />
    <Container />

    <section v-if="textParsed">
      {{ textParsed }}
    </section>
    
    <Footer />
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      textParsed: ''
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
