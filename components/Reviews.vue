<template>
  <section class="reviews">
    <div class="container">
      <h3 class="reviews-subtitle">what's being said about the world's smartest wallet</h3>
      <h2 class="reviews-title">Customer Reviews</h2>
      <div class="reviews-slider">
        <div class="item" v-for="item in reviews">
          <div class="reviews-block">
            <img :src="item.img">
            <h4>{{item.coment}}</h4>
            <p v-html="item.content"></p>
            <div class="reviews-stars">
              <Stars/>
              <div class="reviews-author">{{item.author}}</div>
              <a :href="item.link" target="_blank">{{item.name}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return{
      reviews: [
        {
          img:require('@/assets/img/reviews-1.png'),
          coment:'ALUMI-GREATNESS',
          content:'Hands down the best and most compact wallet I have ever owned. The band that goes around the cardholder is the most secure money band I have come across. The tough, durable aluminum casing increases the lifespan and longevity of the wallet. The camo pattern is perfect for the camo enthusiast like myself. Lastly, the quality of the materials and prints are top notch. Every person should think about replacing the old, tired, bulky traditional...',
          author:'By Carlos Torres, yesterday',
          link:'https://ekster.com/pages/ekster-all-collections?utm_source=facebook&utm_medium=structured.social&nbt=nb%3Afb%3A%7B%7Bsite_source_name%7D',
          name:'Aluminum Cardholder'
        },
        {
          img:require('@/assets/img/reviews-2.png'),
          coment:'FIANCÉ BIRTHDAY GIFT',
          content:'I saw two friends of ours had this wallet and how much they love it. I decided to buy one for my fiancé for his birthday. He absolutely loves it and haven’t stop saying enough nice things about it.',
          author:'By Anonymous, yesterday',
          link:'https://ekster.com/pages/ekster-all-collections?utm_source=facebook&utm_medium=structured.social&nbt=nb%3Afb%3A%7B%7Bsite_source_name%7D',
          name:'FORTUNA PARLIAMENT'
        },
        {
          img:require('@/assets/img/reviews-3.png'),
          coment:'GREAT WALLET',
          content:'This is by far my favorite wallet. I upgraded from the leather wallet and I am so happy. I love the design. I love how low profile it was and it can fit in practically any pocket. I absolutely recommend this wallet and have already gotten comments on how nice the wallet is. With the holidays approaching this is a great stocking stuffer and Something anyone male or female can enjoy.',
          author:'By Christian Talia, yesterday',
          link:'https://ekster.com/pages/ekster-all-collections?utm_source=facebook&utm_medium=structured.social&nbt=nb%3Afb%3A%7B%7Bsite_source_name%7D',
          name:'Aluminum Cardholder'
        },
        {
          img:require('@/assets/img/reviews-1.png'),
          coment:'Sleek and Minimal',
          content:'Literally cut my old wallet in half in terms of pocket space/ I can now easily carry in a jacket or front pants pocket with my keys. Let’s me focus on carrying the essentials instead of misc business cards and receipts i don’t need. <br> Beautiful wallet and great stitching. Looks like it will be my wallet for years to come. <br> I currently have only 5 cards in it andy metal card can slip out when I shake it. So it’s not a problem, but something I noticed and thought might need consideration in future designs.',
          author:'By Joshua Lugo, 1 months ago',
          link:'https://ekster.com/pages/ekster-all-collections?utm_source=facebook&utm_medium=structured.social&nbt=nb%3Afb%3A%7B%7Bsite_source_name%7D',
          name:'PARLIAMENT WALLET'
        },
        {
          img:require('@/assets/img/reviews-2.png'),
          coment:'I’m In Love',
          content:'This wallet is too classy. I mean I expected to get something classy, but never expected to get something so elegant. The Leather is eye catching. The Subtle Gold on the E is Breathtaking. And when you press that button to get your cards ejected from the Wallet is a craving. This is honestly my favourite wallet, and I for sure am stuck with you guys!',
          author:'By Chris White, 1 week ago',
          link:'https://ekster.com/pages/ekster-all-collections?utm_source=facebook&utm_medium=structured.social&nbt=nb%3Afb%3A%7B%7Bsite_source_name%7D',
          name:'FORTUNA PARLIAMENT'
        },
        {
          img:require('@/assets/img/reviews-3.png'),
          coment:'Amazing new wallet',
          content:'I had my reservations but after getting it in my hands and using it I love it. It’s so small and sleek it takes up almost no pocket space whatsoever. I got to consolidate my cards and they aren’t in a big clunky space constantly rubbing against each other. The trackers are great, I\'m really forgetful so that simple whistle helps me find what I need quickly in the morning sometimes. And knowing I can potentially backtrack and find something if I left makes me feel alot more secure. I’d recommend these for anyone who wants a sleek cool look, that offers protection for your cards, and comfort and security.',
          author:'By Ahmad Jackson, yesterday',
          link:'https://ekster.com/pages/ekster-all-collections?utm_source=facebook&utm_medium=structured.social&nbt=nb%3Afb%3A%7B%7Bsite_source_name%7D',
          name:'Carbon Fiber Cardholder'
        },
        {
          img:require('@/assets/img/reviews-3.png'),
          coment:'Husband loves it!',
          content:'Bought as Xmas present but ended up giving it to my husband sooner. He has been enjoying it and showing it off at work.',
          author:'By Carmela Martinez, 5 days',
          link:'https://ekster.com/pages/ekster-all-collections?utm_source=facebook&utm_medium=structured.social&nbt=nb%3Afb%3A%7B%7Bsite_source_name%7D',
          name:'Aluminum Cardholder'
        },
        {
          img:require('@/assets/img/reviews-3.png'),
          coment:'Husband loves it!',
          content:'Bought as Xmas present but ended up giving it to my husband sooner. He has been enjoying it and showing it off at work.',
          author:'By Carmela Martinez, 5 days',
          link:'https://ekster.com/pages/ekster-all-collections?utm_source=facebook&utm_medium=structured.social&nbt=nb%3Afb%3A%7B%7Bsite_source_name%7D',
          name:'Aluminum Cardholder'
        },
      ]
    }
  },
  methods: {
    setSlider() {
      return tns({
        container: '.reviews-slider',
        mouseDrag: true,
        items: 1,
        gutter: 0,
        controls: true,
        nav: false,
        loop: true,
        autoplay: true,
        autoHeight: true,
        autoplayButtonOutput: false,
        responsive: {
          768: {
            items: 2
          },
          992: {
            items: 2
          },
          1200: {
            items: 3
          },
          1400: {
            items: 3
          }
        }
      })
    }
  },
  mounted() {
    this.setSlider()
  }
}
</script>

