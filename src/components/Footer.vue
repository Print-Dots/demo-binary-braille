<template>
  <div class="footer">
    <p>
      Desenvolvido por 
        <a href="https://github.com/ademarCardoso" 
           target="_blank"
          class="footer--link"> 
          Ademar Cardoso 
        </a>
    </p>
  </div>
</template>
<script>
export default {
  name: 'Footer'
}
</script>
<style>
.footer {
  font-size: 18px;
  font-weight: 600;
  color: black;
  bottom: 0;
}

.footer--link {
  text-decoration: none;
  text-decoration-color: black;
  color: black;
}
</style>