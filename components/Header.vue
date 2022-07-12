<template>
  <header class="header">
    <div class="container">
      <a
        href="https://ekster.com/pages/ekster-all-collections?utm_source=facebook&utm_medium=structured.social&nbt=nb%3Afb%3A%7B%7Bsite_source_name%7D">
        <img class="header__logo" src="@/assets/img/header-logo.png" alt="header-logo">
      </a>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  display: block;
  width: 100%;
  text-align: center;
  padding: 20px 0;

  &__logo {
    max-width: 100%;
    height: auto;
    border: none;
  }
}
</style>
