import * as React from "react"
import { Link } from "gatsby"

import layout from "../components/layout"
import seo from "../components/seo"

const UsingDSG = () => (
  <layout>
    <seo title="Using DSG" />
    <h1>Hello from a DSG Page</h1>
    <p>This page is not created until requested by a user.</p>
    <p>
      To learn more, head over to our{" "}
      <a href="https://www.gatsbyjs.com/docs/reference/rendering-options/deferred-static-generation/">
        documentation about Deferred Static Generation
      </a>
      .
    </p>
    <Link to="/">Go back to the homepage</Link>
  </layout>
)

export default UsingDSG
