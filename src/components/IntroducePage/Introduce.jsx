import * as St from './Introduce.styled.js'
import { InfoOutlined, PlayArrow } from '@mui/icons-material';

import JJKS from '../../assets/films/Jujutsu Kaisen.jpg';


const Intro = () => {
    return (
        <St.DivIntro>
            <div className='intro_inner'>
                <img
                    className='intro_img'
                    src={JJKS}
                    alt=''
                />

                <div className='intro_info'>
                    <p className='desc'>
                        Chuyện kể về nam sinh trung học tên là Yuuji Itadori, cậu mang năng lực thể chất phi thường. Tuy nhiên cậu ấy lại muốn dành thời gian của mình trong Câu lạc bộ Tâm Linh.
                        Một ngày sau cái chết của ông mình, cậu gặp Megumi Fushiguro, người đang tìm kiếm vật thể bị nguyền mà các thành viên câu lạc bộ của cậu tìm thấy. Đối mặt với những chú linh, Yuuji đã nuốt vật thể bị phong ấn để có được sức mạnh và cứu bạn bè của mình.
                        Nhưng vật thể cậu nuốt lại có mối nguy hiểm đến đáng sợ và từ đó cậu cũng bị kéo vào những câu chuyện ly kỳ của thế giới chú thuật. Từ đây cậu cũng gặp được người thầy Gojo Satoru và những người bạn như Megumi, Nobara,... cũng như đối mặt với những chú linh, chú nguyền sư đầy nguy hiểm....
                    </p>

                <div className='buttons'>
                    <button className='play'>
                        <PlayArrow style={{marginRight:'5px'}}/>
                        <p>Play</p>
                    </button>

                    <button className='more'>
                        <InfoOutlined style={{marginRight:'5px'}}/>
                        <p>More Infor</p>
                    </button>
                </div>

                </div>
            </div>
        </St.DivIntro>

    )
}

export default Intro;