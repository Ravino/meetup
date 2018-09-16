<template lang="pug">
div.page
  router-view
</template>

<script>
export default {
  "name": "index",
};
</script>


<style>

.page {
  font-family: sans-serif;
  font-size: 170%;
  color: white;
  background: black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}


.row {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}


  h1 {
    color: red;
    text-align: justify;
  }
</style>
