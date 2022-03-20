import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import SEO from "../components/SEO"
const ComponentName = ({ data }) => {
  const { content, title, description } = data.blog
  return (
    <Layout>
      <SEO title={title} desc={description}></SEO>
      <section className="blog-template">
        <div className="section-center">
          <article className="blog-contet">
            <ReactMarkdown source={content} />
            <Link to="/blog" className="btn center-btn">
              blog
            </Link>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
      title
      description
    }
  }
`

export default ComponentName
