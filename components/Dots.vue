<template>
  <div class="dots">
    <div class="dots-item" @click="dotClick" v-for="item in items" :style="`background-color: ${item}`"></div>
  </div>
</template>
<script>
export default {
  props: ['items'],
  methods: {
    dotClick(e) {
      const dots = document.querySelectorAll('.dots-item');
      dots.forEach(dot => dot.classList.remove('dots-active'))
      e.target.classList.add('dots-active')
    }
  }
}
</script>
<style lang="scss" scoped>
.dots {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0 45px;
  &-item {
    border-radius: 50%;
    margin: 0 4px;
    width: 18px;
    height: 18px;
    position: relative;
    @media(min-width: 1200px) {
      width: 25px;
      height: 25px;
    }
    &:before {
      position: absolute;
      content: "";
      width: 18px;
      height: 18px;
      border: 3px solid #fff;
      background: transparent;
      opacity: 0;
      transition: opacity .3 ease;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      @media(min-width: 1200px) {
        width: 20px;
        height: 20px;
      }
    }
    &:hover {
      cursor: pointer;
      &:before {
        opacity: 1;
      }
    }
  }
  &-active {
    &:before {
      opacity: 1;
    }
  }
}
.bestsellers {
  .dots {
    flex-wrap: wrap;
    &-item {
      width: 15px;
      height: 15px;
      margin-top: 5px;
      &:before {
        display: none;
      }
    }
  }
}
</style>
