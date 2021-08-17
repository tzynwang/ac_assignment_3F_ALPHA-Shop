<template>
  <section class="landing">
    <div class="landing__container">
      <h1 class="header">
        <span class="header--main">ALPHA Shop</span>
        <span class="header--sub">summer special</span>
      </h1>
      <a href="#" class="btn">discover</a>
    </div>
  </section>
</template>

<script>
export default {
  name: "homeLanding",
};
</script>

<style lang="scss" scoped>
.landing {
  width: 100%;
  height: 80vh;
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);
  background: linear-gradient(var(--light-60), var(--light-60)),
    url("./../assets/images/landing.jpg");
  background-size: cover;
  background-position: top center;

  backface-visibility: hidden;

  &__container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .btn {
    flex: unset;
    height: unset;

    padding: 1rem 3rem;

    letter-spacing: 0.5rem;
    text-transform: uppercase;

    color: var(--dark);
    background-color: var(--primary-pink);

    animation: moveFromBottom .75s ease-out;
    animation-fill-mode: backwards
  }
}

.header {
  margin-bottom: 2rem;
  text-align: center;

  &--main,
  &--sub {
    display: block;
    color: var(--dark);
  }

  &--main {
    margin-bottom: 0.5rem;
    font-size: clamp(2rem, 9vw, 6rem);
    letter-spacing: 0.5rem;

    animation: moveFromLeft .75s ease-out;
  }

  &--sub {
    font-size: clamp(0.75rem, 4vw, 3rem);
    letter-spacing: 1.5rem;
    text-transform: uppercase;

    animation: moveFromRight 1s;
  }
}

@keyframes moveFromLeft {
    0% {
        opacity: 0;
        transform: translateX(-10rem);
    }

    80% {
        transform: translateX(1rem);
    }

    100% {
        opacity: 1;
        transform: translate(0);
    }
}

@keyframes moveFromRight {
    0% {
        opacity: 0;
        transform: translateX(10rem);
    }

    80% {
        transform: translateX(-1rem);
    }

    100% {
        opacity: 1;
        transform: translate(0);
    }
}

@keyframes moveFromBottom {
    0% {
        opacity: 0;
        transform: translateY(3rem);
    }

    100% {
        opacity: 1;
        transform: translate(0);
    }
}
</style>