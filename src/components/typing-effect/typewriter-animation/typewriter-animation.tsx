import React from "react"

export interface TypeWriterAnimationProps {
  text: string
}

const TypeWriterAnimation = (props: TypeWriterAnimationProps) => {
  const { text } = props
    return <div className="typewriter">
    <h1 className="heading-2-italic">{text}</h1>
  </div>
}

export default TypeWriterAnimation