import Link from 'next/link'

export default function Post({ post }) {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>{post.Title}</h1>
                    <p>
                        {post.Content}
                    </p>
                    <Link href="/">
                        <a className="btn btn-primary">go to post list</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

//tell next.js how many pages there in api
export async function getStaticPaths() {
    const res = await fetch('http://localhost:1337/posts')

    const posts = await res.json()

    const paths = posts.map((post) => ({
        params : {slug : post.Slug}
    }))

    return {
        paths,
        fallback : false,
    }
}

//for each individual page : get the data for that page

export async function getStaticProps({ params }) {
    const {slug} = params
    const res = await fetch(`http://localhost:1337/posts?Slug=${slug}`)

    const data = await res.json()

    const post = data[0]

    return {
        props : {post}
    }
}