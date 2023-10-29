<template>
  <section>
    <header class="header">
      <div class="description">
        <div class="title-5">{{ userInfo.user.blogName }}</div>
        <div class="custom-button" @click="openModal(null)">
          + Новая запись
        </div>
      </div>
      <div class="user-info">
        <img class="author-photo" src="@/assets/main/userPhoto.svg" alt="" />
        <div class="photo-title title-4">
          {{ setUserCardName(userInfo.user.fullName) }}
        </div>
      </div>
    </header>
    <div class="posts-wrapper" v-if="userInfo.posts.length">
      <UserPost
        class="user-post"
        v-for="post in userInfo.posts"
        :key="post.id"
        :post="post"
        @update="updateUserInfo"
        @edit="post => openModal(post)"
      />
    </div>
    <div v-else class="alternative title-4">Записей нет</div>
    <PostModal
      v-if="showModal"
      @update="updatePosts"
      :post="postToEdit"
      @close="closeModal"
    />
  </section>
</template>

<script>
import { retrieveUserInfo } from "@/utils/localStorage"
import { setUserCardName } from "@/utils/adapters"
import UserPost from "@/components/lk/components/UserPost.vue"
import PostModal from "@/components/lk/components/PostModal.vue"

export default {
  components: {
    UserPost,
    PostModal
  },
  data() {
    return {
      userInfo: null,
      showModal: false,
      postToEdit: null
    }
  },
  methods: {
    setUserCardName,
    updateUserInfo() {
      this.userInfo = retrieveUserInfo(this.$route.params.userId)
    },
    openModal(post) {
      if (post) {
        this.postToEdit = post
      }
      this.showModal = true
    },
    updatePosts() {
      this.closeModal()
      this.userInfo = retrieveUserInfo(this.$route.params.userId)
    },
    closeModal() {
      this.showModal = false
      this.postToEdit = null
    }
  },
  created() {
    this.updateUserInfo()
  }
}
</script>

<style scoped>
@import "@/style/font.css";
@import "@/style/custom.css";

.header {
  display: grid;
  grid-template-columns: 4fr 1fr;
  padding-bottom: 15px;
  border-bottom: 1px solid #00aee54d;
}

.description {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.user-post:not(:last-child) {
  border-bottom: 1px solid #00aee54d;
}
.alternative {
  margin-top: 10px;
  text-align: center;
}
.brief-description {
  padding: 15px 0;
  border-bottom: 1px solid #00aee54d;
}

.author-photo {
  width: 120px;
  height: 120px;
}
</style>
