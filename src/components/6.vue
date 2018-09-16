<template lang = "pug">

div
  h1 Какие технологии использую в повседневной жизни


  div.row
    div(role = "list")
      div(role = "listitem") OS linux
      div(role = "listitem")  ScreenReader ORCA
      div(role = "listitem") Gedit
      div(role = "listitem") WaterFox
      div(role = "listitem") Audacious
      Libreoffice

</template>


<script>
export default {
  "name": "6",
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
