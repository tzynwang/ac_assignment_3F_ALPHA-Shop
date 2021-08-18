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
    border-radius: unset;

    position: relative;
    padding: 1rem 3rem;

    letter-spacing: 0.5rem;
    text-transform: uppercase;

    color: #fff;
    background-color: var(--primary-pink);

    transition: 0.3s ease-out;
    animation: moveFromBottom 0.75s ease-out;
    animation-fill-mode: backwards;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      background-color: var(--primary-pink);
      transition: 0.3s ease-out;
    }

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 4px 8px 2px var(--dark-60);

      &::after {
      content: "";
      transform: scale(1.2, 1.4);
      opacity: 0;
    }
    }

    &:active {
      transform: translateY(0);
      box-shadow: 0 2px 6px 0 var(--dark-60);
    }
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

    animation: moveFromLeft 0.75s ease-out;
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