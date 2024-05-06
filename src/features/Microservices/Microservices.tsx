import type React from "react"
import ComponentWrapper from "../../components/ComponentWrapper"

const Microservices: React.FC<{ title: string }> = ({ title }) => {
  return (
    <ComponentWrapper title={title}>
      <h1>hello</h1>
    </ComponentWrapper>
  )
}

export default Microservices
