import Head from 'next/head'
import Link from 'next/link'

export default function Home({posts}) {
    console.log('i am on the client')
  return (
      <div className="container">
          <div className="row">
              {
                  posts && posts.map(post => (
                      <div key={post.id} className="col-4 py-2">
                          <div className="card">
                              <div className="card-body">
                                  <h5 className="card-title">{post.Title}</h5>
                                  <p className="card-text">{post.Content}</p>
                                  <Link href={`/${post.Slug}`}>
                                    <a className="btn btn-primary">
                                        go to post
                                    </a>
                                  </Link>
                              </div>
                          </div>
                      </div>
                  ))
              }
          </div>
          
    </div>
  )
}

export async function getStaticProps() {
    
    //get post from strapi api
    const res = await fetch('http://localhost:1337/posts')
    const data = await res.json();

    return {
        props: {posts : data}
    }
}
