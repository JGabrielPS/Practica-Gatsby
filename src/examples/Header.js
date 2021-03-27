import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
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

const Header = () => {
  const {
    site: {
      info: {
        title,
        person: { name, age },
      },
    },
  } = useStaticQuery(getData)

  return (
    <div>
      <h1>title: {title}</h1>
      <h1>name: {name}</h1>
      <h1>age: {age}</h1>
    </div>
  )
}

export default Header
