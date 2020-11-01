<template>
  <div>
    <AppHeader/>
    <Nuxt />
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader";
export default {
  components: {
    AppHeader
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap');
/* Variables */
:root {
    --color1: #FDE74C;
    --color2: #29535C;
    --main-color: #000;
    --bg-color: #fff;
    --brand: 48px 'Rubik Mono One', sans-serif;
    --manga-title: bold 36px 'Rubik', sans-serif;
    --headline: 24px 'Rubik Mono One', sans-serif;
    --subheadline: 18px 'Rubik', sans-serif;
    --body: 14px 'Rubik', sans-serif;
}
html {
  font: var(--body);
}
.brand {
  font: var(--brand);
}
.manga-title {
  font: var(--manga-title);
}
.headline {
  font: var(--headline);
}
.subheadline {
  font: var(--subheadline);
}
.bold {
  font-weight: bold;
}
@media screen and (min-width: 801px) {
  /* Desktop */
  html {
    font-size: 16px;
  }
}
@media screen and (max-width: 800px) {
  /* Tablets */
  html {
    font-size: 14px;
  }
}
@media screen and (max-width: 400px) {
  /* Mobiles */
  html {
    font-size: 12px;
  }
}
</style>
