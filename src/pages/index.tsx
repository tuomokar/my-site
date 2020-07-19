import * as React from 'react'

import BlogLink from '../components/blog-link'
import Contact from '../components/contact'
import Hobbies from '../components/hobbies'
import About from '../components/about'
import SelfImage from '../components/self-image'

const MainPage: React.FC = () => (
  <React.Fragment>
    <About />
    <BlogLink />
    <Hobbies />
    <Contact />

    <SelfImage />
  </React.Fragment>
)

export default MainPage
