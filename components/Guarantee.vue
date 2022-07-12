<template>
  <section class="guarantee">
    <div class="container">
      <div class="guarantee-row">
        <div class="guarantee-left">
          <img src="@/assets/img/guarantee-stick.png">
          <h2 class="guarantee-title">30 day money-back guarantee it works or you don’t pay</h2>
          <p class="guarantee-text">We want you to be 100% satisfied with everything you buy from Ekster. And if you’re not entirely happy with your purchase we will refund your money in full, or exchange the goods. All we ask is that you contact our customer services and then return the liquid coat back to us.</p>
          <a class="guarantee-btn" href="https://ekster.com/pages/ekster-all-collections?utm_source=facebook&utm_medium=structured.social&nbt=nb%3Afb%3A%7B%7Bsite_source_name%7D" target="_blank">
           Shop All
          </a>
        </div>
        <div class="guarantee-right">
          <img src="@/assets/img/guarantee-big.png">
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.guarantee {
  padding: 50px 0;
  background: $light-grey;
  @media(min-width: 768px) {
    padding: 100px 0;
  }
  @media(min-width: 992px) {
    padding: 150px 0;
  }
  &-row {
    align-items: center;
    @media (min-width: 768px) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    &>div {
      @media(min-width:768px){
        flex: 1 calc(50% - 25px);
        max-width: calc(50% - 25px);
      }
    }
  }
  &-title {
    font-weight: 500;
    font-size: 40px;
    line-height: 1.2;
    text-align: center;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: $grey;
    margin: 0;
  }
  &-text {
    font-weight: 300;
    font-style: normal;
    font-size: 20px;
    line-height: 1.2;
    margin: 50px 0;
  }
  &-left {
    text-align: center;
    margin-bottom: 90px;
    @media (min-width: 768px) {
      margin-bottom: 0;
    }
    img {
      margin-bottom: 50px;
      max-width: 100%;
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
}
</style>
