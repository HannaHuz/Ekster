<template>
  <div class="star">
    <ul class="star-rating">
      <li class="star-f"></li>
      <li class="star-f"></li>
      <li class="star-f"></li>
      <li class="star-h"></li>
      <li class="star-e"></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.star {
  text-align: center;
  @media (min-width: 576px) {
    text-align: start;
  }
  &-rating {
    padding: 0;
    display: flex;
    font-size: 10px;
    li {
      display: block;
    }
  }
  &-f {
    &:before {
      content: url("../assets/img/icons/star-icon.png");
    }
  }
  &-h {
    &:before {
      content: url("../assets/img/icons/star-icon.png");
    }
  }
  &-e {
    &:before {
      content: url("../assets/img/icons/star-icon.png");
    }
  }
}
</style>
