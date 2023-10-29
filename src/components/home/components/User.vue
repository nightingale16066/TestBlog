<template>
  <div class="wrapper">
    <img class="user-img" src="@/assets/main/userPhoto.svg" alt="">
    <div class="user-info">
      <p class="user-name title-4">{{ setUserCardName(user.fullName) }}</p>
      <p class="user-blog subtitle-2">{{ user.blogName }}</p>
    </div>
  </div>
</template>

<script>
import { setUserCardName } from '@/utils/adapters'

export default {
  props: ['user'],
  methods: {
    setUserCardName
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  gap: 10px;
}
.user-img {
  width: 50px;
  height: 50px;
}
.user-name {
  margin-bottom: 8px;
}
</style>