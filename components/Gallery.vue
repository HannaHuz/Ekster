<template>
  <section class="gallery">
    <div class="container">
      <div class="gallery-row">
        <div class="gallery-item" v-for="(item,index) in links">
          <img :src="require(`@/assets/img/gallery-${index + 1}.png`)">
          <a :href="item.link" target="_blank" class="gallery-overlay">
            <svg class="gallery-icon" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect width="25" height="24.881" fill="url(#pattern0)"/><defs><pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#image0_26_112" transform="scale(0.0047619)"/></pattern><image id="image0_26_112" width="210" height="209"xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAADRCAYAAAC5DezsAAAWKklEQVR4Xu1di9EUNxJuJeByBK4jAZ+dABwJgJ0AmASMScAUlwDGCYBJAEwCxiRg7ATO5QhcTmCuvv1bW7OzszuSpltqzfRWXfkAjUZq9Tf9UD8Cbew3DMOnRPQvIvqCiG7x/8cu8edPNrZd69v5g4j+5v/9xv/9GEL40/rCc9cXch+wNn4Yhv8Q0V0Gyue8PgDJfzYpEEH0DxG9JyIA7H3v4OoOSMMwQLJ8TUQA0GcOHJtoyVxVBNc7IvolhPA28/nmw7sA0gg8X7F65hKnOeuoLSCCCmrhy15AZRpIwzB8Q0SPWPI4eNR41+zEY0kFUH20ulJzQBqGAYABeB642maVbZqsC6D6i4iehhBgW5n6mQESA+gZEd0eedpMEcsXY4ICABQcFc9DCK9MrIiImgOJ3dUvHEBWWKKbdURAQUI1d040BdIwDJBAUOHc/umGf80tNKp8D1u60JsAaRgGeN8AIlyQOojM8WaXCwKg3oUQHrdYfXUgDcPwk6txLY56F+9spu5VAxJHIMAWcim0C55uusnq0qkKkNwWaspUe315lE73a9hOqkBijxxUOcTAuS20V5Zuu28A6om2Z08NSHwv9DODqC0p/e17pwDA9DqE8FSLECpAYnvopUshrWPzeQsoADD9EUK4X/Ds4iPiQOL4OCDfVblF8vuAyhRQA5MokNypUJkt/HUlFIhOiDshBCQdivzEgOQgEjkPn6QeBZCmIQYmESB1AKJpajOCHs2G5NfjJfE3Ic0/ZinHyS2r+LCZ/i1BhdVA4nCf54Zsoii6AZRfiAh//rPGXYLEgWxpDr7+ALiQzYz6GchutlQOQMxmWgUkI965KG0+ENEbzv8X0323xNhW9mIs41kETMVA4nsifPFbie4DATgvxVyilxWmtb4OI6Bafc+0Bki/N7hsjdLnNQPIJY91pGSsj82EJ41KC4C3npUmCxYBaRiGGLFQSxodAaR5O51x5j5UkQJsMiDNBlWiavEYdgQ++7qkNkQ2kIZh+I6IkPNRa4PY3IcQwkPFs/OpDVKgUd5akScvC0isz8KgrwGimPn4uOQLYZAvfEmFFBiGAek39yryXfaHOxdIteyi1cZf4Zn5Y0YpwB9xZBLUyGfLtpeSgVTxqwBPHPLv/cLUKFO3XFbFDGvcPeLuK+mXBKRKKl10ZwNE7o1LOr59Dqpkp2fZ5qlA+pXrLGidnMilmNbifF57FKgUDAC+fJRSkHIRSBXSItwessenXaxoVAdkGt8nuf4kL14KkDQdDA4iySPf4VwczweNSQtMSY6Hq0BSjup2EO2Q8TW2XMGGX5RKS0D6n5Lv3m0iDY7a8ZzKNtPiR/8ikJSlES687uz43H3rChRQtuevusOvAUlLGolmJiqch0/ZMQUU7zshlV6EEH6YI88skBT99FVqjHXMB5tfOtszSPBD39/xDyk5aNS8+iJ+GAat65qLttIlIGl46gCiZkXON8+hxjfIahdSJK6F+MTs5lW9jxRz5S4KgjMgKRpti54P47zgyyugwKhQaE6MXARUcaiYolY1a9/PAQm5Roi0lfwl3xBLvtTnaksBgY/yKr5RUvGwpi+nYWxzQNJwMqBcrOcTteXrqm8XAFFcbzGYFO+X/jtNMD0BklJFIBDirlfxqcrHTV/G0Qa/Cd5BzkqBlE1ytHhs7J3ySMqYMzNlCiQNtc6lUcrRbGiMEvPCUZVdt1vJ8XCWkj4FkrRa59JoQwBJ2YoS4+LVa1Q8JARKS6UT9e4IJCW1zqVRCvdtaAxfiH6rtKUfS3rEKtlKJ967MZCQFy9JgOIviNIh+LQVKDAMg7RWM151Vtbq+EEFD96J3TYGkvQlrN8bVWBcS69QcDJMt1dsKihpXCjd9RaLPABJiQBoNzgbl2Tp8H0tchRg+wgSSfN3q9QDrCAtj6pmBNJXXDdbigDF7kqpBfg89SlQCUhI/X5VsjsubCoZbHC0kyKQUNXy+5LFXXjG0yQEidnLVJWAhKiCosBWBfXuaLNFIEnfH53d/PbCDL7Ocgoour7jooptpDiBsHp3XE8EkqSnxb115bzY/ZPCjHrmbMipNTdHTAXv3UHVDAqOhmIXZfdcVLAB/oqjERcacn3JU9xOmAr9oPDDhwsfwvelRnjCu5KHKEU1xPcXRTeMF69wz3XQvgAk1PGW9LS42/sK23EwJ5LaAB50W8BPopY6AIUf2nqiXxQS5QCuqsU2BYNVz6RRao25a6hnOwn166V+h6ADAEnaY+fRDKMjYon/DdqFCAMnhREArr/YI/uqFqgU1CfsVeQDrWDHHRxrABIO+WXKqSSOKXZPJs7fxTD+QD3iemsSEmftviOoXpa6j1MXoBCScxYkmrqWuXHCdtzBlAGQ0O8IzZSlfsfbXqkJe5qHqy9ByudkhNbcYlQB0fUQoIp/Fl2DYIbqYims3IVrAUk6Mrb45jmXIJbGj8qXYVkWJFAKecCkcFo81QCUQEk3cRCBKMIXszfBBwpell0BafTl7QlAc4a8SmGaFbXmwKDFPV0XHA7ywkMYSLsJDWrUljFFypSOiSqeOPOywwXZBdGtf01iq0pJlkj2gbT2wqyUC2o+V7HZVc1txXdFpwQq+IjbTyyh4P5HbTvYkfjBZY+wH7js32p7F4WFB9Z/cDZIonPTl7EblELXgKqmWrX4OozfqeCpdiClHqpiKdzUJbQYBzDh/ia7VkKLxaa+04GUSinBcazfQ2qj/04v3jhBChxCkKB63dFWuSQXveBskL47dYm0QHDEv2k2sarFOxLv2UwwskskCXZInEMxZixxBSaHbQJMDqRKvOUgukpolUvSSkd7eI0DqQK1HURJRO4aTA6kpDMuH+QgyqIdwIQCN4cqOj39HEiKp6WQ4Ki4WjNTd2kzOZCU+KdCi/nUlY8jCWIG7Nyz4wza1i751XUUUokjNc6BJEXJyTzC0cA5q4zAeUdE6N6QlS7OSWqxjSQyblulbogk3eUQbs1YB9Ia6l14ViDUP3dV43ygN6WlpeZeysBCMmHtfKiuIiAcSLksuzC+snMhBoOiP6q6gc57Q71C1IWoof5hfxe7fgsf3arpHEiryHf+8DAM0vXO51YYQ2wehxBQlKTqrzKgurCXHEiCLFgpFcJMBHXFyHXzVXYdSEJAqqDSHWwGIkJOT9VyWEskqvABMfPxuEQLB9ISlyT+u7JKZ/7Wf0X6dyKFyXRemgMp9RivjFNmom4uKLlkVkwPEaDsyRSHdHGrnewdSALHLVyKabyibkAUF618EW3W8eBAWgkkxTuj7kBUCUwmq+46kNYDSbLrRlxNtyCqACaTUsmBtAJIgpU/p+pclxHQU1IqlBmOrzAnlRxI64Akfflq3juXSy4lR4w5D54DKZczeLzSvZH5i8cScincM5kLHXIglXCGfK1nrALMgV6mpi5bC8lz9pjCPZup6HAHUiGnCLu8zX1hC8ly8TGNpsXoDyUZ6b5mzw6kAuopMIWpr2sBSZIeUcjRMtOg24GUxAKng4QZwnwcWQGJZh9R6Gxn5gPkQCrgEmG1zgwzFJAi+xHpuvBEdFejMH/uxhxImRQT9tbtRhqNLmqRvo62qFKJgSbaojqQ8oEk2dbT3H1IJjmKhgs3VjZxOetAymQFYfvoxxDC48wldD9cuMewiY+RAymTLQXto+7j6TJJdxwuXO/PxP2bAymDG4S9Tia+pBnbFx0qrN7B4VC9dsWYIA6kDPZgRwNaKUr8TOj2EhspmYPTT74veXbmmeYOBwdSxkkKE6v54WdsXXzo1j5KwrwBem+30Ri3qvxWiKsQV4dmwbv8CdtJzaW7AymDjQUvE00YyBlbVxkq6bhp3fnegZTBIpJAan3wGdtWGyp4ldDcceNAymATwS/orsKCLpF4Sx8mB1IbIDXX6TO2rTbUgXSVtJt2NkgVOnEg3SRHSoVbNS+I4hIp43srqNo5kOQbGN9qGQXuQHIgZVBAdqhLJFft1nKUS6QbiYTyxg/WEhP1Llp7QV0iZZyioGrnXjsH0hLnbdrZsJkv6NIp1vh3v0far2onBqQtl95KBaGghHfVLoHozYkU1+ixdgmnlTjEY+0WCbVp1e4brjewSIWEAR79TbSZlBR3NiRw/EgioXDHZg4/Y+viQz0faZGkm5ZIqHwDIElUwDGjsi4eqcIAz5BdJOp2gYStSxrIRAT1rmmK9OJxKgwQto9MpKS4apfJKIIuW7zZqwhl0n9muAnJ7kDKPEhh3d4EE2SSYPVwYbXORJSIAymTLbzSaibBJsMVuviZ8H46kAr4QtBOwtt3FS4kGF8H2jVPnxh5dCWvRjDttp0N7HD4mYjuFWBw7hEwwyZ6xi7RQ7guoKmPkEukpdOf+Xfvj1RANJ0uh94fKeMoTBrkwuqdd+zLYAgeCpp5x74MulkFkqR6F/V97yGbzhimbEtX7dIP7mSksPcuzv0uhHC/cElmH/Ou5kVHs31nw8hT8zsRfV5EpvmHoK7gXuSp4JxNp1KwJw/Su3VG7JSoLpFWsBnXHEB/I4nYu7iSzXjxFLx0kUYmLmHHrONAWgEkdoVLlegar6T73kkcT/ersMSOtqSJvrEOpJXgmRDwGRfwkJRKkWG6DGpVBBHoYk4a8QfVL2TX4krYFd61ZFIGkZlIBreR1qJm5nnWj+EgkJZKXUkmjqNDXQtJB8zYdvwQQniocISrp3QbaTUJbyYYhkHagzeVTKa9ecofE5OeOreRhMAzISTS0F8qSaUomf4goochhL8VtlA8pcI90XQt5iM/XCIVs8/5gxUYKgLqWQjhleDSi6biOyI4Wz5R/IBgbVDp7hQtstJDDiRhQiureGN74S8ietoiVZ3vh2ALfaYMoPjhMOfudmeDMHBmCKqt4k1tJwDqeQjhrfLWYAdib0/YmaDhWOlOpYsLdomkwH1cSBL5SjWYLX61/yEigOmNZJNndmfjjuRRBRVu+pFAYGoXsYcOJAUgsRdPOjo8daUwzAEqVCf6Df/N6RvEatsXRHSXiCCBtO2fS/syFd29RHwH0hKFCv9d+WIyZ1UAVvx9uPIgwAPQ4FdLkl5ajtmL10sLdiDlsGTmWOH6bZlv73Z4l3GGDiRlflPKW1JedbPpu418dyBV4BkHUxKRu87FciAlnfH6QQ6mqzTsGkTsXPLo7/UwSZvBwTRLp27VufFuXCKlYUBslCFvntieVkzUpWNhbr8OpBVcUPoogymmG7R2NZduY81z8a7rfs4d15oXaj/rQNKm8JX5G0RANNzt8dUAUTcRC6kEcyClUkppXMUIaqUdZE1rPh0iazejwQ6kUsoJP1cpBUN41cnTAUAIrkUu1TjSInkC6wOFmwNgu/J17YhosxVIJ56fr4ioRn5PLb6MoDGRP6W56R6AdIPOjX7JLniAYmUi/HOvzgiACJVjUfdv8z8HkuEj5u6AD3iJvQAKAEJwLJION6nGXfj4SUb73/TFFW4PiXWj64B64ppVTHUAqAiY16hbsScARZ4RLsl2KMkMIEmHS5hob9gaaOzhQ4ZqjRTvlO1GJwLA07yGRMqCtcZoAQlG8xvBRZusrim4v6ypRlmrXzOoatpSETxIHNyl9JkelkKN80OxF0gk6POoiS31M19FRmqjJfOwpEJGK5LzIK2kgBVVtphx+wtn3JoqB1ZCM8lnmP7iggNA+pTTnKUMZHNtPCQPQnou/pAhTRzn8CXPfzvhPaibB5AAQPgQfpSs/5Dw/i6HcITKt4KLP7T0DJhQWmdE8Y0WpacEieNTbZQCwzCg60bKhyqVAgefQASSpDsQCzDTeDeVGj5uHxRQEBqHOn4RSLhU/F6QlG4nCRLTp5KhgEJHwqMZE4Ek7bm7uaQyVvda5jh8ll4pMAyDtOZ1FBgRSNIOB9D6SQjhh16J7uveHgWE1ToQ6McYVnUAkoLDAVN2VTRwe2zjOxpTQEGtw/THKJ4xkF4QkaRbcDOpyc6S/VNAwVt3Yr6MgQQ76blwBLNHOfTPg93vgLsT4hJW6q4UNDlxqB2BpKTedVfOtnuu8Q2cUUAhbQLvOLnimQJJ2quBF7pUcuZuRgGF2DrsBQIC9tHHuLEpkBAJLt2o2KVSMzbyFytJozNH2gmQlNQ7l0rOz00ooGQbnal1+Is5IGmod+7Ba8JK+36pgqcuqnVn7T3ngKTVDtLvlfbN11V3PwzDd0SEGhSSnrozb92sjRT/UqlJ8a4KbFTlGn/ZCQWUHAxRGiFi56yUwplEYjtJC82u4jnTq1NASaXDui9qVbNAUnQ6HBZDRHc8oFWdn3b5AsXS0lcrz14DUqzXJq1jXtQzd3nyvmkxCnAhH+nrm7i+q5nfF4GkLJU2WZxdjCN8omwKKPezWmyutgQkTam0uLhsavoDu6SAonMhSRph0FUgsVT6nYg+VzohB5MSYfcybYVmcODRxXroKUDSCBsan7ODaS9cL7xPjlyITeCEZz9Ol3T/uQgklkrSlVemm3abSYsNNjqvsk10VOlSK2KlAgnFDKXzOWbBxH15vKjhRgEgsS3FqIXp8pIzF5KAxFIJGbT3FEIupovHPROaXB1D1CWI73NsgwIVm7xlFfBJBlIFx8PUbnrhxVO2wfwSuxjZQ59U+JgnORjG+8oFUg0Vb6yfbroFowSD7WEOxWiFOfIdekaFEB7m0DYLSCyVtOLwLq3bg11zTnRDYxs1v07y0k3JnA0kBhNylnC3pBE+dOkrgb+H8YcQEP9tmALskUMwQO3eUmcp5KlkLgJSZXtpajsdAIWKRx74mnrMfYxrCCAQKNsuKraRxg9WCMtYOv3D3RMDCo20/NchBZiPHhERysHVcCRc0nhWNaMulkgslbSyaXNYIjbYekdE3lwrh3KNxrIHDh0MwT+11bfprkWCAVYBicGkHUKUe9wgDLrW4R4KwMJ//95j0+FcwkmP5zg41JUHYG5xl8IYt1nLvr62LREQ4QWrgcRg0owSlzjfKLXiXHCrT/9O4j0+x3kTLwuAuXQuRR66uclEgNQJmJzJnQJjCohmaosBycHkXNoJBaLqL1ruQBRIDKbaF7adnJ8v0wAFxGyi6V7EgWTIm2fg3HwJhiigBiIxZ8McsSolXRk6J1+KYQqoJ4+qSKRIUHZ/xgxGy94bwzzgS1tJAYBotqjjynlPHlcF0ghQ1t3jkjT1uWxQIDoV7te4Q6wCpJHdhOTAVmEgNo7XV1GDAtUzBqoBaSSdoOrdrhg5XuPg/B02KBCl0NO5+tyaS6wOJJZOCFCEuufSSfN09zV3dSk0Jm8TILnttC8OV94tANQ8k7opkFg6IagRtpOre8oct7Hpm6lxc3RsDqSRdIJ7HOqeA2pjHC+8nQggJHa+Ep67eDozQJoA6gmX/sJf+/1T8fFu6sGowgFAZ42+Wu/UHJDGBOFCgMiedKdEa05p8/5x0uZLy7UOTQNpJKVQBgwZlS3Tkduw0v7eGsGDNAeAx5z0MW0jpfLLTJqyq3+pxLM7LoLnA0pj9wIeM+5viXPlyjN3DaYxS2xvi3NE0IzLAbyvEcajScwuVLscAnBVGrjUoQ6iTkB0VsAb6L+6FBin9KN+BpojfOwdNHMk/D9LdDDvWpz9ZgAAAABJRU5ErkJggg=="/></defs></svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data(){
      return{
        links:[
          {link:'https://www.instagram.com/p/CLa7LzkHt_k/?utm_source=ig_web_copy_link'},
          {link:'https://www.instagram.com/p/CP1NNtDFyUO/?utm_source=ig_web_copy_link'},
          {link:'https://www.instagram.com/p/CDMOQIOn9D5/?utm_source=ig_web_copy_link'},
          {link:'https://ekster.com/pages/ekster-all-collections?utm_source=facebook&utm_medium=structured.social&nbt=nb%3Afb%3A%7B%7Bsite_source_name%7D'}
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
.gallery {
  padding: 50px 0;
  @media(min-width: 768px) {
    padding: 100px 0;
  }
  @media(min-width: 992px) {
    padding: 150px 0;
  }
  &-row {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 30px;
    grid-column-gap: 0;
    text-align: center;
    @media(min-width:768px){
      grid-template-columns: repeat(4, 1fr);
      grid-column-gap: 30px;
    }
  }
  &-item {
    position: relative;
    margin: 0 auto;
    @media(max-width:767px){
      width: 240px;
    }
    &:hover .gallery-overlay {
      opacity: 1;
    }
  }
  &-img {
    display: block;
    width: 100%;
    height: auto;
  }
  &-overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .3s ease;
    background: rgba(0, 0, 0, .5);
  }
  &-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 30px;
    height: 30px;
  }
}
</style>
