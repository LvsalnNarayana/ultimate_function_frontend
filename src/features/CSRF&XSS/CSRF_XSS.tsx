import type React from "react"
import ComponentWrapper from "../../components/ComponentWrapper"

const CSRF_XSS: React.FC<{ title: string }> = ({ title }) => {
  return (
    <ComponentWrapper title={title}>
      <h1>hello</h1>
    </ComponentWrapper>
  )
}

export default CSRF_XSS