<style lang="scss" scoped>
.reviews {
  padding: 50px 0;
  @media(min-width: 768px) {
    padding: 100px 0;
  }
  @media(min-width: 992px) {
    padding: 150px 0;
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
    margin-bottom: 50px;
  }
  &-subtitle {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.2;
    text-align: center;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: $grey;
    margin: 0;
  }
  &-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  &-slider {
    .item {
      padding: 54px 15px 50px;
    }
  }
  &-block {
    text-align: start;
    background: $light-grey;
    border: 1px solid $grey;
    padding: 80px 30px 50px;
    position: relative;
    @media (min-width: 576px) {
      padding: 100px 30px 150px;
    }
    @media (min-width: 768px) {
      min-height: 670px;
    }
    img {
      margin-bottom: 50px;
      position: absolute;
      top: -54px;
      left: 28px;
    }
    h4 {
      font-weight: 300;
      font-size: 18px;
      line-height: 1.2;
      text-align: start;
      letter-spacing: 0.07em;
      text-transform: uppercase;
      color: $grey;
      margin: 0;
    }
    p {
      text-align: start;
      font-size: 16px;
      font-weight: 300;
      line-height: 1.2;
      color: $grey;
    }
    a {
      color: $grey;
      font-weight: 300;
      font-size: 15px;
      line-height: 1.1;
      text-align: center;
      letter-spacing: 0.03em;
      text-decoration: underline;
      text-transform: uppercase;
      width: 100%;
      transition: 0.5s ease-in;
      &:hover {
        color: #7e7e7e;
      }
    }
  }
  &-stars {
    margin: 30px 0 0;
    @media (min-width: 576px) {
      position: absolute;
      bottom: 50px;
    }
  }
  &-author {
    font-weight: 400;
    font-size: 15px;
    line-height: 1.1;
    text-transform: uppercase;
  }
}
</style>
