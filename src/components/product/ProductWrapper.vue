<!-- src/components/product/ProductWrapper.vue -->
<script setup lang="ts">
import type {ProductWrapperProps} from "@/components/product/types";
import ProductCard from "@/components/product/ProductCard.vue";
import ProductSkeleton from "@/components/product/ProductSkeleton.vue";

withDefaults(defineProps<ProductWrapperProps>(), {
  items: () => [],
  loading: false
});
</script>
<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <template v-if="!loading">
      <ProductCard
        v-for="product in items"
        :key="product.id"
        :item="product"
      />
    </template>
    <template v-else>
      <ProductSkeleton v-for="index in 4" :key="index"/>
    </template>
  </div>
</template>