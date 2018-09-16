<template lang = "pug">

div
  h1 Какие технологии использую при написании клиентской части пприложений


  div.row
    div(role = "list")
      div(role = "listitem")  NodeJS
      div(role = "listitem") WebPack
      div(role = "listitem") Vue.js
      div(role = "listitem") postcss
      div(role = "listitem") eslint
      div(role = "listitem") PUG

</template>


<script>
export default {
  "name": "8",
};
</script>


<style scoped>

.row > div {
  min-width: 95%;
  max-width: 95%;
}


.row > div > div {
  min-width: 95%;
  max-width: 95%;
  margin-left: 2%;
  margin-right: 2%;
  margin-top: 2%;
  border: yellow;
}
</style>
