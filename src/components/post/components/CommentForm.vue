<template>
  <form class="form" ref="form">
    <div class="title-1">Добавление комментария</div>
    <div class="input-wrapper">
      <input
        type="text"
        class="input input-user"
        maxlength="50"
        required
        placeholder="ФИО"
        v-model="model.user"
      />
      <input
        type="email"
        class="input input-email"
        maxlength="50"
        placeholder="Email"
        v-model="model.email"
      />
    </div>
    <textarea
      class="textarea"
      name="comment"
      id=""
      rows="6"
      required
      placeholder="Коментарий"
      v-model="model.comment"
    ></textarea>
    <button class="button" @click="handleAdd">Добавить</button>
  </form>
</template>

<script>
import { addComment } from "@/utils/localStorage"

export default {
  data() {
    return {
      model: this.resetModel()
    }
  },
  methods: {
    addComment,
    resetModel() {
      return {
        user: "",
        email: "",
        comment: ""
      }
    },
    handleAdd(event) {
      event.preventDefault()
      if (!this.$refs.form.reportValidity()) {
        return
      }
      this.addComment(
        { userId: this.$route.params.userId, postId: this.$route.params.id },
        this.model
      )
      this.$emit("update")
      this.model = this.resetModel()
    }
  }
}
</script>

<style scoped>
@import "@/style/font.css";
input:invalid,
textarea:invalid {
  border: 1px solid #005d79;
}

.title-1 {
  color: #00aee5;
  margin-top: 15px;
}
.form {
  width: 600px;
}
.input-wrapper {
  margin: 5px 0;
  width: 100%;
  display: flex;
  gap: 5px;
}
.input,
.textarea {
  padding: 10px;
  border: 1px solid #00aee54d;
  border-radius: 2px;
  flex-grow: 1;
}
.input:first-child {
  margin-right: 5px;
}
.textarea {
  width: 100%;
}
.button {
  padding: 10px 12px;
  color: white;
  background-color: #00aee5;
  border: none;
  border-radius: 2px;
  text-align: center;
}
@media screen and (max-width: 768px) {
  .form {
    width: auto;
  }
  .input-wrapper {
    flex-direction: column;
  }
}
</style>
