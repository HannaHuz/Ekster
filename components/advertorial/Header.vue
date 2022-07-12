<template>
  <header class="header">
    <div class="container">
      <a
        href="https://ekster.com/pages/ekster-all-collections?utm_source=facebook&utm_medium=structured.social&nbt=nb%3Afb%3A%7B%7Bsite_source_name%7D">
        <img class="header-logo" src="@/assets/img/page-logo.png">
      </a>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: block;
  width: 100%;
  text-align: center;
  padding: 30px 0;
  &-logo {
    max-width: 100%;
    height: auto;
    border: none;
    width: 150px;
    @media(min-width: 768px) {
      width: 320px;
    }
  }
}
</style>
