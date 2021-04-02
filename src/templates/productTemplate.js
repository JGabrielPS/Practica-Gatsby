import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "./singleProduct.css"

const productTemplate = ({
  data: {
    product: {
      title,
      price,
      slug,
      image,
      info: { info },
    },
  },
}) => {
  const img = getImage(image)

  return (
    <Layout>
      <div style={{ textAlign: "center" }}>
        <Link to="/products">Back to Products</Link>
        <h1>Single Product: {title}</h1>
      </div>
      <section className="single-product">
        <article>
          <GatsbyImage image={img} alt={title} />
        </article>
        <article>
          <h1>{title}</h1>
          <h3>${price}</h3>
          <p>{info}</p>
          <button>Add to Cart</button>
        </article>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleProduct($slug: String) {
    product: contentfulProduct(slug: { eq: $slug }) {
      title
      price
      slug
      image {
        gatsbyImageData(width: 300, placeholder: BLURRED)
      }
      info {
        info
      }
    }
  }
`

export default productTemplate
