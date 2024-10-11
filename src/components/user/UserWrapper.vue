<!-- src/components/user/UserWrapper.vue -->
<script setup lang="ts">
import type {UserWrapperProps} from "@/components/user/types";
import UserCard from "@/components/user/UserCard.vue";
import UserSkeleton from "@/components/user/UserSkeleton.vue";

withDefaults(defineProps<UserWrapperProps>(), {
  items: () => [],
  loading: false
});
</script>
<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <template v-if="!loading">
      <UserCard
        v-for="user in items"
        :key="user.id"
        :item="user"
      />
    </template>
    <template v-else>
      <UserSkeleton v-for="index in 4" :key="index"/>
    </template>
  </div>
</template>