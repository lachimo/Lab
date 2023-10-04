import styled from "styled-components";
import theme from "../Theme/Theme";

export const DivIntro = styled.div`

.intro_inner {
    /* width: auto;
    overflow: hidden; */
    position: relative;
}

.intro_img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.intro_info {
    width: 35%;
    position: absolute;
    right: 50px;
    bottom: 60px;
    background-color: #00000096;
    color: white;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
}

.desc {
    margin: 5px 20px 20px 20px;
    font-size: 0.9rem;
    display: -webkit-box;           /* Viết ngắn gọn cho đoạn text, đoạn text sẽ được ghi ra trong khoảng bao nhiêu dòng đó rồi "..." */
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    overflow-wrap: break-word;     /* Xuống dòng */
}

.buttons {
    display: flex;

    button {
        padding: 5px 25px;
        border: none;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.0rem;
        margin-bottom: 10px;
        cursor: pointer;
    }

    p {
        font-weight: 600;
    }

    .play {
        margin-left: 20px;
        
    }

    
    .more {
        margin-left: 10px;
        background-color: gray;
        color: ${theme.color.primary_text};
    }


    &:hover {
            .play {
                /* background-color: #ffffffc2; */
            }

            .more {
            background-color: rgb(109 108 108 / 63%);
        }
        }
        

}

`;
