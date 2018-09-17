<template lang = "pug">

div
  h1 Как я стал специализироваться в области доступных интерфейсов


  div.row
    div.screenshot1
      img.screenshot1_photo(alt = "screenshot1")


    div.screenshot2
      img.screenshot2_photo(alt = "Screenshot2")

</template>


<script>
export default {
  "name": "11",
};
</script>



<style scoped>

.screenshot1 {
  min-width: 45%;
  max-width: 45%;
  margin-left: 2%;
  margin-right: 2%;
  margin-top: 2%;
}


.screenshot1_photo {
  min-width: 45%;
  max-width: 45%;
  margin-left: 2%;
  margin-right: 2%;
  margin-top: 2%;
  border: none;
}


.screenshot2 {
  min-width: 45%;
  max-width: 45%;
  margin-left: 2%;
  margin-right: 2%;
  margin-top: 2%;
}

.screenshot2_photo {
  min-width: 45%;
  max-width: 45%;
  margin-left: 2%;
  margin-right: 2%;
  margin-top: 2%;
  border: none;
}
</style>
