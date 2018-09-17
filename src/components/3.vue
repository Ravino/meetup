<template lang = "pug">

div

  h1 Потеря зрения и кисти


  div.row
    div.before
      img.before_photo(src = "./3/avatar.jpg", alt = "100% brightness")


    div.after
      img.after_photo(src = "./3/avatar.jpg", alt = "4% brightness")

</template>


<script>

export default {
  "name": "3",
};
</script>


<style scoped>

.before {
  min-width: 45%;
  max-width: 45%;
  margin-left: 2%;
  margin-right: 2%;
  margin-top: 2%;
}


.before_photo {
  min-width: 45%;
  max-width: 45%;
  margin-left: 2%;
  margin-right: 2%;
  margin-top: 2%;
  border: none;
}


.after {
  min-width: 45%;
  max-width: 45%;
  margin-left: 2%;
  margin-right: 2%;
  margin-top: 2%;
}

.after_photo {
  min-width: 45%;
  max-width: 45%;
  margin-left: 2%;
  margin-right: 2%;
  margin-top: 2%;
  border: none;
  filter: brightness(0.04);
  -webkit-filter: brightness(0.04);
}
</style>
