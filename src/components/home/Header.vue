<template>
  <header>
    <div class="logo">
      <span class="logo-1">_security</span>
      <span>_lab</span>
    </div>
    <div class="nav-item">
      <span @click="redirectToMain">Блоги</span> |
      <span @click="redirectToLK">Мой блог</span>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    redirectToMain() {
      if (this.$route.name !== "main") this.$router.push({ name: "main" })
    },
    redirectToLK() {
      if (this.$route.name !== "lk")
        this.$router.push({ name: "lk", params: { userId: 1 } })
    }
  }
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 90px;
  flex-wrap: wrap;
}
.logo-1 {
  color: #01aee5;
}
.nav-item span:hover {
  cursor: pointer;
  color: #01aee5;
}

@media screen and (max-width: 768px) {
  .nav-item {
    margin-left: auto;
  }
}
</style>
