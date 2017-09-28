import { createClient } from 'contentful'

export function getPosts() {

  const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
  })

  return client.getEntries({ content_type: 'post', locale: '*' })
}
