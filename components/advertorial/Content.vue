<template>
  <section class="content">
    <div class="container">
      <div class="content-row" v-for="post in posts">
        <div class="content-text">
          <h3>{{ post.title }}</h3>
          <p>{{ post.text }}</p>
        </div>
        <div class="content-img">
          <img :src="post.img">
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ['posts']
}
</script>
<style lang="scss" scoped>
.content {
  position: relative;
  font-size: 0;
  @media(min-width: 768px) {
    &:after, &:before {
      position: absolute;
      content: "";
      height: 1px;
      width: 100%;
      background: $silver;
      left: 0;
    }
  }
  &:after {
    bottom: 0;
  }
  &:before {
    top: 0;
  }
  &-row {
    @media(min-width: 768px) {
      &:nth-child(even) .content-text {
        order: 2;
      }
      display: flex;
      font-size: 0;
    }
  }
  &-text {
    @media (min-width: 768px) {
      padding: 0 50px;
      flex: 1 50%;
      max-width: 50%;
    }
    h3 {
      font-weight: 600;
      font-style: normal;
      font-size: 26px;
      line-height: 1.3;
      text-decoration: underline;
      @media (min-width: 768px) {
        font-size: 27px;
      }
    }
    p {
      font-weight: 400;
      font-style: normal;
      font-size: 17px;
      line-height: 1.3;
      text-align: justify;
      color: $black;
      @media (min-width: 768px) {
        font-size: 20px;
      }
    }
  }
  &-img {
    text-align: center;
    @media (min-width: 768px) {
      flex: 1 50%;
      max-width: 50%;
    }
  }
}
</style>
