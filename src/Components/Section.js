import React from 'react'
import styled from 'styled-components'
import { Fade } from 'react-reveal'

const Section = (props) => {
  return (
    <Wrap bgImage={props.backgroundImg}>
        <Fade bottom>
            <ItemText>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </ItemText>
        </Fade>

        <Button>
            <Fade bottom>
                <ButtonGroup>
                    <LeftButton>
                        {props.leftBtnText}
                    </LeftButton>
                    {props.rightBtnText && 
                        <RightButton>
                        {props.rightBtnText}
                        </RightButton>
                    }
                </ButtonGroup>
            </Fade>
            <DownArrow src='/images/down-arrow.svg'/>
        </Button>

    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
  height: 100vh; 
  width: 100vw;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/model-s.png");
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${props => `url("../images/${props.bgImage}")`};
`

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;

`

// Button Done CSS
const Button = styled.div`
  display: flex;
  flex-direction: column;
`

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 35px;
  @media (max-width: 768px){
    flex-direction: column;
  }
`

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 13px;
  cursor: pointer;
  margin: 8px;
`

const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`


const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
  cursor: pointer;
`
