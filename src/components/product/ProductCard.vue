<script setup lang="ts">
import type {Product} from "@/types";

defineProps<{ item: Product }>();
</script>
<template>
  <div class="bg-white shadow-md rounded-lg p-4">
    <router-link :to="`/product/${item.id}`">
      <figure>
        <img class="aspect-square" :src="item.images[0]" :alt="item.title"/>
        <figcaption class="font-semibold text-center py-2">{{ item.title }}</figcaption>
      </figure>
    </router-link>
  </div>
</template>