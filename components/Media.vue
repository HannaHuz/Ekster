<template>
  <section class="media">
    <div class="container">
      <h3 class="media-subtitle">Press & Media</h3>
      <h2 class="media-title">The Media Loves Ekster</h2>

      <div class="slider">
        <div class="slider-item" v-for="post in posts">
          <div class="media-post">
            <img :src="post.img">
            <p class="media-content">{{post.content}}</p>
            <a class="media-link" :href="post.link" target="_blank">Read the full article</a>
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
      posts:[
        {
          img:require('@/assets/img/forbes.png'),
          content:'"The traditional leather wallet hadn\'t changed for decades, and Ekster became the brand to challenge that."',
          link:'https://www.forbes.com/sites/lucysherriff/2019/07/22/could-this-tech-mean-the-end-of-lost-wallets/?sh=76c3fc872b7a'
        },
        {
          img:require('@/assets/img/elle.png'),
          content:'"A messy key fob indicates a disordered mind. Tidy yours with the ‘Key Organiser’ by Ekster. It holds up to seven keys and, when paired with the ‘Key Tracker’, means you’ll never misplace them again..."',
          link:'https://www.elledecoration.co.uk/design/g27722121/new-technology-for-home/'
        },
        {
          img:require('@/assets/img/cinet.png'),
          content:'"How a slim wallet got me to ditch cash."',
          link:'https://www.cnet.com/tech/mobile/a-slim-wallet-is-how-i-learned-to-ditch-cash/'
        },
        {
          img:require('@/assets/img/buzzfeed.png'),
          content:'"I’m a wallet freak who’s not easy to please… and I’m in heaven."',
          link:'https://www.buzzfeed.com/abbykass/splurge-worthy-lavish-gifts'
        },
        {
          img:require('@/assets/img/digitaltrends.png'),
          content:'"Thoughtfully designed and stylish"',
          link:'https://www.digitaltrends.com/mobile/ekster-parliament-tracker-impressions/'
        },
        {
          img:require('@/assets/img/businessinside.png'),
          content:'"How a slim wallet got me to ditch cash."',
          link:'https://www.businessinsider.nl/best-smart-wallet?international=true&r=US'
        },
      ]
    }
  },
  methods: {
    setSlider() {
      return tns({
        container: '.slider',
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
            items: 3
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
.media {
  background: $light-grey;
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
    flex-direction: column;
    @media (min-width: 768px) {
      flex-direction: row;
    }
  }
  &-post {
    padding: 50px 30px;
    text-align: center;
    background: $white;
    border: 1px solid $grey;
    margin: 0 15px 50px;
    position: relative;
    @media (min-width: 768px) {
      min-height: 485px;
      padding: 15px 15px;
    }
  }
  &-content {
    font-size: 16px;
    font-weight: 300;
    line-height: 1.6;
    text-align: center;
    color: $grey;
    margin-top: 50px;
  }
  &-link {
    font-weight: 500;
    color: $grey;
    font-size: 20px;
    line-height: 1.2;
    text-align: center;
    letter-spacing: 0.03em;
    text-decoration: underline;
    text-transform: uppercase;
    transition: 0.5s ease-in;
    @media(min-width: 768px) {
      position: absolute;
      bottom: 50px;
      left: 0;
      width: 100%;
    }
    &:hover {
      color: #7e7e7e;
    }
  }
}
</style>
