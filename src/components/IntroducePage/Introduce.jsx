import * as St from './Introduce.styled.js'
import { InfoOutlined, PlayArrow } from '@mui/icons-material';

import JJKS from '../../assets/films/Jujutsu Kaisen.jpg';

import { Box, Typography } from '@mui/material';
import { useState } from 'react';



const Intro = () => {


    const [open, setOpen] = useState(false)

    
    const handlePlay = () => {
        setOpen(!open)
    }

    const handleClose = () => {
        setOpen(!open);
    }



    return (
        <St.DivIntro>

            <St.StyledModal open={open} onClose={handleClose} className='modal'>
                            <Box className="modal__wrapper">
                                <iframe
                                    className="video"
                                    src="https://www.youtube.com/embed/miiLadou1cw"
                                />
                                
                            </Box>
            </St.StyledModal>

            <Box className='intro_inner'>
                <img
                    className='intro_img'
                    src={JJKS}
                    alt=''
                />
                <Box className='info_logo'>
                    <img 
                        className='logo_film'
                        src=''
                        alt=''
                />
                </Box>
                <Box className='intro_info'>
                    <Typography className='desc'>
                        Chuyện kể về nam sinh trung học tên là Yuuji Itadori, cậu mang năng lực thể chất phi thường. Tuy nhiên cậu ấy lại muốn dành thời gian của mình trong Câu lạc bộ Tâm Linh.
                        Một ngày sau cái chết của ông mình, cậu gặp Megumi Fushiguro, người đang tìm kiếm vật thể bị nguyền mà các thành viên câu lạc bộ của cậu tìm thấy. Đối mặt với những chú linh, Yuuji đã nuốt vật thể bị phong ấn để có được sức mạnh và cứu bạn bè của mình.
                        Nhưng vật thể cậu nuốt lại có mối nguy hiểm đến đáng sợ và từ đó cậu cũng bị kéo vào những câu chuyện ly kỳ của thế giới chú thuật. Từ đây cậu cũng gặp được người thầy Gojo Satoru và những người bạn như Megumi, Nobara,... cũng như đối mặt với những chú linh, chú nguyền sư đầy nguy hiểm....
                    </Typography>

                <Box className='buttons'>
                    <button className='play' onClick={handlePlay} >
                        <PlayArrow style={{marginRight:'5px'}}/>
                        <Typography>Play</Typography>
                    </button>

                    <button className='more'>
                        <InfoOutlined style={{marginRight:'5px'}}/>
                        <Typography>More Infor</Typography>
                    </button>
                </Box>

                </Box>
            </Box>
        </St.DivIntro>

    )
}

export default Intro;