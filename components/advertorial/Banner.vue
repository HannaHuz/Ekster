<template>
  <section class="banner" :style="`background-image: url(${img});`"></section>
</template>
<script>
export default {
  props: ['img']
}
</script>
<style lang="scss" scoped>
.banner {
  background-color: #000;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  min-height: 300px;
  @media(min-width: 768px){
    min-height: 514px;
  }
}
</style>
