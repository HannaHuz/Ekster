<template>
  <section class="partners">
    <div class="container">
      <div class="partners-row">
        <div><img src="@/assets/img/icons/page-forbes-icon.png"></div>
        <div><img src="@/assets/img/icons/page-nbc-icon.png"></div>
        <div><img src="@/assets/img/icons/page-osbs-icon.png"></div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.partners {
  padding: 16px 0 19px;
  &-row {
    text-align: center;
    @media(min-width: 768px) {
      display: flex;
      justify-content: center;
    }
    img {
      margin: 10px 27px;
      max-width: 100px;
      @media(min-width: 768px) {
        max-width: 200px;
      }
    }
  }
}
</style>
