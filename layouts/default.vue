<template>
  <main>
    <Header/>
    <Nuxt/>
    <Footer/>
  </main>
</template>
<style lang="scss">
.container {
  margin: 0 auto;
  width: 100%;
  padding: 0 10px;
  max-width: 100%;
  @media(min-width:576px){
    width: 570px;
  }
  @media(min-width:768px){
    width: 760px;
  }
  @media(min-width:1100px){
    width: 1050px;
  }
}
</style>