<template>
  <div id="app">
    <Header class="header-app" />
    <SideBar class="sidebar-app" />
    <router-view class="view" />
  </div>
</template>

<script>
import Header from "@/components/home/Header.vue"
import SideBar from "@/components/home/SideBar.vue"
import { getLocalStorageKey, setLocalStorageKey } from "@/utils/localStorage"
import db from "@/data/db.json"

export default {
  components: {
    Header,
    SideBar
  },
  created() {
    if (!getLocalStorageKey()) {
      setLocalStorageKey("db", JSON.stringify(db))
    }
  }
}
</script>

<style>
@import "@/style/font.css";

* {
  box-sizing: border-box;
  font-family: "Fira Code", monospace;
}
p {
  padding: 0;
  margin: 0;
}
body {
  background: linear-gradient(#00aee533 20%, #ffffff);
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100%;
  padding: 0 40px;
}
#app {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-areas:
    "header header"
    "sidebar view";
  background-image: url("@/assets/main/logo.svg");
  background-repeat: no-repeat;
  background-position: center top;
}
.header-app {
  grid-area: header;
  margin-bottom: 20px;
}
.sidebar-app {
  grid-area: sidebar;
  margin-right: 40px;
}
.view {
  grid-area: view;
  margin-top: 50px;
}

@media screen and (max-width: 768px) {
  body {
    padding: 0 4px;
  }
  #app {
    display: flex;
    flex-direction: column;
    background-size: 90%;
  }
  .sidebar-app {
    display: none;
  }
  .view {
    margin-top: 10px;
  }
}
</style>
