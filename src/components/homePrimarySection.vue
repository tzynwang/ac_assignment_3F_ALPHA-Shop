<template>
  <section class="primary">
    <div class="primary__container--main">
      <img
        class="primary__product-photo"
        :src="require('@/assets/images/primary-main.jpg')"
        alt="primary section product photo"
      />
    </div>
    <div class="primary__container--secondary">
      <img
        class="primary__product-photo"
        :src="require('@/assets/images/primary-secondary.jpg')"
        alt="primary section product photo"
      />
    </div>
    <div class="primary__container--sub">
      <img
        class="primary__product-photo"
        :src="require('@/assets/images/primary-sub-1.jpg')"
        alt="primary section product photo"
      />
    </div>
    <div class="primary__container--sub">
      <img
        class="primary__product-photo"
        :src="require('@/assets/images/primary-sub-2.jpg')"
        alt="primary section product photo"
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
.primary {
  padding: 8vh 0; // 80vh * 10%
  margin-top: -16vh;

  [class^="primary__container"] {
    overflow: hidden;
  }

  &__container--main {
    height: 90vh;
  }

  &__container--secondary {
    height: 60vh;
  }

  &__container--sub {
    height: 33vh;
  }

  &__product-photo {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    object-position: center top;
  }
}

@media screen and (min-width: 768px) {
  .primary {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 40vh);
    grid-template-areas:
      "primary primary secondary secondary"
      "primary primary sub-1 sub-2";

    [class^="primary__container"] {
      height: 100%;
    }

    &__container--main {
      grid-area: primary;
    }

    &__container--secondary {
      grid-area: secondary;
    }

    &__container--sub {
      &:first-child {
        grid-area: sub-1;
      }
      &:last-child {
        grid-area: sub-2;
      }
    }
  }
}
</style>