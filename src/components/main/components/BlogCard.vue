<template>
  <div class="card" v-if="post" @click="$emit('card-click')">
    <div class="header title-3">
      <div class="card-date">{{ setClientTime(post.date) }}</div>
      <div class="comments">
        <div class="comments-number">{{ post.comments.length }}</div>
        <div class="comments-icon"></div>
      </div>
    </div>
    <div class="card-title title-1">{{ post.title }}</div>
    <div class="brief-description subtitle-1">{{ post.briefDescription }}</div>
    <div class="author-info">
      <div>
        <div class="author-name title-2">
          {{ setUserCardName(post.user.fullName) }}
        </div>
        <div class="author-blog subtitle-2">{{ post.user.blogName }}</div>
      </div>
      <div class="author-picture">
        <img src="@/assets/main/userPhoto.svg" alt="user photo" />
      </div>
    </div>
  </div>
</template>

<script>
import { setClientTime, setUserCardName } from "@/utils/adapters"

export default {
  props: ["post"],
  methods: {
    setClientTime,
    setUserCardName
  },
  created() {}
}
</script>

<style scoped>
@import "@/style/font.css";
.card {
  border-radius: 3px;
  border: 1px solid #00aee54d;
  box-shadow: 8px 8px #0089b529;
  padding: 16px;
  width: 100%;
}
.header {
  display: flex;
  justify-content: space-between;
}
.card-title {
  padding-top: 8px;
}
.brief-description {
  padding-top: 4px;
  padding-bottom: 8px;
  border-bottom: 1px solid #00aee54d;
}
.author-info {
  padding-top: 16px;
  display: flex;
  justify-content: space-between;
}
.author-picture img {
  width: 52px;
  height: 52px;
}
</style>
