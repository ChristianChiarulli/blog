import React from "react"
import { Link } from "gatsby"

import Img from "gatsby-image"
import style from "./post.module.less"
import { slugify } from "../../utils/Utilities"

const Post = ({ title, author, date, body, slug, tags, fluid }) => {
  return (
    <div className={style.card}>
      <div key={title} className={style.post}>
        <div className={style.cover}>
          <Link to={slug} key={slug}>
            <Img fluid={fluid} title={body} alt={title} />
          </Link>
        </div>
        <Link to={slug} key={slug}>
          <div className={style.content}>
            <h2>{title}</h2>
            <label>by: {author}, </label>
            {date ? <label>{date}</label> : null}
            <p>{body}</p>
            <ul className={style.postTags}>
              {tags.map(tag => (
                <li>
                  <Link to={`/${slugify(tag)}`}>
                    <div className={style.badge}>{tag}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Link>
      </div>
    </div>
  )
}
export default Post

