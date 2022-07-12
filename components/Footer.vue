<template>
  <footer class="footer">
    <div class="container">
      <ul class="footer-nav">
        <li><a @click="idModal = 'terms'">Terms of use</a></li>
        <li><a @click="idModal = 'privacy'">Privacy Policy</a></li>
      </ul>
    </div>
    <Modal v-if="idModal" :modal_id="idModal"/>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      idModal: false
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  padding: 5px 0;
  background-color: $dark-grey;
  @media (min-width: 576px) {
    padding: 26px 0;
  }
  &-nav {
    text-align: center;
    padding: 0;
    @media (min-width: 576px) {
      display: flex;
      font-size: 0;
      justify-content: center;
    }
    li {
      list-style: none;
      margin: 0 20px;
      font-weight: 400;
      font-size: 14px;
      line-height: 1.1;
      position: relative;
      @media (min-width: 576px) {
        border-bottom: 1px solid #F5F5F5;
        font-size: 15px;
        &:not(:first-child) {
          &:after {
            content: "";
            height: 17px;
            transform: rotate(30deg);
            width: 1px;
            background: #F5F5F5;
            position: absolute;
            left: -13px;
            top: 9%;
          }
        }
      }
    }
    a {
      display: block;
      color: $light-grey;
      cursor: pointer;
    }
  }
}
</style>
