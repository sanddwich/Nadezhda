import React from 'react'
import { Helmet } from 'react-helmet'

interface HelmetMetaTagsProps {}

interface HelmetMetaTagsState {}

class HelmetMetaTags extends React.Component<HelmetMetaTagsProps, HelmetMetaTagsState> {
  render() {
    return (
      <Helmet>
        <meta charSet="utf-8" />
        <title>База отдыха "Надежда"</title>
        <meta name="description" content="База отдыха 'Надежда'. Астраханская область, Камызякский район, с. Жан-Аул" />
        <meta
          name="keywords"
          content="база астрахань, база отдыха, рыбалка, подводная охота, охота, зимняя рыбалка, отдых, охота на утку, надежда, аренда домиков"
        />
        <meta name="robots" content="all" />
        <meta name="author" content="DeeDesign" />
      </Helmet>
    )
  }
}

export default HelmetMetaTags
