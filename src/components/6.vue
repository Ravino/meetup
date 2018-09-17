<template lang = "pug">

div
  h1 Какие технологии использую в повседневной жизни


  div.row
    ul(role = "list")
      li(role = "listitem") OS linux
      li(role = "listitem") ScreenReader ORCA
      li(role = "listitem") Gedit
      li(role = "listitem") WaterFox
      li(role = "listitem") Audacious
      li(role = "listitem") Libreoffice

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
