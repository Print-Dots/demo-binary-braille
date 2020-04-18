<template>
  <div>
    <textarea 
      autofocus
      class="container"
      placeholder="Digite alguma coisa legal :) ..." 
      title="Text area para insercão de conteudo para conversão"
      maxlength="50"
      v-model="text"/>
  </div>
</template>
<script>
import { parserToBraille, parserTextToBinBraille } from '../utils/parser'
import store from '../store/index'
export default {
  name: "Container",
  data() {
    return {
      text: '',
      newText: '',
      binaryText: ''
    }
  },

  watch: {
    text: function () {
      this.convertText()
    }
  },

  methods: {
    convertText() {
      this.newText = parserToBraille(this.text)
      this.binaryText = parserTextToBinBraille(this.text)

      store.commit('incrementText', this.newText)
      store.commit('incrementTextBinary', this.binaryText)
    }
  }

}
</script>
<style>
.container {
  width: 65%;
  height: 200px;
  border: 1px solid rgb(70, 78, 87);
  border-radius: 5px;
  margin: 10px;
  resize: none;
  font-size: 18px;
   font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 3px;
}
</style>