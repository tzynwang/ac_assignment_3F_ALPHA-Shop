<template>
  <div class="form-section address-into">
    <h2 class="title">寄送地址</h2>
    <div class="row-group title-and-name">
      <div class="form-row title">
        <label for="title">稱謂</label>
        <div class="select-wrapper">
          <select
            name="title"
            id="title"
            required
            @change="setInput({ field: 'title', event: $event })"
          >
            <option value="" selected disabled>請選擇</option>
            <option value="m">先生</option>
            <option value="f">小姐</option>
            <option value="na">不透露</option>
          </select>
        </div>
      </div>
      <div class="form-row name">
        <label for="name">姓名</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="請輸入姓名"
          @change="setInput({ field: 'name', event: $event })"
        />
      </div>
    </div>
    <div class="row-group tel-and-email">
      <div class="form-row">
        <label for="tel">電話</label>
        <input
          type="tel"
          name="tel"
          id="tel"
          placeholder="請輸入行動電話"
          @change="setInput({ field: 'tel', event: $event })"
        />
      </div>
      <div class="form-row">
        <label for="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="請輸入電子郵件"
          @change="setInput({ field: 'email', event: $event })"
        />
      </div>
    </div>
    <div class="row-group city-and-address">
      <div class="form-row">
        <label for="city">縣市</label>
        <div class="select-wrapper">
          <select name="city" id="city" required @change="setInput({ field: 'city', event: $event })">
            <option value="" selected disabled>請選擇</option>
            <option value="TPE">臺北市</option>
            <option value="NTPC">新北市</option>
            <option value="TYN">桃園市</option>
            <option value="TXG">臺中市</option>
            <option value="TNN">臺南市</option>
            <option value="KHH">高雄市</option>
          </select>
        </div>
      </div>
      <div class="form-row">
        <label for="address">地址</label>
        <input
          type="text"
          name="address"
          id="address"
          placeholder="請輸入地址"
          @change="setInput({ field: 'address', event: $event })"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "formAddressSection",
  methods: {
    ...mapActions(["setInput"]),
  },
};
</script>

<style>
</style>