<template>
  <section class="ticket">
    <div class="container">
      <div class="ticket-row">
        <div class="ticket-right">
          <h2>Exclusive Online Discount</h2>
          <div class="ticket-block">
            <div class="ticket-col-1">
              <p>Available Online Only While Supplies Last</p>
            </div>
            <div class="ticket-col-2">
              <h6>Valid Only Until</h6>
              <p data-date="7">DD/MM/YY</p>
            </div>
            <div class="ticket-price">
              <img src="@/assets/img/page-price.png">
            </div>
          </div>
          <a class="ticket-btn" href="https://ekster.com/pages/ekster-all-collections?utm_source=facebook&utm_medium=structured.social&nbt=nb%3Afb%3A%7B%7Bsite_source_name%7D" target="_blank">
            CHECK AVAILABILITY
          </a>
        </div>
        <div class="ticket-left">
          <div class="ticket-img">
            <div class="ticket-box">
              <img src="@/assets/img/page-wallet.png" class="ticket-box--front">
              <img src="@/assets/img/cards.png" class="ticket-box--back">
            </div>
            <Dots :items="['#592A25', '#3F4147', '#CC8E5F','#5D5C56','#853D3E','#586275','#AF6B48']"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  mounted() {
    const
      MonthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      dataDates = document.querySelectorAll("[data-date]");

    dataDates.forEach(dataDate => {
      const
        date = new Date(),
        newDate = new Date(date.setDate(date.getDate() + Number(dataDate.dataset.date))),
        month = newDate.getMonth() + 1,
        day = Number(newDate.getDate()),
        year = newDate.getFullYear();
      dataDate.innerHTML = `${month}/${day}/${year}`;
    });
  }
}
</script>
<style lang="scss" scoped>
.ticket {
  padding: 90px 0 0;
  @media(min-width: 576px) {
    padding: 140px 0 0;
  }
  &-block {
    display: flex;
    text-align: center;
    margin-bottom: 15px;
    position: relative;
    justify-content: center;
    @media(min-width: 768px) {
      justify-content: start;
    }
  }
  &-row {
    @media(min-width: 768px) {
      flex-direction: row-reverse;
      text-align: center;
      display: flex;
      flex-wrap: nowrap;
    }
    &:hover {
      .ticket-box--back {
        top: -115px;
      }
    }
  }
  &-left {
    background: $white url("../../assets/img/page-bg-mobile-1.png") no-repeat center center/100% 100%;
    padding: 40px 40px 0;
    position: relative;
    @media(min-width: 768px) {
      background: $white url("../../assets/img/page-bg-1.png") no-repeat center center/100% 100%;
      flex-basis: 35%;
      max-width: 35%;
    }
  }
  &-img {
    text-align: center;
  }
  &-right {
    background: $white url("../../assets/img/page-bg-mobile-2.png") no-repeat center center/100% 100%;
    padding: 80px 20px;
    position: relative;
    transition: .25s ease-in-out;
    @media(min-width: 768px) {
      background: $white url("../../assets/img/page-bg-2.png") no-repeat center center/100% 100%;
      flex-basis: 65%;
      max-width: 65%;
      padding: 40px;
      &:hover {
        transform: translate(15px, 0);
        z-index: 1;
        .ticket-price {
          transform: translate(0, -15px);
        }
      }
    }
    h2 {
      font-weight: 600;
      line-height: 1.3;
      text-align: center;
      color: $white;
      font-size: 30px;
      text-transform: uppercase;
      @media(min-width: 768px) {
        margin-top: 0;
        margin-bottom: 24px;
        font-size: 34px;
        max-width: 250px;
      }
      @media(min-width: 1100px) {
        font-size: 43px;
        max-width: 400px;
      }
    }
    p {
      font-weight: 400;
      font-size: 17px;
      line-height: 1.3;
      text-align: center;
      color: $white;
      padding: 0 30px;
      margin: 0;
      @media(min-width: 768px) {
        font-size: 20px;
        margin-bottom: 25px;
      }
      @media(min-width: 1200px) {
        font-size: 25px;
      }
    }
    h6 {
      font-weight: 600;
      font-size: 17px;
      line-height: 1.3;
      text-align: center;
      color: $white;
      margin: 0;
      @media(min-width: 768px) {
        max-width: 150px;
        margin: 0 auto;
        margin-bottom: 64px;
        font-size: 20px;
      }
      @media(min-width: 992px) {
        font-size: 25px;
      }
    }
  }
  &-price {
    width: 100%;
    max-width: 120px;
    height: 120px;
    border-radius: 50%;
    position: absolute;
    top: -260px;
    transition: .25s ease-in-out;
    @media(min-width: 576px) {
      top: -230px;
    }
    @media(min-width: 768px) {
      position: absolute;
      top: -259px;
      right: 0;
    }
    @media(min-width: 992px) {
      top: -265px;
    }
    @media(min-width: 1200px) {
      max-width: 180px;
      height: 180px;
    }
  }
  &-col-1 {
    @media(min-width: 768px) {
      max-width: 250px;
    }
    @media(min-width: 1200px) {
      max-width: 400px;
    }
  }
  &-col-2 {
    @media(min-width: 768px) {
      max-width: 250px;
      position: absolute;
      width: 100%;
      right: -51px;
      bottom: -65px;
    }
    @media(min-width: 992px) {
      bottom: -98px;
    }
  }
  &-btn {
    background: $yellow;
    max-width: 400px;
    border-radius: 10px;
    margin: 0 auto;
    transition:0.5s ease;
    display: block;
    text-align: center;
    color: $white;
    padding: 13px 29px;
    font-weight: 700;
    text-decoration: none;
    font-size: 24px;
    line-height: 1.2;
    @media(min-width: 768px) {
      max-width: 250px;
      margin: 0;
    }
    @media(min-width: 1100px) {
      max-width: 400px;
      padding: 29px 37px;
    }
    &:hover {
      background: $green;
    }
  }
  &-box {
    position: relative;
    &--front {
      display: block;
      position: relative;
      z-index: 2;
      margin: 0 auto;
    }
    &--back {
      display: block;
      position: absolute;
      z-index: 1;
      left: 50%;
      top: 0;
      transform: translate(-50%, 0);
      transition: .25s ease-in-out;
    }
  }
}
</style>
