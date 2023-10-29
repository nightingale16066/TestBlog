<template>
  <div class="wrapper">
    <header class="header">
      <div class="description">
        <div class="title title-5">{{ post.title }}</div>
        <div class="title-3">{{ post.date }}</div>
      </div>
      <div class="user-info">
        <img class="author-photo" src="@/assets/main/userPhoto.svg" alt="" />
        <div class="photo-title title-4">
          {{ setUserCardName(post.user.fullName) }}
        </div>
        <div class="subtitle-2">{{ post.user.blogName }}</div>
      </div>
    </header>
    <div class="brief-description title-2">{{ post.briefDescription }}</div>
    <div class="article-text full-text">{{ post.fullDescription }}</div>
    <div class="comments">
      <p class="title-1">Коментарии</p>
      <div class="comments-wrapper" v-if="post.comments.length">
        <Comment
          @update="updatePost"
          v-for="comment in post.comments"
          :key="comment.id"
          :comment="comment"
        />
      </div>
      <div class="alternative" v-else>Коментариев нет</div>
      <CommentForm @update="updatePost" />
    </div>
  </div>
</template>

<script>
import { retrievePostInfo, updatePost } from "@/utils/localStorage"
import { setUserCardName } from "@/utils/adapters"
import Comment from "@/components/post/components/Comment.vue"
import CommentForm from "@/components/post/components/CommentForm.vue"

export default {
  components: {
    Comment,
    CommentForm
  },
  data() {
    return {
      post: null
    }
  },
  methods: {
    setUserCardName,
    updatePost() {
      this.post = retrievePostInfo(
        this.$route.params.userId,
        this.$route.params.id
      )
    }
  },
  created() {
    this.updatePost()
  }
}
</script>

<style scoped>
@import "@/style/font.css";
.header {
  display: grid;
  grid-template-columns: 4fr 1fr;
  padding-bottom: 15px;
  border-bottom: 1px solid #00aee54d;
}
.alternative {
  text-align: center;
}
.description {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.brief-description {
  padding: 15px 0;
  border-bottom: 1px solid #00aee54d;
}

.full-text {
  margin-top: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #00aee54d;
}

.user-info {
  flex-grow: 1; /* later change */
}

.title {
  margin-bottom: 20px;
}

.photo-title {
  padding: 8px 0;
}

.author-photo {
  width: 120px;
  height: 120px;
}

.comments {
  margin-top: 15px;
}
.comments p {
  color: #00aee5;
  margin-bottom: 10px;
}
.comments-wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
}
@media screen and (max-width: 768px) {
  .header {
    display: flex;
    flex-direction: column;
  }
  .author-photo {
    display: none;
  }
}
</style>
