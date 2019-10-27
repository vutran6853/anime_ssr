import React, { useState } from 'react'
import Layout from './Layout'

function About() {
  const [word, setWord] = useState('hello')
  return (
    <Layout>
      About Component
      {word}
    </Layout>
  )
}

export default About
