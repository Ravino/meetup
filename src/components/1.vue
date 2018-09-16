<template lang = "pug">

div
  h1 Intro


  div.row
    div.screenshotGithub
      img.screenshotGithub_photo(src = "./1/github.jpg", alt = "Скриншот github")


    div.contacts(role = "list")
      div(role = "listitem") github: www.github.com/Ravino
      div(role = "listitem") ВКонтакте: www.vk.com/ravino_doul
      div(role = "listitem") Телефон: +7-914-968-93-21
      div(role = "listitem") WhatsApp: +7-999-057-85-48

</template>


<script>
export default {

  "name": "1",

};
</script>


<style scoped>

.screenshotGithub_photo {
  min-width: 45%;
  max-width: 45%;
  margin-left: 2%;
  margin-right: 2%;
  margin-top: 2%;
}


.contacts {
  min-width: 45%;
  max-width: 45%;
  margin-left: 2%;
  margin-right: 2%;
  margin-top: 2%;
  text-align: justify;
}


.contacts > div {
  border: yellow;
  min-width: 45%;
  max-width: 45%;
  margin-left: 2%;
  margin-right: 2%;
  margin-top: 2%;
  text-align: justify;
}


.screenshotGithub {
  min-width: 45%;
  max-width: 45%;
  margin-left: 2%;
  margin-right: 2%;
  margin-top: 2%;
}
</style>
