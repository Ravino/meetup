<template lang = "pug">

div
  h1 Как я стал программистом


  div.row
    div(role = "list")
      div(role = "listitem") printf ("Программист?")
      div(role = "listitem") System. out. println ("Я программист?");
      div(role = "listitem") console. log ("Программист.");
      div(role = "listitem") print ("Да! Я программист!");

</template>


<script>
export default {
  "name": "4",
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
