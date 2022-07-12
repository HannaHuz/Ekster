<template>
  <section class="title">
    <div class="title-container">
      <h2 v-html="title"></h2>
      <h4 v-html="subtitle"></h4>
      <svg class="title-arrow" width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 1.5L12 11.5L2 1.5" stroke="#C4C4C4" stroke-width="3" stroke-linecap="round"/></svg>
    </div>
  </section>
</template>
<script>
export default {
  props: ['title', 'subtitle'],
  methods: {

  }
}
</script>
<style lang="scss" scoped>
.title {
  padding: 50px 0;
  &-container {
    margin: 0 auto;
    width: 1200px;
    padding: 0 10px;
    max-width: 100%;
  }
  h2 {
    font-weight: 600;
    font-size: 30px;
    line-height: 1.3;
    text-align: center;
    margin: 0 0 40px;
    color: $black;
    @media(min-width: 768px) {
      font-size: 56px;
      line-height: 1.4;
      margin: 0 0 50px;
    }
    span {
      text-decoration: line-through;
    }
  }
  h4 {
    font-weight: 400;
    font-size: 20px;
    line-height: 1.2;
    text-align: center;
    margin: 0 auto;
    color: $black;
    @media(min-width: 768px) {
      font-size: 36px;
      line-height: 1.4;
    }
    span {
      font-style: italic;
    }
  }
  &-arrow {
    text-align: center;
    width: 40px;
    height: 40px;
    display: block;
    margin: 0 auto;
    margin-top: 40px;
    animation: arrow 2s ease infinite;
  }
}
@keyframes arrow {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(10px);
  }
}
</style>
