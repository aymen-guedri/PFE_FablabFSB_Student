import React from 'react'
import styled from 'styled-components'
import { Links } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/AuthActions";
import ProfileLeft from "../../components/ProfileLeft/ProfileLeft";

function Leftside({location}) {
const { user } = useSelector((state) => state.authReducer.authData);
const posts = useSelector((state)=>state.postReducer.posts)
const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

const dispatch = useDispatch()
const handleLogOut = ()=> {
    dispatch(logout())
  }


  return (
    <Container>

<ProfileLeft />


    </Container>
  )
}


const Container =styled.div`
grid-area:leftside;

`;

const ArtCard=styled.div`
text-align:center;
overflow:hidden;
margin-bottom:8px;
background-color:#fff;
border-radius:5px;
transition:box-shadow 83ms;
position:relative;
border:none;
box-shadow: 0 0 0 1px rgb(0 0 0 /15%), 0 0 0 rgb(0 0 0 /20%);

`;

const Userinfo =styled.div`
border-bottom:1px solid rgba(0,0,0,0.15);
padding: 12px 12px 16px;
word-wrap:break-word;
word-break: break-word;

`;


const CardBackground =styled.div`
background:url('/images/coverpic.png');
background-position:center;
background-size:462px;
height:54px;
margin:-12px -12px 0; 
`;

const Photo= styled.div`
img{
box-shadow:none;
width:72px;
height:72px;
box-sizing:border-box;
background-clip:content-box;
background-color:white;
background-position:center;
background-size:100%;
background-repeat:no-repeat;
border: 2px solid white;
margin: -38px auto 12px;
border-radius:50%;
}
`;

const Link =styled.div`
font-size:16px;
line-height:1.5;
color:rgba(0,0,0,0.9);
font-weight:600;

`;

const AddPhotoText =styled.div`
color:rgba(0,0,0,0.5);
margin-top:4px;
font-size:12px;
font-weight:400;


`;

const Widget=styled.div`
border-bottom:1px solid rgba(0,0,0,0.15);
padding-top:12px;
padding-bottom:12px;

&>a{
    text-decoration:none;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:4px 12px;

    &:hover{
        background-color:rgba(0,0,0,0.08);

    }

    div{
        display:flex;
        flex-direction:column;
        text-align:left;
        span{
            font-size:12px;
            line-height:1.333;
            &:first-child{
                color:rgba(0,0,0,0.6);
            }
            &:nth-child(2){
                color:rgba(0,0,0,1);
            }
        }
    }
}
svg{
    color:rgba(0,0,0,1);
}

`;

const Item =styled.a`
border-color:rgba(0,0,0,0.8);
text-align:left;
padding 12px;
font-size:12px;
display:block;
span{
    display:flex;
    align-items:center;
    color:rgba(0,0,0,1);
    svg{
        color:rgba(0,0,0,0.6);
    }
}

&:hover{
    background-color:rgba(0,0,0,0.08);
}

`;

const CommunityCard =styled(ArtCard)`
padding:8px 0 0;
text-align:left;
display:flex;
flex-direction:column;

a{
    color:black;
    padding: 4px 12px 4px 12px;
    font-size:12px;

    &:hover{
        color:#0a66c2;
    }
    span{
        display:flex;
        align-items:center;
        justify-content:space-between;
    }

    &:last-child{
        color:rgba(0,0,0,0.6);
        text-decoration:none;
        border-top:1px solid #d6cec2;
        padding:12px;
        &:hover{
            background-color:rgba(0,0,0,0.08);
        }
    }
}
`;


export default Leftside
