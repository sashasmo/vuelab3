<script setup lang='ts'>

import { onMounted, ref } from 'vue'
import type { Category, Product, User } from '@/types'
import serviceProvider from '@/services'
import CategoryWrapper from '@/components/category/CategoryWrapper.vue'
import UserWrapper from '@/components/user/UserWrapper.vue'
import ProductWrapper from '@/components/product/ProductWrapper.vue'

const categories = ref<Category[]>([])
const users = ref<User[]>([])
const products = ref<Product[]>([])
const loading = ref<boolean>(false)
const fetchCategories = async () => {
  try {
    loading.value = true;
    [categories.value, users.value, products.value] = await Promise.all([
      await serviceProvider.getCategoriesService().get({ limit: 4, offset: 0 }),
      await serviceProvider.getUsersService().get({ limit: 4, offset: 0 }),
      await serviceProvider.getProductsService().get({ limit: 4, offset: 0 })
    ])
  } catch (e) {
    console.error(e)
  } finally {
    loading.value = false
  }
}
onMounted(() => {
  fetchCategories()
})
</script>

<template>
  <main class='container mx-auto'>
    <h1 class='text-center font-semibold p-8'> My Shop Products Categories </h1>
    <CategoryWrapper :items='categories' :loading='loading' />
    <h1 class='text-center font-semibold p-8'> My Shop Users </h1>
    <UserWrapper :items='users' :loading='loading' />
    <h1 class='text-center font-semibold p-8'> My Shop Products </h1>
    <ProductWrapper :items='products' :loading='loading' />
  </main>
</template>
