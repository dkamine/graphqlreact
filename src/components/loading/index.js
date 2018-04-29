import styled from 'styled-components';

const Loading = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  top: 100px;
  left: 47%;
  border-radius: 20px;
  background-color: #fff;
  -webkit-transform-origin:  50% 50%;
  transform-origin:  50% 50% ;
  -webkit-animation: loader6 1s ease-in-out infinite;
  animation: loader6 1s ease-in-out infinite;

  &:before{
  content: "";
  position: absolute;
  background-color: rgba(255, 255, 255, .5);
  top: 0px;
  left: -50px;
  height: 20px;
  width: 20px;
  border-radius: 12px;
  }

  &:after{
  content: "";
  position: absolute;
  background-color: rgba(255, 255 ,255 ,.5);
  top: 0px;
  left: 50px;
  height: 20px;
  width: 20px;
  border-radius: 20px;
  }


  @-webkit-keyframes loader6{
    0%{-webkit-transform:rotate(0deg);}
    50%{-webkit-transform:rotate(180deg);}
    100%{-webkit-transform:rotate(180deg);}
  }

  @keyframes loader6{
    0%{transform:rotate(0deg);}
    50%{transform:rotate(180deg);}
    100%{transform:rotate(180deg);}
  }
`;

export default Loading;