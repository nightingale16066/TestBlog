import {
  setServerTime
} from "@/utils/adapters"

export const getLocalStorageKey = key => JSON.parse(localStorage.getItem(key))

export const setLocalStorageKey = (key, value) => {
  localStorage.setItem(key, value)
}

export const retrievePostInfo = (userId, postId) => {
  const user = getLocalStorageKey("db").find(u => u.id === Number(userId))
  const post = {
    ...user.posts.find(p => p.id === Number(postId)),
    user: user.user
  }
  return post
}

export const retrieveUserInfo = userId => {
  return getLocalStorageKey("db").find(u => u.id === Number(userId))
}

export const addComment = (ids, model) => {
  const db = getLocalStorageKey("db")
  const user = db.find(u => u.id === Number(ids.userId))
  const post = {
    ...user.posts.find(p => p.id === Number(ids.postId)),
    user: user.user
  }
  post.comments.push({
    ...model,
    id: new Date().getTime()
  })
  setLocalStorageKey("db", JSON.stringify(db))
}

export const getTopUsers = () => {
  return getLocalStorageKey("db").map(user => user.user)
}

export const addPost = (userId, postData) => {
  const db = getLocalStorageKey("db")
  const user = db.find(u => u.id === Number(userId))
  user.posts.push({
    ...postData,
    id: new Date().getTime(),
    date: setServerTime(new Date()),
    comments: []
  })
  setLocalStorageKey("db", JSON.stringify(db))
}

export const deletePost = (userId, postId) => {
  const db = getLocalStorageKey("db")
  let userInfo = db.find(u => u.id === Number(userId))
  userInfo.posts = userInfo.posts.filter(p => p.id !== Number(postId))
  setLocalStorageKey("db", JSON.stringify(db))
}

export const deleteComment = (userId, postId, commentId) => {
  const db = getLocalStorageKey("db")
  let post = db
    .find(u => u.id === Number(userId))
    .posts.find(p => p.id === Number(postId))
  post.comments = post.comments.filter(c => c.id !== commentId)
  setLocalStorageKey("db", JSON.stringify(db))
}

export const updatePost = (ids, model) => {
  const db = getLocalStorageKey("db")
  const user = db.find(u => u.id === Number(ids.userId))
  const postIndex = user.posts.findIndex(p => p.id === Number(ids.postId))
  user.posts[postIndex] = {
    ...user.posts[postIndex],
    ...model,
    date: setServerTime(new Date())
  }
  setLocalStorageKey("db", JSON.stringify(db))
}