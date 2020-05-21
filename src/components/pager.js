import React from "react"
import { Link } from "gatsby"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"

const Pager = ({ pageContext }) => {
  const { previousPagePath, nextPagePath } = pageContext

  return (
    <div>
      {previousPagePath && (
        <Link
          style={{ float: "left", paddingBottom: "100px", paddingTop: "30px" }}
          to={previousPagePath}
        >
          <FaArrowLeft /> Prev{" "}
        </Link>
      )}

      {nextPagePath && (
        <Link
          style={{ float: "right", paddingBottom: "100px", paddingTop: "30px" }}
          to={nextPagePath}
        >
          Next <FaArrowRight />
        </Link>
      )}
    </div>
  )
}

export default Pager
