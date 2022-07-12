<template>
  <section class="bestsellers">
    <div class="container">
      <div class="bestsellers-row">
        <div class="bestsellers-left">
          <h3 class="bestsellers-subtitle">Shop our</h3>
          <h2 class="bestsellers-title">Bestsellers</h2>
          <p class="bestsellers-text">Slim trackable wallets and accessories that save you time.</p>
          <a class="bestsellers-btn" href="https://ekster.com/pages/ekster-all-collections?utm_source=facebook&utm_medium=structured.social&nbt=nb%3Afb%3A%7B%7Bsite_source_name%7D" target="_blank">
            Shop All
          </a>
        </div>
        <div class="bestsellers-right">
          <div class="bestsellers-block" v-for="(item,index) in wallets">
            <img :src="item.img">
            <Dots v-if="index === 0" :items="['#572E27', '#3F4146', '#C99266','#5D5C57','#824340','#586173']"/>
            <Dots v-if="index === 1" :items="[ '#676767', '#4E5341','#586173','#824340','#AAA8A1','#9CAFBA','#E3E6E5']"/>
            <Dots v-if="index === 2":items="['#AD704E', '#663A32', '#191919']"/>
            <h6>{{item.subtitle}}</h6>
            <h4>{{item.title}}</h4>
            <div class="bestsellers-price">
              <div class="bestsellers-price__new">{{item.newPrice}}</div>
              <div class="bestsellers-price__old">{{item.oldPrice}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  export default{
    data(){
      return {
        wallets:[
          {
            img: require('@/assets/img/bestsellers-1.png'),
            subtitle: '',
            title:'PARLIAMENT WALLET',
            oldPrice:'$89',
            newPrice:'$62'
          },
          {
            img: require('@/assets/img/bestsellers-2.png'),
            subtitle: 'New release',
            title:'ALUMINUM CARDHOLDER',
            oldPrice:'$79',
            newPrice:'$55'
          },
          {
            img: require('@/assets/img/bestsellers-3.png'),
            subtitle: 'Limited Edition',
            title:'FORTUNA PARLIAMENT',
            oldPrice:'$189',
            newPrice:'$132'
          }
        ]
      }
    }
  }
</script>
<style lang="scss" scoped>
.bestsellers {
  padding: 50px 0;
  background: $light-grey;
  @media(min-width: 768px) {
    padding: 100px 0;
  }
  @media(min-width: 992px) {
    padding: 150px 0;
  }
  &-row {
    display: flex;
    flex-direction: column;
    @media (min-width: 1200px) {
      flex-direction: row;
      justify-content: space-between;
    }
  }
  &-left {
    margin-bottom: 50px;
    @media (min-width: 1200px) {
      margin-bottom: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-right: 45px;
    }
  }
  &-right {
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
      flex-direction: row;
      flex-wrap: nowrap;
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
  &-text {
    font-size: 16px;
    font-weight: 300;
    line-height: 1.2;
    text-align: center;
    color: $grey;
    padding: 0 50px;
    margin-top: 0;
    margin: 20px 0;
    @media(min-width:1200px){
      margin: 50px 0;
    }
  }
  &-btn {
    background: $light-grey;
    border: 1px solid $grey;
    height: 32px;
    width: 144px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    font-weight: 500;
    font-size: 15px;
    line-height: 1.1;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: $grey;
    transition: 0.5s ease;
    position: relative;
    overflow: hidden;
    &:before {
      content: '';
      position: absolute;
      display: block;
      top: 0;
      left: -50px;
      width: 70%;
      height: 100%;
      background: linear-gradient(90deg, transparent, #ffffff71, transparent);
      transition: 0.5s ease;
      transform: translate(-100%, 0) skew(-20deg);
    }
    &:hover {
      background: rgb(227 230 229);
    }
    &:hover::before {
      transform: translate(200%,0) skew(-20deg);
    }
  }
  &-block {
    padding: 30px 30px 100px;
    margin-bottom: 15px;
    border: 1px solid $grey;
    background: $white;
    text-align: center;
    align-items: center;
    position: relative;
    @media (min-width: 768px) {
      flex-basis: 35%;
      max-width: 35%;
      margin-bottom: 0;
      margin-right:30px;
    }
    @media (min-width: 992px) {
      width: 240px;
    }
    &:last-child {
      margin: 0;
    }
    &:first-child h4 {
      padding: 10px 0 0;
    }
    img {
      margin-bottom: 30px;
    }
    h4 {
      font-weight: 500;
      font-size: 25px;
      line-height: 1.2;
      text-align: center;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      color: $grey;
      margin: 0;
    }
    h6 {
      font-weight: 300;
      font-size: 12px;
      line-height: 1.1;
      text-align: center;
      letter-spacing: 0.07em;
      text-transform: uppercase;
      margin: 0;
    }
  }
  &-price {
    display: flex;
    justify-content: center;
    padding: 30px 30px 0;
    position: absolute;
    bottom: 50px;
    width: 100%;
    left: 0;
    &__new {
      font-size: 20px;
      line-height: 1.1;
      text-align: center;
      letter-spacing: 0.03em;
      text-transform: uppercase;
    }
    &__old {
      text-decoration: line-through;
      color: $grey;
      font-size: 10px;
      line-height: 1.1;
    }
  }
}
</style>
