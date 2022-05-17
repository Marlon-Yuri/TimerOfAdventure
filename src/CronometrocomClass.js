import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Back from './Imgs/backtime.jpg'

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
`
const Main = styled.main`
display:flex;
justify-content:center;
align-items:center;
flex-direction: column;
justify-content:space-evenly;
height: 100vh;
background-image: url(${Back});
background-size:cover;

`

const BoxButton = styled.div`
width: 50vw;
height: 20vh;
display:flex;
justify-content:center;
align-items:center;
justify-content:space-evenly;
margin-left:3%;
`
const BoxNumber = styled.div`
color: indianred;
width: 15vw;
height: 10vh;
display:flex;
justify-content:center;
align-items:center;
font-size: 2.4vw;
margin-left:3%;
`

const BoxTitle = styled.div`
height: 25vh;
width: 60vw;
display:flex;
justify-content:center;
align-items:center;
font-family: 'Macondo', cursive;
font-size:4vw;
margin-left:3%;
 
`

const Button = styled.button`
font-size:2vw;
width:9vw;
height:7vh;
border-radius: 30% 30% 20% 20%;
font-weight: bolder;
font-family: 'Macondo', cursive;
margin-left:3%;
cursor:pointer;
&:hover {
    color:indianred;
    background: aquamarine;
    -webkit-transition: 0.5s ease-out;
    -moz-transition: 0.5s ease-out;
    -o-transition: 0.5s ease-out;
    transition: 0.5s ease-out;
    font-size:2vw;
    }
`
export default class CronometroClass extends React.Component{
state = {
    number:0,
    msg:'Welcome'
}

handleCronometro = () =>{
  const myClassCronometro = setInterval(() => {
      this.setState({number:this.state.number < 12 ? this.state.number +1:this.state.number})
  },1000 )

  this.stop=()=>{
      clearInterval(myClassCronometro)
  }
}

zerar = ()=>{
    this.setState({number: 0})
}

//// SE EU QUERO DEIXAR PISCANDO PRECISO NA REAL DO SETINTERVAL E NÃO DO TIMEOUT

componentDidMount(){
    ////VOU USAR O TIMEOUT AQUI SÓ PQ QUERO MUDAR APENAS UMA VEZ
    setTimeout( () =>{
        this.setState({msg:'The best timer 4ever ⏱️'})
    }, 5000)
}
    render(){
        return(
            <Main>
            <GlobalStyle/>
            <BoxTitle><h2>{this.state.msg}</h2></BoxTitle>   
            <BoxNumber><h1>{this.state.number}</h1> </BoxNumber>
            <BoxButton> 
             <Button onClick={this.handleCronometro}>Run</Button>
             <Button onClick={this.stop}>Stop</Button>
             <Button onClick={this.zerar}>Restart</Button>
            </BoxButton>                 
            </Main>
        )
    }
}


