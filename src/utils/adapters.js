const fillToTwoDigits = number => {
  return number > 9 ? number : "0" + number
}

export const parseServerData = db => {
  return db.flatMap(user =>
    user.posts.map(post => ({
      ...post,
      user: {
        ...user.user,
        id: user.id
      },
      type: user.type
    }))
  )
}
export const setClientTime = time => {
  const date = new Date(time)
  return `${fillToTwoDigits(date.getDate())}.${fillToTwoDigits(
    date.getMonth()
  )}.${date.getFullYear()}`
}

export const setServerTime = time => {
  const date = new Date(time)
  return `${fillToTwoDigits(date.getFullYear())}.${fillToTwoDigits(
    date.getMonth()
  )}.${date.getDate()}`
}

export const setUserCardName = userName => {
  const [surname, name, midname] = userName.split(" ")
  return `${name || ""}_${surname}`
}