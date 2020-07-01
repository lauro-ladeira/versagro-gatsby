import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

const AgricuturalMachineImage = () => {
  const { agricuturalMachineImage } = useStaticQuery(
    graphql`
      query {
        agricuturalMachineImage: file(
          relativePath: { eq: "agricultural-machine.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 300, maxHeight: 196) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <S.AgricuturalMachineImageWrapper
      fluid={agricuturalMachineImage.childImageSharp.fluid}
      style={{ width: "300px" }}
    />
  )
}

export default AgricuturalMachineImage
