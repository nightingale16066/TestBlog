<template>
  <div>
    <img class="promo" src="@/assets/main/promo.svg" alt="" />
    <div class="top-list">
      <span class="header">_топ_блогеров</span>
      <div class="list">
        <User
          class="user-info"
          v-for="user in users"
          :key="user.fullName"
          :user="user"
        />
      </div>
    </div>
  </div>
</template>

<script scoped>
import User from "@/components/home/components/User.vue"
import { getTopUsers } from "@/utils/localStorage"

export default {
  components: {
    User
  },
  data() {
    return {
      users: getTopUsers()
    }
  }
}
</script>

<style scoped>
.promo {
  width: 300px;
  height: 300px;
  margin-bottom: 40px;
}
.top-list {
  padding: 20px;
  border: 1px solid #00aee54d;
  border-radius: 12px;
  width: 300px;
}
.header {
  display: inline-block;
  background-color: #00aee5;
  color: white;
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  text-transform: uppercase;
  margin-bottom: 20px;
}
.user-info {
  padding-bottom: 16px;
  border-bottom: 1px solid #00aee54d;
}
.user-info:not(:first-child) {
  padding-top: 16px;
}
.user-info:last-child {
  border: none;
}
</style>
