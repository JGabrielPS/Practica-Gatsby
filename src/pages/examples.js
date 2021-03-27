import React from "react"
import Header from "../examples/Header"
import Layout from "../components/layout"
import HeaderStatic from "../examples/HeaderStatic"
import { graphql } from "gatsby"

const examples = ({ data }) => {
  const {
    site: {
      info: { author },
    },
  } = data

  return (
    <Layout>
      <h1>this is our examples page</h1>
      <Header />
      <HeaderStatic />
      <h5>{author}</h5>
    </Layout>
  )
}

export const data = graphql`
  query MyQuery {
    site {
      info: siteMetadata {
        author
        data
        description
        person {
          age
          name
        }
        title
      }
    }
  }
`
export default examples
