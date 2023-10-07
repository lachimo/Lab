import { Link } from 'react-router-dom'
import * as St from './ListItem.styled'
import { Box } from '@mui/material'


export default function ListItem({image, id}) {

  return (
    <St.DivListItem>
        <Link to={`detail/${id}`}>
          <Box className='container'>
            <img 
              className='img_item'
            src={image} alt=''/>
          </Box>
        </Link>

    </St.DivListItem>
  )
}
