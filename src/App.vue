<template>
  <div id="app">
    <Header />
    <Container />

    <section v-if="textParsedBinary && textParsedBraile" class="app__content">
      <span class="app__content--binary"> {{ textParsedBinary }} </span>
      <span class="app__content--braille"> {{ textParsedBraile }} </span>
    </section>

    <Footer />
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      textParsedBinary: 'test',
      textParsedBraile: 'teste'
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
  width: 1200px;
  margin: 0 auto;
}

.app__content {
  width: 100%;
  display: inline-grid;
}
.app__content--braille, .app__content--binary {
  width: 100%;
  flex-direction: row;
}
</style>
