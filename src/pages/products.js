import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "./Products.css"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ComponentName = ({ data }) => {
  const {
    allContentfulProduct: { nodes: products },
  } = data

  return (
    <Layout>
      <section className="page">
        {products.map(product => {
          const {
              id,
              title,
              price,
              slug,
              image,
              info: { info },
            } = product,
            img = getImage(image)

          return (
            <article key={id}>
              <GatsbyImage image={img} alt={title} />
              <h3>
                {title}
                <span> ${price}</span>
              </h3>
              <Link to={`/products/${slug}`}>More Details</Link>
            </article>
          )
        })}
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        title
        price
        slug
        image {
          gatsbyImageData(placeholder: BLURRED)
        }
        info {
          info
        }
      }
    }
  }
`

export default ComponentName
