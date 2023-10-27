// import PropTypes from 'prop-types'

// import List from "../../components/ListOfFilm/List"
import { useParams } from "react-router-dom"
import Preview from "../../components/Preview"


const Detail = () => {
  const {id} = useParams()

  return (
    <div className="detail">
        <Preview id={id}/>
    </div>
  )
}

Detail.propTypes = {}

export default Detail