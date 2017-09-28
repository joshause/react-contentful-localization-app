import React from 'react'
import { getPosts } from '../lib/contentful'
import '../styles/PostList.css'

class PostList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { posts: [] }
  }

  componentDidMount() {
    getPosts()
      .then(response => {
        const posts = response.items.map(item => item.fields)
        this.setState({ posts })
      })
      .catch(error => {
        console.error(error)
      })
  }

  render() {
    let locale = this.props.locale
    let i = 0
    const postNodes = this.state.posts.map(post => {
      i++
      return <div key={i} className="post-list-title">{post.title[locale]}</div>
    })

    return (
      <div className="post-list-container">
        {postNodes}
      </div>
    )
  }
}

export default PostList
