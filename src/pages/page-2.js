import * as React from "react"
import { Link } from "gatsby"

import layout from "../components/layout"
import seo from "../components/seo"

const SecondPage = () => (
  <layout>
    <seo title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </layout>
)

export default SecondPage
