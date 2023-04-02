import React from 'react'
import styled from 'styled-components'
import { Links } from "react-router-dom";
import { useSelector } from "react-redux";
function Header() {
    const { user } = useSelector((state) => state.authReducer.authData);
    const posts = useSelector((state)=>state.postReducer.posts)
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <Container>
        <Content>
            <Logo>
                <a href='/home'>
                    <img src='/logo.png' alt='' width="50px"/>
                </a>
            </Logo>
            <Search>
                <div>
                   <span style={{color:"#0CFF00",fontWeight:"700",fontSize:"20px"}}>Fab</span><span style={{color:"#00ECFF",fontWeight:"700",fontSize:"20px"}}>Lab</span><span style={{color:"orange",fontWeight:"700",fontSize:"20px"}}>FSB</span>
                </div>
                
            </Search>
            <Nav>
                <NavListWrap>
                    <NavList className='active'>
                        <a href='/'>
                            <img src='/images/home.png' alt='' />
                            <span>Home</span>
                        </a>
                    </NavList>


                    <NavList>
                        <a>
                            <img src='/images/language.png' alt='' />
                            <span>Language</span>
                        </a>
                    </NavList>

                    <NavList>
                        <a href='/guide'>
                            <img src='/images/material.png' alt='' />
                            <span>Guide</span>
                        </a>
                    </NavList>

                    <NavList>
                        <a href='/chat'>
                            <img src='/images/un-message.png' alt='' />
                            <span>Messages</span>
                        </a>
                    </NavList>

                    <NavList>
                        <a>
                            <img src='/images/forum.png' alt='' />
                            <span>Forum</span>
                        </a>
                    </NavList>

                    <NavList>
                        <a >
                            <img src='/images/order.png' alt='' />
                            <span>Orders</span>
                        </a>
                    </NavList>

                    <NavList>
                        <a href='/offers'>
                            <img src='/images/booking.png' alt='' />
                            <span>Offers</span>
                        </a>
                    </NavList>


                    <NavList>
                        <a href='/workshops'>
                            <img src='/images/workshop.png' alt='' />
                            <span>WorkShops</span>
                        </a>
                    </NavList>


                  
                </NavListWrap>
            </Nav>
        </Content>
    </Container>
  )
}

const Container=styled.div`
background-color:#004658;
border-bottom:1px solid rgba(0,0,0,0.08);
left:0;
padding:0 20px;
position:fixed;
top:0;
width:100vw;
z-index:100;


`
const Content=styled.div`
display:flex;
align-items:center;
margin:0px;
min-height:100%;
max-width:1128px;

`
const Logo=styled.span`
margin-right:8px;
background-color:white;
border-radius:20px;
font-size:0px;
display:"inline";

`
const Search=styled.div`
opacity:1;
flex-grow:1;
position:relative;
&>div{
    max-width:280px;
    input{
        border:none;
        box-shadow:none;
        background-color:#eef3f8;
        border-radius:2px;
        color:rgba(0,0,0,0.9);
        width:218px;
        padding:0 8px 0 40px;
        line-height:1.75;
        font-weight:400;
        font-size:14px;
        height:34px;
        border-color:#dce6f1;
        vertical-align:text-top;
    }
}
`
const SearchIcon=styled.div`
width:40px;
position:absolute;
z-index:1;
top:10px;
left:5px;
border-radius 0 2px 2px 0;
margin:0;
pointer-events:none;
display:flex;
justify-content:center;
align-items:center;
transition:background-color 0.15s;

`

const Nav =styled.nav`
margin-left:auto;
display:block;
@media(max-width:768px){
    position:fixed;
    left:0;
    bottom:0;
    background:#004658;
    width:100%;
}
`
const NavListWrap=styled.ul`
display:flex;
flex-wrap:nowrap;
list-style-type:none;

.active{
    span:after{
        content:"";
        transform:scaleX(1);
        border-bottom:2px solid var(--white,#fff);
        bottom:0;
        left:0;
        position:absolute;
        transition:transform 0.2s ease-in-out;
        width:100%;
        border-color:white;
    }
}
`
const NavList=styled.li`
display:flex;
align-items:center;
a{
    align-items:center;
    background:transparent;
    display:flex;
    flex-direction:column;
    font-size:12px;
    font-weight:400;
    justify-content:centerM
    line-height:1.5;
    min-height:32px;
    min-width:80px;
    position:relative;
    text-decoration:none;


    span{
        color:white;
        display:flex;
        align-items:center;

    }
    @media(max-width:768px){
        min-width:60px;

    }
}

&:hover,&:active{
    a{
        span{
            color:orange;
        }
    }
}
`
const SignOut=styled.div`
position:absolute;
text-align: center;
top:45px;
background:white;
border-radius: 0 0 5px 5px;
width:100px;
height:40px;
font-size:16px;
transition-duration:167ms;
display:none;
`

const User=styled(NavList)`
padding-top:3px;
a>svg{
    width:34px;
    border-radius:50%;
}
a>img{
    width:34px;
    height:34px;
    border-radius:50%;

}

span{
    display:flex;
    align-items:center;

}

&:hover{
   ${SignOut} {
    align-items:center;
    display:flex;
    justify-content:center;

   }
}
`;

const Work=styled(User)`
border-left:1px solid rgba(0,0,0,0.08);
`;


export default Header

