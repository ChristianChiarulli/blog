import React from 'react'
import '../css/app.css'

const PrevNext = props => {
  const {prev, next} = props

  return (
    <div className='prevnext'>
      <span>
        {prev && (
          <a href={prev.fields.slug} className='float-left'>
            <i class='fas fa-arrow-left' /> Previous: {prev.frontmatter.title}
          </a>
        )}
        {next && (
          <a href={next.fields.slug} className='float-right'>
            Next: {next.frontmatter.title} <i class='fas fa-arrow-right' />
          </a>
        )}
      </span>
      <br />
      <br />
    </div>
  )
}

export default PrevNext
