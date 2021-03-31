import React from "react"
import "./Images.css"
import { graphql, useStaticQuery } from "gatsby"
import img from "../images/image3.jpg"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

const getImages = graphql`
  {
    fluid: file(relativePath: { eq: "image1.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`

const Images = () => {
  const data = useStaticQuery(getImages)
  const image = getImage(data.fluid)

  return (
    <section className="images">
      <article className="single-image">
        <h3>Basic Image</h3>
        <img src={img} width="100%" alt="image3" />
      </article>
      <article className="single-image">
        <h3>Fixed Image/Blur</h3>
        <StaticImage
          src="../images/image2.jpg"
          alt="image2"
          layout="fixed"
          placeholder="blurred"
          width={300}
          height={400}
        />
      </article>
      <article className="single-image">
        <h3>Fluid Image/Blur</h3>
        <GatsbyImage image={image} alt="image1" />
      </article>
    </section>
  )
}

export default Images
