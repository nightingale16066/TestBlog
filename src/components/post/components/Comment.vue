<template>
  <div class="comment-wrapper">
    <div>
      <div class="title title-3">{{ setUserCardName(comment.user) }}</div>
      <div class="title-2">{{ comment.comment }}</div>
    </div>
    <i @click="handleDelete" class="fa-solid fa-xmark delete-sign"></i>
  </div>
</template>

<script>
import { setUserCardName } from "@/utils/adapters"
import { deleteComment } from "@/utils/localStorage"

export default {
  props: ["comment"],
  methods: {
    setUserCardName,
    deleteComment,
    handleDelete() {
      this.deleteComment(
        this.$route.params.userId,
        this.$route.params.id,
        this.comment.id
      )
      this.$emit("update")
    }
  }
}
</script>

<style scoped>
@import "@/style/font.css";

.comment-wrapper {
  padding: 10px;
  border: 1px solid #00aee5;
  border-radius: 2px;
  display: flex;
  justify-content: space-between;
}
.title {
  margin-bottom: 5px;
}
.delete-sign {
  cursor: pointer;
}
</style>
