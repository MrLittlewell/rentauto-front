import styled, { keyframes } from 'styled-components'
import mainbg from '../../img/bg.jpg'

const showModalKeyframes = keyframes`
  0% {
    background-color: rgba(255, 255, 255, 0);
  }
  
  100% {
    background-color: rgba(0, 0, 0, 0.15);
  }
`

export const Wrapper = styled.div`
    width: 100%;
    height: 600px;
    display: flex;
    box-sizing: border-box;
    background: url(${mainbg});
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    @media (max-width: 768px) {
      flex-direction: column;
      padding: 10px;
      align-items: center;
    }
`
export const HeaderDiv = styled.div`
    box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    backgroundColor: #ffffff69;
    height: 100px
    padding: 0 30px;
    width: 100%;
`
export const HeaderDivItems = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
     div {
       display: flex;
       align-items: center;

       a {
         color: white;
         font-weight: bold;
       }
     }
`
export const Title = styled.h1`
    margin-top: 100px;
    padding: 20px 0;
    line-height: 35px;
    font-weight: 600;
    color: #fefefe;
    border-top: 1px solid rgba(255,255,255,0.1);
    border-bottom: 1px solid rgba(255,255,255,0.11);
    text-align: center;
`