<template>
  <header class="container">
    <!-- nav toggle -->
    <label for="navListToggle" class="nav-toggle-label">
      <img
        :src="require(`@/assets/images/${getNavMenuIcon}`)"
        class="nav-toggle-label-icon"
      />
    </label>
    <input
      type="checkbox"
      id="navListToggle"
      class="nav-toggle-btn"
    />
    <!-- nav list -->
    <nav class="header__nav">
      <!-- category -->
      <ul class="nav__list-container category">
        <li class="nav__list-container__item">
          <a href="#">男款</a>
        </li>
        <li class="nav__list-container__item">
          <a href="#">女款</a>
        </li>
        <li class="nav__list-container__item">
          <a href="#">最新消息</a>
        </li>
        <li class="nav__list-container__item">
          <a href="#">客製商品</a>
        </li>
        <li class="nav__list-container__item">
          <a href="#">聯絡我們</a>
        </li>
      </ul>
      <!-- operation -->
      <ul class="nav__list-container operation">
        <li class="nav__list-container__item search-container">
          <a href="#">
            <label
              class="search-input-label"
              for="searchInput"
            >
              <img
                class="nav__icon"
                :src="require(`@/assets/images/${getNavSearchIcon}`)"
                alt="nav bar search icon"
              />
            </label>
            <input class="search-input" type="text" id="searchInput" />
          </a>
        </li>
        <li class="nav__list-container__item">
          <a href="#">
            <img
              :src="require(`@/assets/images/${getNavChartIcon}`)"
              alt="nav bar chart icon"
            />
          </a>
        </li>
        <li class="nav__list-container__item">
          <label for="darkModeSwitch" class="dark-mode-switch-label">
            <input
              type="checkbox"
              id="darkModeSwitch"
              @change="darkModeMethod($event)"
            />
            <img
              class="nav__icon"
              :src="require(`@/assets/images/${getNavModeIcon}`)"
              alt="nav bar mode switch icon"
            />
          </label>
        </li>
      </ul>
    </nav>
    <!-- logo -->
    <div class="header__logo">
      <img
        class="header__logo--image"
        :src="require(`@/assets/images/${getLogoSrc}`)"
        alt="nav bar logo"
      />
    </div>
  </header>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "headerNav",
  methods: {
    ...mapActions(["setMode"]),
    darkModeMethod (event) {
      event.target.checked ? this.setMode("dark") : this.setMode("default")
    }
  },
  computed: {
    ...mapGetters([
      "getLogoSrc",
      "getNavSearchIcon",
      "getNavChartIcon",
      "getNavModeIcon",
      "getNavMenuIcon",
    ]),
  },
};
</script>

<style>
</style>