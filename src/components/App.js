import React from 'react'
import Article from './Article'
import Destinations from './Destinations'
import Header from './Header'
import Footer from './Footer'
import NavBar from './Navbar'
import Testimonials from './Testimonials'
import Trending from './Trending'
import ArticleImage1 from '../assets/article-1.svg'
import ArticleImage2 from '../assets/article-2.svg'

const App = () => {
  return (
    <>
      <NavBar />
      <Header />
      <Article />
      <Destinations />
      <Article />
      <Testimonials />
      <Trending />
      <Footer />
    </>
  )
}

export default App
