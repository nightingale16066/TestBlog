<template>
  <div>
    <div class="card-wrapper">
      <div class="column">
        <p class="list-title">_личные блоги</p>
        <BlogCard
          class="card"
          v-for="post in userPosts"
          :key="post.id"
          :post="post"
          @card-click="handleClick(post)"
        />
      </div>
      <div class="column">
        <p class="list-title">_компании</p>
        <BlogCard
          class="card"
          v-for="post in companyPosts"
          :key="post.id"
          :post="post"
          @card-click="handleClick(post)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BlogCard from "@/components/main/components/BlogCard.vue"
import { getLocalStorageKey } from "@/utils/localStorage"
import { parseServerData } from "@/utils/adapters"

export default {
  components: {
    BlogCard
  },
  data() {
    return {
      posts: parseServerData(getLocalStorageKey("db"))
    }
  },
  computed: {
    userPosts() {
      return this.posts.filter(p => p.type === "people")
    },
    companyPosts() {
      return this.posts.filter(p => p.type === "company")
    }
  },
  methods: {
    handleClick(post) {
      this.$router.push({
        name: "post",
        params: { userId: post.user.id, id: post.id }
      })
    }
  }
}
</script>

<style scoped>
.card-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}
.card {
  margin-bottom: 16px;
}
.list-title {
  display: inline-block;
  font-size: 36px;
  font-weight: 600;
  color: white;
  background: #0b1823;
  text-transform: uppercase;
  margin-bottom: 24px;
}
.column {
  flex-grow: 1;
}

@media screen and (max-width: 768px) {
  .card-wrapper {
    display: flex;
    flex-direction: column;
  }
  .list-title {
    font-size: 30px;
  }
}
</style>
