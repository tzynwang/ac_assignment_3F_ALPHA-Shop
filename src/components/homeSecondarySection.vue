<template>
  <section class="secondary">
    <div class="secondary__image-container">
      <img
        :src="require('@/assets/images/secondary-1.jpg')"
        alt="secondary product photo"
        class="secondary__image-container__image"
      />
      <img
        :src="require('@/assets/images/secondary-2.jpg')"
        alt="secondary product photo"
        class="secondary__image-container__image"
      />
      <img
        :src="require('@/assets/images/secondary-3.jpg')"
        alt="secondary product photo"
        class="secondary__image-container__image"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "homePrimarySection",
};
</script>

<style lang="scss" scoped>
.secondary {
  height: 80vh;

  background-color: var(--white);
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);

  &__image-container {
    position: relative;
    width: 100%;
    height: 100%;

    &__image {
      position: absolute;
      width: 40%;
      height: 30%;
      display: block;

      object-fit: cover;
      transition: 0.2s;

      &:first-child {
        top: 10%;
        left: 20vw;
      }

      &:nth-child(2) {
        top: 35%;
        right: 10vw;
      }

      &:last-child {
        top: 50%;
        left: 10vw;
      }

      &:hover {
        z-index: 1;
        box-shadow: 0 4px 8px var(--dark-10);
        outline: 4px double var(--dark);
        outline-offset: .5rem;
        transform: scale(1.1);
      }
    }

    &:hover &__image:not(:hover) {
      transform: scale(0.9);
    }
  }
}
</style>