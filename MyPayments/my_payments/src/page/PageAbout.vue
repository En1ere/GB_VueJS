<template>
  <section class="about">
    <h3 class="about__head">About Us</h3>
    <p class="about__text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eligendi
      odio, voluptatibus error voluptatum reiciendis labore optio debitis!
      Officia voluptatem pariatur sit aliquid, nihil expedita porro inventore
      molestias non sunt.
    </p>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>

<style lang='scss'>
.about {
  box-shadow: 0px 0px 10px -4px rgb(96, 96, 96);
  margin-left: 50px;
  width: 800px;
  padding: 50px;
  &__head {
    font-size: 20px;
    font-weight: 600;
    color: black;
  }
  &__text {
    font-size: 18px;
    font-weight: 400;
    font: italic;
    color: rgb(48, 48, 48);
  }
}
</style>