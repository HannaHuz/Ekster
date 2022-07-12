<template>
  <div class="page page-one">
    <AdvertorialBanner :img="require('@/assets/img/banner-page-two.png')"/>
    <AdvertorialTitle
      title="5 Reasons Why The Ekster Wallet Is The Perfect Gift For The Man Who Has Everything"
      subtitle="When Your Man Pulls Out His Wallet To Pay For Dinner - <i><b>And He Feels The Surge
Of Confidence That Comes From Holding An Ekster</b></i> - He’ll Think Of You. "
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
          img: require('@/assets/img/v3-img-1.png'),
          title: '1. You’ll Save Him From Forgetting His Wallet (Or Phone)',
          text: `Nothing is quite as frustrating as starting out date night rushed because he can’t find his wallet. But you don’t have that problem thanks to the Ekster Tracker Card. Your man can now use his phone to ring his wallet or track it on the map. It’s solar powered, ultra-slim, and the size of a credit card. The best part is, the Tracker Card works with every Ekster wallet model. Plus, it comes complete with two-way ringing which means he can call from his phone to locate his wallet, or push the button on his Tracker Card to locate his phone. Date night is saved thanks to you.`
        },
        {
          img: require('@/assets/img/v3-img-2.png'),
          title: '2. He’ll Love The Convenient “Card Fanning” Feature',
          text: `Some “minimalist” wallets have small pockets and no easy way to access cards. This means that your man could scrape or bruise the skin around his knuckles as he digs around for his cards. But our patented card ejection mechanism makes sure he never has to struggle to access his cards. With the push of a button his cards are quickly fanned out making it easy for him to find the right card, every time.`
        },
        {
          img: require('@/assets/img/v3-img-3.png'),
          title: '3. Keep Him Safe From Electronic Pickpockets',
          text: `Some people would live to get their hands on your man’s money. But now they can’t because of you. Hackers have the ability to use special scanners that get his credit card information even if his cards are safely tucked into his wallet. Thanks to a special “faraday cage” designed to block these scanners, you can rest easy knowing that his payment card information is safe from would-be hackers. What’s more, every Ekster Wallet Model comes equipped with this special RFID blocking feature. Just think, the less time he spends dealing with his bank’s fraud department, the more time - and money - he has to spend on you. `
        },
        {
          img: require('@/assets/img/v3-img-4.png'),
          title: '4. The Wallet That Prevents Back Pain',
          text: `Does his back ever bother him? Prolonged sitting on a bulky, traditional wallet puts a lot of strain on his lower back. This added pressure can aggravate his sciatic nerve leading to numbness and even intense back pain. Fortunately for you, Ekster is compact enough for him to carry all his essential cards, ID’s, and cash while still fitting comfortably in his front pocket. It’s sleek, durable, and comfortable. This is the gift that keeps on giving.`
        },
        {
          img: require('@/assets/img/v3-img-5.png'),
          title: '5. Yours Is The Gift That Lasts',
          text: `Depending on the model you choose, your man will enjoy a high-quality wallet made from our top-grain leathers, military-grade carbon, or space-grade aluminium. Tanned under gold-rated environmental protocols using ECCO Leather’s new DriTan™ technology, our leather is designed for minimal impact on the planet without sacrificing quality. Each model has unique details that are engineered to age gracefully. This is the one wallet that is designed to “break-in” instead of “wear-out”.`
        }
      ]
    }
  }
}
</script>
