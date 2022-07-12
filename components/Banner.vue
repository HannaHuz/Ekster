<template>
  <section class="banner">
    <div class="container">
      <div class="banner-wrap">
        <h3>The Pit In Your Stomach You Get When You Misplace Your Wallet...</h3>
        <p>You know the feeling.You're at the cash register...Reach into your pocket for your wallet and feel your throat clench when you realize that you left your walletatthe gym or a bar or an Uber.Or even worse - you don't know where you left it.</p>
        <h1>Never Feel That Again</h1>
        <a class="banner-btn" href="https://ekster.com/pages/ekster-all-collections?utm_source=facebook&utm_medium=structured.social&nbt=nb%3Afb%3A%7B%7Bsite_source_name%7D" target="_blank">
          Shop All
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.banner {
  position: relative;
  z-index: 1;
  background: #000 url("../assets/img/main-banner.png") no-repeat center center/cover;
  padding: 100px 0;
  margin: 0;
  @media(min-width: 768px) {
    padding: 150px 0;
  }
  @media(min-width: 1366px) {
    padding: 295px 0;
  }

  &-wrap {
    width: 425px;
    max-width: 100%;
    h1 {
      font-style: normal;
      font-weight: 500;
      font-size: 35px;
      line-height: 1.2;
      text-transform: uppercase;
      color: $green;
      margin-bottom: 50px;
    }
    h3 {
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 1.7;
      text-transform: uppercase;
      color: $light-grey;
    }
    p {
      font-style: normal;
      font-weight: 300;
      font-size: 15px;
      line-height: 1.6;
      color: $light-grey;
    }
  }
  &-btn {
    background: $green;
    height: 32px;
    width: 144px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 15px;
    line-height: 1.1;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: $light-grey;
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
      background: #419f51;
    }
    &:hover::before {
      transform: translate(200%,0) skew(-20deg);
    }
  }
}
</style>
