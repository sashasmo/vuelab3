<script setup lang="ts">
import type {User} from "@/types";

defineProps<{ item: User }>();
</script>
<template>
  <div class="bg-white shadow-md rounded-lg p-4">
    <router-link :to="`/users/${item.id}`">
      <figure>
        <img class="aspect-square" :src="item.avatar" :alt="item.name"/>
        <figcaption class="font-semibold text-center py-2">{{ item.name }}</figcaption>
      </figure>
    </router-link>
  </div>
</template>