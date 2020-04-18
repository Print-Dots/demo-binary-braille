<template>
  <div id="app">
    <Header />
    <Container />

    <section class="app__content">
      <p class="app__content__label">Texto em Braille Binario</p>
      <p class="app__content--binary"> {{ textParsedBinary }} </p>

      <p class="app__content__label">Testo em Braille</p>
      <p class="app__content--braille"> {{ textParsedBraille }} </p>
    </section>

    <Footer />
  </div>
</template>

<script>
import store from './store/index'
export default {
  store,
  name: 'App',

  computed: {
    textParsedBraille() {
      return store.state.parsedText || ''
    },

    textParsedBinary() {
      return store.state.parsedTextBinary || ''
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
  height: 100%;
}

.app__content {
  width: 100%;
  display: inline-grid;
}
.app__content--braille, .app__content--binary {
  width: 100%;
  height: auto;
  text-align: center;
  flex-direction: row;
  font-weight: bold;
  font-size: 20px;
}

.app__content--braille {
  margin: 15px 0 20px 0;
  font-size: 35px;
}

.app__content__label {
  text-align: center;
  margin: 0;
  font-size: 25px;
  font-weight: 800;
}
</style>
