<template>
  <div class="page page-one">
    <AdvertorialBanner :img="require('@/assets/img/banner-page-one.png')"/>
    <AdvertorialTitle
      title="5 Reasons Why Men Are Throwing Away Their Wallets And Replacing Them With This"
      subtitle="For the guy who’s ready to upgrade his most important accessory, look no further!"
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
          img: require('@/assets/img/page-one-img-1.png'),
          title: '1. It’s A Portable Junk Drawer',
          text: `Traditional wallets all end up in the same condition. Packed with worthless junk. Who needs a business card from the plumber that did some work for you two years ago? Nobody! All you need is a functional, yet stylish wallet that holds your payment cards, licenses, cash, and your Tracker Card (more on that in a minute). It’s settled then. Time to switch to an Ekster.`
        },
        {
          img: require('@/assets/img/page-one-img-2.png'),
          title: '2. It Can Cause Back Pain',
          text: `Your wallet shouldn’t be a source of pain but take one look at it and it’s easy to see why it does. It’s
            bulky and so poorly designed that you're limited to carrying it in your back pocket. The problem is that
            prolonged sitting on a wallet can put a tremendous amount of strain on your spine, muscles, and nerves.
            This added pressure can aggravate your sciatic nerve leading to numbness and even intense back pain. That’s
            why
            so many men are ditching their outdated billfolds for an Ekster. There’s enough space to carry all your
            essential cards, ID’s, and cash while still fitting comfortably in your front pocket. Bye bye painful
            wallet!`
        },
        {
          img: require('@/assets/img/page-one-img-3.png'),
          title: '3. It’s Easy To Lose',
          text: `Your wallet carries your MOST important items. Losing your cash, cards and IDs puts your entire life in
            someone else’s hands. Losing your wallet in your home isn’t much better though. You’re stuck in that weird
            place of, “Should I cancel my cards or wait to see if I find my wallet?” Thanks to the Ekster Tracker Card
            you don’t have to worry about that ever again. It’s solar powered, ultra-slim, and the size of a credit
            card. And thanks to the two-way ringing feature, you can call from your phone to locate your wallet, or
            push
            the button on your Tracker Card to locate your phone. Win-win.`
        },
        {
          img: require('@/assets/img/page-one-img-4.png'),
          title: '4. It’s Vulnerable To Electronic Pickpockets',
          text: `Hackers have the ability to use special scanners that can steal your credit card information even if
            they’re safely tucked into your wallet. That’s because most traditional wallets aren’t made from
            protective
            material that safeguards your personal information. But Ekster wallets come equipped with a special
            “faraday
            cage” that’s designed to block these scanners.`
        },
        {
          img: require('@/assets/img/page-one-img-5.png'),
          title: '5. It’s A Terrible Value',
          text: `Traditional wallets are bulky, they’re often made from cheap materials, they’re easy to lose, and they
            can
            cause back pain. What’s more, they can cost a couple hundred dollars and beyond. It’s easy to see why so
            many men are making the switch to Ekster. Depending on the model you choose, you’ll enjoy a high-quality
            wallet made from our top-grain leathers, military-grade carbon, or space-grade aluminium. Thanks to the
            Tracker Card, you’ll be able to locate your wallet or your phone. It’s stylish, compact, and built to
            last.
            Plus, they’re on sale just in time for the holidays. What’s not to love about an Ekster?`
        }
      ]
    }
  }
}
</script>
