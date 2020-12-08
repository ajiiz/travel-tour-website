import React from 'react'
import Article from './Article/Article'
import Destinations from './Destinations/Destinations'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import NavBar from './NavBar/Navbar'
import Testimonials from './Testimonials'
import Trending from './Trending/Trending'
import ArticleImage1 from '../assets/article-1.svg'
import ArticleImage2 from '../assets/article-2.svg'
import ArticleItems from './Article/ArticleItems'

const App = () => {
  return (
    <>
      <NavBar />
      <Header />
      <Article
        image={ArticleImage1}
        header={ArticleItems[0].header}
        details={ArticleItems[0].details}
        btnText={ArticleItems[0].btnText}
        reversed={false}
      />
      <Destinations />
      <Article
        image={ArticleImage2}
        header={ArticleItems[1].header}
        details={ArticleItems[1].details}
        btnText={ArticleItems[1].btnText}
        reversed={true}
      />
      <Testimonials />
      <Trending />
      <Footer />
    </>
  )
}

export default App
