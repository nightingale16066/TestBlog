<template>
  <div class="wrapper">
    <p class="date title-3">{{ setClientTime(post.date) }}</p>
    <div class="content">
      <p class="post-title">{{ post.title }}</p>
      <p class="subtitle-2">{{ post.briefDescription }}</p>
    </div>
    <div class="buttons">
      <div class="custom-button" @click="editPost">Редактировать</div>
      <div class="custom-button-2" @click="handleDelete">Удалить</div>
    </div>
  </div>
</template>

<script>
import { setClientTime } from "@/utils/adapters"
import { deletePost } from "@/utils/localStorage"

export default {
  props: ["post"],
  methods: {
    setClientTime,
    deletePost,
    handleDelete() {
      deletePost(this.$route.params.userId, this.post.id)
      this.$emit("update")
    },
    editPost() {
      this.$emit("edit", this.post)
    }
  }
}
</script>

<style scoped>
.wrapper {
  padding: 15px 0;
}
.content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin: 10px 0 5px;
}
.post-title {
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #0b1823;
}
.buttons {
  display: flex;
  gap: 16px;
}

@media screen and (max-width: 768px) {
  .content {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }
}
</style>
