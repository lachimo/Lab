import { Box, Typography } from '@mui/material'
import * as St from './Preview.styled'
// import PropTypes from 'prop-types'

import { AddCircleOutlineOutlined, PlayArrow, ThumbUpOutlined } from '@mui/icons-material';
import data from '../../shared/ListFilm/ListFilm'
import { useState } from 'react';

const Preview = ({id}) => {
    const [open, setOpen] = useState(false)

    const item = data[id]

    const handlePlay = () => {
        setOpen(!open)
    }

    const handleClose = () => {
        setOpen(!open);
    }

  return (
    <St.Preview>
        <St.StyledModal open={open} onClose={handleClose} className='modal'>
                <Box className="modal__wrapper">
                    <iframe
                        className="video"
                        src={`${item.video}`}
                    />
                    
                </Box>
        </St.StyledModal>
        <Box className='preview--wrapper'>
            <Box className='preview--detail'>
                       <Box className='preview--image'>
                             <img 
                                className='image__detail'
                                src={item.image}/>

                            <Box className='preview--buttons'>
                                <button className='preview__play' onClick={handlePlay}>
                                    <PlayArrow style={{marginRight:'5px'}}/>
                                    <Typography>Play</Typography>
                                </button>
    
                                <button className='preview__icon'>
                                    <AddCircleOutlineOutlined/>
                                </button>
    
                                <button className='preview__icon'>
                                    <ThumbUpOutlined/>
                                </button>
                            </Box>

                            <Box className='info--top'>
                                <Typography className='top__title'>{item.time}</Typography>
                                <Typography className='top__title'>{item.year}</Typography>
                                <Typography className='top__limit'>{item.limit}</Typography>
                            </Box>
                       </Box>

               <Box className='container'>
                    <Box className='preview--info'>
                        <Box className='more--info'>
                            <Box className='info--movie'>
                                <Box className='movie__title'>Thể loại: <Typography className='movie__subtitle' >{item.genre}</Typography></Box>
            
                                <Box className='movie__title'>Diễn viên: <Typography className='movie__subtitle'>{item.actor}</Typography></Box>
                            
                                <Box className='movie__title'>Quốc gia: <Typography className='movie__subtitle'>{item.country}</Typography></Box>
            
                            </Box>
                        </Box>
                        
                        <Box className='preview--content'>
                            <Typography className='desc'>{item.desc}</Typography>
                        </Box>
    
                        
                    </Box>
               </Box>
            </Box>
        </Box>
        
    </St.Preview>
  )
}

Preview.propTypes = {}

export default Preview