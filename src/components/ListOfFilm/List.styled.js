import styled from "styled-components";

export const DivList = styled.div`

.list {
    width: 100%;
    margin-top: 10px;

    .list_title {
            color: white;
            font-size: 1.2rem;
            font-weight: 600;
            font-family: Roboto Salab;
            margin-left: 50px;
        }

    .wrapper {
        position: relative;
        margin-top: 10px;

        .sliderArrow{
            width: 50px;
            height: 100%;
            background-color: rgb(22, 22, 22, 0.5);
            color: white;
            position: absolute;
            z-index: 1;
            top: 0;
            bottom: 0;
            margin: auto;
            cursor: pointer;

            &.left {
                left: 0;
            }

            &.right {
                right: 0;
            }
        }

        .container {
            margin-left: 50px;
            display: flex;
            width: max-content;
            transform: translateX(0px);
            transition: all 1s ease;
        }
    }
}

   
`;