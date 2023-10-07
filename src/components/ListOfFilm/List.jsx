import { ArrowCircleLeftOutlined, ArrowCircleRightOutlined } from '@mui/icons-material';
import * as St from './List.styled.js';
import ListItem from '../ListItem/ListItem.jsx';
import { useRef } from 'react';
import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import data from '../../shared/ListFilm/ListFilm.js';

const List = () => {
    const [isMoved, setIsMoved] =useState(false)
    const [slideNumber, setSlideNumber] = useState(0);

    const listRef = useRef();

    const handleClick = (direction) => {
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if (direction === "left" && slideNumber > 0) {
          setSlideNumber(slideNumber - 1);
          listRef.current.style.transform = `translateX(${230 + distance}px)`;
        }
        if (direction === "right" && slideNumber < 6) {
          setSlideNumber(slideNumber + 1);
          listRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }
      };
    return (
        <St.DivList>
            <Box className='list'>
                <Typography className='list_title'>Continue to watch</Typography>
                <Box className='wrapper'>
                    <ArrowCircleLeftOutlined className='sliderArrow left'
                        onClick={() => handleClick("left")}
                        style={{display: !isMoved && "none"}}
                     />
                    <Box className='container' ref={listRef}>
                        {data.map((item) => 
                        <ListItem key={item.id} id={item.id} image={item.image}/>
                        )}
                       

                    </Box>
                    <ArrowCircleRightOutlined className='sliderArrow right' 
                    onClick={() => handleClick("right")}/>
                </Box>
            </Box>
        </St.DivList>
    )
}

export default List;