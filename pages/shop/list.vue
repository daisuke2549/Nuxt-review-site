<template>
  <div>
    <div class="content-title">
      <h2>人気のお店</h2>
      <p>クリックするとお店の詳細画面に遷移します</p>
    </div>
    <div class="shop-list">
      <div v-for="shop in shops" :key="shop.index">
        <Shop
          :image="shop.image"
          :shopName="shop.shopName"
          :score="shop.score"
          :description="shop.description"
        />
      </div>
    </div>
  </div>
</template>
 
<script lang="ts">
import Vue from 'vue'
 
export interface Shop {
  image?: string
  shopName?: string
  score?: Number
  description?: string
}
 
export default Vue.extend({
  data: () => ({
    shops: [] as any,
  }),
  created() {
    const shop: Shop = {
      image: '/shop.jpeg',
      shopName: 'ナクストコーヒー',
      score: 3,
      description:
        '東京で人気沸騰中！リーズナブルな価格で本格的な入れたての美味しいコーヒーが飲めるお店。',
    }
 
    for (let i = 0; i < 21; i++) {
      this.shops.push(shop)
    }
  },
})
</script>
 
<style>
.content-title {
  font-size: 24px;
  padding: 12px;
}
.content-title h2{
  margin-bottom:0px !important;
}
 
.shop-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
