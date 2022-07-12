<template>
  <div class="page page-one">
    <AdvertorialBanner :img="require('@/assets/img/banner-page-two.png')"/>
    <AdvertorialTitle
      title="5 Reasons Why The Ekster Wallet <strike style='color: #444444;'>Is Going</strike> Has Gone Viral"
      subtitle="See why men everywhere are ditching their traditional wallet for an Ekster… and aren’t looking back."
    />
    <AdvertorialContent :posts="contentPosts"/>
  </div>
</template>

<script>
export default {
  layout: 'advertorial',
  data() {
    return {
      contentPosts: [
        {
          img: require('@/assets/img/v2-img-1.png'),
          title: '1. Instant “Push-Button” Access To Your Cards ',
          text: `Some “minimalist” wallets have small pockets and no easy way to access your cards. This means that when you dig for your cards you can scrape or bruise the skin around your knuckles. But our patented card ejection mechanism makes sure you never have to struggle to access your cards. Simply push the button and your cards are quickly fanned out making it easy to find the right card, every time.`
        },
        {
          img: require('@/assets/img/v2-img-2.png'),
          title: '2. Never Misplace Your Wallet Or Phone Again',
          text: `Nothing is quite as frustrating as misplacing your wallet… especially when you’re in a mad dash out the door. Thanks to the Ekster Tracker Card, you can use your phone to ring your wallet or track it on the map. It’s solar powered, ultra-slim, and the size of a credit card. The best part is, the Tracker Card works with every Ekster wallet model. Plus, it comes complete with two-way ringing. That means you can call from your phone to locate your wallet, or push the button on your Tracker Card to locate your phone. `
        },
        {
          img: require('@/assets/img/v2-img-3.png'),
          title: '3. Helps Prevent Lower Back Pain',
          text: `Experts agree that prolonged sitting on a bulky, traditional wallet puts a lot of strain on your lower back. This added pressure can aggravate your sciatic nerve leading to numbness and even intense back pain. Fortunately for you, Ekster is compact enough to carry all your essential cards, ID’s, and cash and still fit comfortably in your front pocket. It’s sleek, durable, and comfortable. What’s not to love about an Ekster?`
        },
        {
          img: require('@/assets/img/v2-img-4.png'),
          title: '4. Prevents Electronic Pickpockets',
          text: `Hackers have the ability to use special scanners that get your credit card information even if your cards are safely tucked into your wallet. Thanks to a special “faraday cage” designed to block these scanners, you can rest easy knowing that your payment card information is safe from would-be hackers. What’s more, every Ekster Wallet Model comes equipped with this special RFID blocking feature.`
        },
        {
          img: require('@/assets/img/v2-img-5.png'),
          title: '5. Built To Last',
          text: `Depending on the model you choose, you’ll enjoy a high-quality wallet made from our top-grain leathers, military-grade carbon, or space-grade aluminium. Tanned under gold-rated environmental protocols using ECCO Leather’s new DriTan™ technology, our leather is designed for minimal impact on the planet without sacrificing quality. Each model has unique details that are engineered to age gracefully. This is the one wallet that is designed to “break-in” instead of “wear-out”.`
        }
      ]
    }
  }
}
</script>
