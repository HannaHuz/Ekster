<template>
  <section class="process">
    <div class="container">
      <div class="process-row">
        <div class="process-left">
          <h3 class="process-subtitle">That's why we created Ekster</h3>
          <h2 class="process-title">Your Wallet Should Be Easy To Use, Show You Have Style, and Never Get Lost</h2>
        </div>
        <ul class="process-right">
          <li v-for="post in posts">
            <img class="process-icon" :src="post.img">
            {{post.content}}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    data(){
      return {
        posts: [
          {
            img: require('@/assets/img/icons/wallet.png'),
            content: 'It fits in your front pocket with no "bulge"'
          },
          {
            img: require('@/assets/img/icons/knife.png'),
            content: 'Switchblade" card release that will catch the attention of the girl at the cash register every time'
          },
          {
            img: require('@/assets/img/icons/solar.png'),
            content: 'Solar powered tracking card so you can find it anywhere in the world'
          }
        ]
      }
    }
  }
</script>
<style lang="scss" scoped>
.process {
  padding: 50px 0;
  @media(min-width: 768px) {
    padding: 100px 0;
  }
  @media(min-width: 992px) {
    padding: 150px 0;
  }
  &-row {
    display: flex;
    flex-direction: column;
    @media (min-width:1200px) {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
  &-left {
    margin: 0 auto;
    @media (min-width: 1200px) {
      flex: 1 325px;
      max-width: 325px;
    }
  }
  &-right {
    list-style: none;
    padding: 0;
    @media (min-width: 768px) {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 15px 0;
    }
    li {
      padding: 0 15px;
      position: relative;
      font-weight: 300;
      font-size: 20px;
      line-height: 1.2;
      text-align: center;
      color: $grey;
      @media (min-width: 768px) {
        padding: 0 30px;
        flex: 1 33.333%;
        max-width: 33.333%;
        &:not(:first-child) {
          &:before {
            content: "";
            height: 50px;
            width: 1px;
            background: $grey;
            position: absolute;
            left: 0;
            top: 48%;
            transform: translate(0, -50%);
          }
        }
      }
    }
  }
  &-title {
    font-size: 38px;
    font-weight: 500;
    line-height: 1.2;
    text-align: center;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: $grey;
    margin: 0;
  }
  &-subtitle {
    font-weight: 500;
    font-size: 18px;
    line-height: 1.2;
    text-align: center;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: $grey;
    margin: 0;
  }
  &-icon {
    margin: 30px auto 30px;
    display: block;
  }
}
</style>
