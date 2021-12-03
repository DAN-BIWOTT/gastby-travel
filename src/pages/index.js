import * as React from 'react'
import Hero from '../components/Hero'
import layout from '../components/layout'
import seo from '../components/seo'
import Trips from '../components/Trips'
import Testimonials from '../components/Testimonials'
import Stats from '../components/Stats'
import Email from '../components/Email'

const IndexPage = () => (
  <layout>
    <seo title="Home" />
    <h1>Hi people</h1>
    <Hero/>
    <Trips heading="Our Favorite Destinations" />
    <Testimonials />
    <Stats/>
    <Email/>
  </layout>
)

export default IndexPage
