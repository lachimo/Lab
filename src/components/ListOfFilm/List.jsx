import { ArrowCircleLeftOutlined, ArrowCircleRightOutlined } from '@mui/icons-material';
import * as St from './List.styled.js';
import ListItem from '../ListItem/ListItem.jsx';

const List = () => {
    return (
        <St.DivList>
            <div className='list'>
                <p className='list_title'>Continue to watch</p>
                <div className='wrapper'>
                    <ArrowCircleLeftOutlined/>
                    <div className='container'>
                        <ListItem/>
                        <ListItem/>
                        <ListItem/>
                        <ListItem/>
                        <ListItem/>
                        <ListItem/>
                        <ListItem/>
                        <ListItem/>
                        <ListItem/>
                        <ListItem/>
                        <ListItem/>
                        <ListItem/>
                        <ListItem/>
                        <ListItem/>
                        <ListItem/>
                        <ListItem/>
                        <ListItem/>
                    </div>
                    <ArrowCircleRightOutlined/>
                </div>
            </div>
        </St.DivList>
    )
}

export default List;