import * as React from "react"

import layout from "../components/layout"
import seo from "../components/seo"

const NotFoundPage = () => (
  <layout>
    <seo title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </layout>
)

export default NotFoundPage
