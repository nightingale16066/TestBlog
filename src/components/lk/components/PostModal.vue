<template>
  <section class="modal-wrapper" @click="$emit('close')">
    <form class="form" ref="form" @click.stop>
      <div class="title-5">
        {{ post ? "Редактирование записи" : "Новая запись" }}
      </div>
      <div class="input-wrapper">
        <input
          type="text"
          class="input input-title"
          maxlength="50"
          required
          placeholder="Заголовок"
          v-model="model.title"
        />
        <textarea
          type="text"
          class="textarea textarea-bf"
          maxlength="100"
          rows="4"
          required
          placeholder="Краткое описание"
          v-model="model.briefDescription"
        ></textarea>
        <textarea
          class="textarea textarea-fd"
          name="comment"
          id=""
          rows="7"
          maxlength="255"
          required
          placeholder="Полное описание"
          v-model="model.fullDescription"
        ></textarea>
      </div>
      <div class="button custom-button" @click="handleSave">
        {{ post ? "Сохранить" : "Добавить" }}
      </div>
    </form>
  </section>
</template>

<script>
import { addPost, updatePost } from "@/utils/localStorage"

export default {
  props: ["post"],
  data() {
    return {
      model: this.resetModel()
    }
  },
  methods: {
    addPost,
    updatePost,
    handleSave(event) {
      event.preventDefault()
      if (!this.$refs.form.reportValidity()) {
        return
      }
      if (this.post) {
        this.updatePost(
          { userId: this.$route.params.userId, postId: this.post.id },
          this.model
        )
        this.$emit("update")
      } else {
        this.addPost(this.$route.params.userId, this.model)
        this.$emit("update")
      }
      this.model = this.resetModel()
    },
    resetModel() {
      return {
        title: this.post ? this.post.title : "",
        briefDescription: this.post ? this.post.briefDescription : "",
        fullDescription: this.post ? this.post.fullDescription : ""
      }
    }
  }
}
</script>

<style scoped>
@import "@/style/custom.css";

.modal-wrapper {
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0000009c;
}
.form {
  display: flex;
  flex-direction: column;
  padding: 30px 40px;
  background-color: white;
  border-radius: 16px;
  min-width: 500px;
}
.input-wrapper {
  margin-top: 25px;
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.input,
.textarea {
  padding: 10px;
  border: 1px solid #00aee54d;
  border-radius: 2px;
  flex-grow: 1;
}
.button {
  margin-left: auto;
}
@media screen and (max-width: 768px) {
  .form {
    min-width: unset;
    padding: 15px 20px;
    width: 90vw;
  }
}
</style>
