import Head from 'next/head'
// import Link from 'next/link'

// data
import { getAllPosts } from '../../lib/api'

// styles
import blogStyles from '../../styles/Blog.module.css'

//


const Blog = ({ allPosts: { edges } }) => {
  console.log(edges)
  return (

    <div>
      <Head>
        <title>Blog articles page</title>
        <link rel='icon' href='/favicon.ico'/>
      </Head>

      <main>
        <h1>Latest blog articles</h1>
        <hr/>
        <section>
          {edges.map(({ node }) => (
            <div className={blogStyles.listitem} key={node.id}>
              <div className={blogStyles.listitem__content}>
                <h2>{node.title}</h2>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
};



// don't forget to export it as the default export!
export default Blog;


export async function getStaticProps () {
  const allPosts = await getAllPosts()
  return {
    props: {
      allPosts
    },
    revalidate: 1
  }
}