export function getCharacters(filters: Record<string, string>, page = 1) {
  const filterKeys = Object.keys(filters)
  let st = ''
  for (const key of filterKeys) {
    st += `&${key}=${filters[key]}`
  }
  return fetch(
    `https://rickandmortyapi.com/api/character?page=${page}${st}`
  ).then((response) => {
    if (response.ok) {
      return response.json()
    }
    return Promise.reject(new Error(`произошла ошибка`))
  })
}

// export function getSelectedCharacters(ids: string[]): Promise<ICharacter[]> {
//   return fetch(`https://rickandmortyapi.com/api/character/${ids}`).then(
//     (response) => {
//       if (response.ok) {
//         return response.json()
//       }
//       return Promise.reject(new Error(`произошла ошибка`))
//     }
//   )
// }

export function getEpisode(filters: Record<string, string>, page = 1) {
  const filterKeys = Object.keys(filters)
  let st = ''
  for (const key of filterKeys) {
    st += `&${key}=${filters[key]}`
  }

  return fetch(
    `https://rickandmortyapi.com/api/episode?page=${page}${st}`
  ).then((response) => {
    if (response.ok) {
      return response.json()
    }
    return Promise.reject(new Error(`произошла ошибка`))
  })
}
