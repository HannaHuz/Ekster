<template>
  <section class="testimonials">
    <div class="container">
      <h3 class="testimonials-title">Favorite little wallet!</h3>
      <h2 class="testimonials-subtitle">Amazon Testimonials</h2>
      <div class="testimonials-row">
        <div class="testimonials-left">
          <div class="items">
            <img class="item-zero" src="@/assets/img/testimonials/test-001.jpg">
            <img class="item-first" id="itemFirst"  src="@/assets/img/testimonials/test-001.jpg">
            <img class="item-second" id="itemSecond" src="@/assets/img/testimonials/test-002.jpg">
            <img class="item-third" id="itemThird"  src="@/assets/img/testimonials/test-003.jpg">
            <img class="item-fourth" id="itemFourth" src="@/assets/img/testimonials/test-004.jpg">
            <img class="item-fifth" id="itemFifth"  src="@/assets/img/testimonials/test-005.jpg">
          </div>
        </div>
        <div class="testimonials-right">
          <div class="testimonials-right--box">
            <h4 v-html="items[index].title"></h4>
            <p v-html="items[index].text"></p>
            <Stars/>
            <div class="testimonials-author"><b v-html="items[index].name"></b></div>
            <div class="testimonials-date" v-html="items[index].date"></div>
          </div>
          <div class="testimonials-btn">
            <button @click="indexChange('prev')" ><img src="@/assets/img/icons/arrow-left.png"></button>
            <button @click="indexChange('next')" ><img src="@/assets/img/icons/arrow-right.png"></button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data(){
    return {
      index: 0,
      items: [
        {
          img: require('@/assets/img/testimonials/test-001.jpg'),
          title: 'FAVORITE LITTLE WALLET!',
          text: 'Got this wallet as a gift for my husband. It’s his favorite wallet because of its size and its appeal. It’s slim enough to put in any pocket and looks very classy. The sliding card part functions very well. I also got the tracking device which works incredibly well, great app.',
          name: 'BY CHANTAL VISMANS',
          date: 'JULY 18, 2019'
        },
        {
          img: require('@/assets/img/testimonials/test-002.jpg'),
          title: 'Great wallet',
          text: `Greate wallet, I have this and use to have a secrid. I didn't have that many cards so I gave someone my secrid, I needed something smaller. This wallet is premium leather, great feel and very convenient. Also durable.`,
          name: 'BY Josh',
          date: 'September 29, 2020'
        },
        {
          img: require('@/assets/img/testimonials/test-003.jpg'),
          title: 'Should have bought this a long time ago',
          text: `Love it, so far I don't have any complaints. I Got this because obviously it's a lot thinner and lighter than my previous coach wallet, it even feels like im not carrying a wallet. I Got tired of going through my wallet to grab my cards, all while getting stuck on the holders. With this one, BAM!, Cards come out smoothly and easy to pull out and put back in. it even feels really cool doing it too. Also with a traditional wallet, my cards get bent, worn out, and damaged, while with this one it keeps them straight and well protected.`,
          name: 'BY Juan L.',
          date: 'April 8, 2021'
        },
        {
          img: require('@/assets/img/testimonials/test-004.jpg'),
          title: 'Great wallet',
          text: `Was looking for a new wallet so I decided to get this one. And I'm loving it.`,
          name: 'BY Taylor',
          date: 'June 5, 2021'
        },
        {
          img: require('@/assets/img/testimonials/test-005.jpg'),
          title: 'Amazing!',
          text: 'I love this product! The material and the elegance of design is awesome. I recommend this product!',
          name: 'BY Prime$',
          date: 'January 6, 2021'
        }
      ]
    }
  },
  methods: {
    indexChange(point){
      const
        itemFirstClass = document.querySelector('.item-first'),
        itemFifthClass = document.querySelector('.item-fifth'),
        itemFirst = document.getElementById('itemFirst'),
        itemSecond = document.getElementById('itemSecond'),
        itemThird = document.getElementById('itemThird'),
        itemFourth = document.getElementById('itemFourth'),
        itemFifth = document.getElementById('itemFifth')

      if(point === 'prev') {
        if(this.index === 0){
          this.index = 4;
        } else {
          this.index = this.index - 1;
        }
        itemFifthClass.classList = 'item-anim'
      }
      if(point === 'next') {
        if(this.index === 4){
          this.index = 0;
        } else {
          this.index = this.index + 1;
        }
        itemFirstClass.classList = 'item-anim'
      }


      setTimeout(()=>{
        if(this.index === 0){
          itemFirst.classList =  'item-first'
          itemSecond.classList = 'item-second'
          itemThird.classList =  'item-third'
          itemFourth.classList = 'item-fourth'
          itemFifth.classList =  'item-fifth'
        } else if(this.index === 1){
          itemSecond.classList = 'item-first'
          itemThird.classList = 'item-second'
          itemFourth.classList = 'item-third'
          itemFifth.classList = 'item-fourth'
          itemFirst.classList = 'item-fifth'
        } else if(this.index === 2){
          itemThird.classList = 'item-first'
          itemFourth.classList = 'item-second'
          itemFifth.classList = 'item-third'
          itemFirst.classList = 'item-fourth'
          itemSecond.classList = 'item-fifth'
        } else if(this.index === 3){
          itemFourth.classList = 'item-first'
          itemFifth.classList = 'item-second'
          itemFirst.classList = 'item-third'
          itemSecond.classList = 'item-fourth'
          itemThird.classList = 'item-fifth'
        } else if(this.index === 4){
          itemFifth.classList = 'item-first'
          itemFirst.classList = 'item-second'
          itemSecond.classList = 'item-third'
          itemThird.classList = 'item-fourth'
          itemFourth.classList = 'item-fifth'
        }
      }, 500);

    }
  }
}
</script>
<style lang="scss" scoped>
.testimonials {
  padding: 50px 0;
  @media(min-width: 768px) {
    padding: 100px 0;
  }
  @media(min-width: 992px) {
    padding: 150px 0;
  }
  &-row {
    @media (min-width: 576px) {
      display: flex;
    }
  }
  &-left {
    margin-bottom: 80px;
    display: flex;
    @media (min-width: 576px) {
      flex: 1 50%;
      max-width: 50%;
      margin-bottom: 0;
    }
  }
  &-right {
    position: relative;
    transition: 1s ease;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
    @media (min-width: 576px) {
      flex: 1 50%;
      max-width: 50%;
      padding: 0 30px;
      min-height: 390px;
    }
    @media (min-width: 768px) {
      min-height: 522px;
    }
    @media(min-width:1100px){
      min-height: 590px;
    }
    h4 {
      font-weight: 500;
      font-size: 20px;
      line-height: 1.2;
      letter-spacing: 0.07em;
      text-transform: uppercase;
      margin: 0;
    }
  }
  &-subtitle {
    font-weight: 500;
    font-size: 40px;
    line-height: 1.2;
    text-align: center;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: $grey;
    margin: 0;
    margin-bottom: 50px;
  }
  &-title {
    font-weight: 500;
    font-size: 20px;
    line-height: 1.2;
    text-align: center;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    margin: 0;
  }
  p {
    font-weight: 300;
    font-size: 20px;
    line-height: 1.2;
    margin: 25px 0;
  }
  &-date,
  &-author {
    font-weight: 400;
    font-size: 15px;
    line-height: 1.1;
    text-transform: uppercase;
  }
  &-date {
    margin-bottom: 70px;
  }
  &-btn {
    position: absolute;
    @media(max-width:575px){
      left: -10px; top: -20px;
      transform: translate(0, -100%);
    }
    @media(min-width:576px){
      left: 30px;
      bottom: 0;
    }
    button {
      border: 1px solid $grey;
      background: transparent;
      width: 45px;
      height: 45px;
      margin: 0 10px;
      padding: 0;
      cursor: pointer;
      transition: 0.1s ease-in;
      img{
        display: inline-block;
        vertical-align: middle;
      }
      &:hover {
        transition: 0.1s ease-in;
      }
    }
  }
}
.items{
  position: relative;
  width: 100%;
  & > img{
    display: block;
    width: 100%;
    height: auto;
    position: absolute;
    left: 0;
    top: 50%;
    transition: .5s ease-in-out, z-index 0s;
  }
  .item{
    &-zero{
      opacity: 0;
      top: 0;
      position: relative;
      width: calc(100% - 100px);
    }
    &-first{
      z-index: 5;
      width: calc(100% - 100px);
      transform: translate(0, -50%);
    }
    &-second{
      z-index: 4;
      width: calc(100% - 140px);
      transform: translate(60px, -50%);
    }
    &-third{
      z-index: 3;
      width: calc(100% - 160px);
      transform: translate(100px, -50%);
    }
    &-fourth{
      z-index: 2;
      width: calc(100% - 180px);
      transform: translate(140px, -50%);
    }
    &-fifth{
      z-index: 1;
      width: calc(100% - 200px);
      transform: translate(180px, -50%);
    }
    &-anim{
      transition: .5s ease-in-out;
      transform: translate(-100%, -50%);
      z-index: 5;
    }
  }
}
</style>

