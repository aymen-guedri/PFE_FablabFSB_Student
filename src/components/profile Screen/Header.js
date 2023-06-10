import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import styled from 'styled-components'
import { Links } from "react-router-dom";
import { useSelector } from "react-redux";
function Header() {
    const { user } = useSelector((state) => state.authReducer.authData);
    const posts = useSelector((state)=>state.postReducer.posts)
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;


    
  const { t } = useTranslation();

  const languageMap = {
    en: { label: "English", dir: "ltr", active: true },
    fr: { label: "Français", dir: "ltr", active: false },
  };
  const [selectedLang, setSelectedLang] = useState(
    localStorage.getItem("i18nextLng") || "en"
  );

  return (
    <Container>
        <Content>
            <Logo>
                <a href='/home'>
                    <img src='/logo.png' alt='' width="45px"/>
                </a>
            </Logo>
            <Search>
                <div>
                   <span style={{color:"#0CFF00",fontWeight:"700",fontSize:"20px"}}>Fab</span><span style={{color:"#00ECFF",fontWeight:"700",fontSize:"20px"}}>Lab</span><span style={{color:"orange",fontWeight:"700",fontSize:"20px"}}>FSB</span>
                </div>
                
            </Search>

            <Search2>
                  <ul>
                   {/* Language selector */}
                <li>
                <div className="p-dropdown" >
                  {" "}
                  <a href="#">
                    <span
                      className=""
                      style={
                         {color:"#004658",fontSize:"18px",fontWeight:"600",cursor:"pointer"}}
                          
                    >

                      {selectedLang.toUpperCase() == "FR" ? "Français " : "English"}
                    </span>
                    <i
                      className="fa fa-light fa-angle-down m-l-5"
                      style={{ fontSize: "1.1rem", color: "#004658" }}
                    ></i>
                  </a>
                  <ul className="p-dropdown-content">
                    {Object.keys(languageMap)?.map((item) => (
                      <li key={item}>
                        <a
                          onClick={() => {
                            console.log(`changing language to ${item}`);
                            i18next.changeLanguage(item);
                            setSelectedLang(item);
                          }}
                          style={{ cursor: "pointer",fontSize: "1.1rem"}}
                        >
                          {languageMap[item].label}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <img className="lang" src="/images/langue.png" width="28px" />
                </div>
              </li>
            </ul>
                
                
            </Search2>
            <Nav>
                <NavListWrap>
                    <NavList >
                        <a href='/'>
                            <img src='/images/home.png' alt='' width="35px"/>
                            <span>{t('home')}</span>
                        </a>
                    </NavList>


                    

                    <NavList>
                        <a href='/guide'>
                            <img src='/images/guide.png' alt='' width="35px"/>
                            <span>{t('guide')}</span>
                        </a>
                    </NavList>

                   

                    <NavList>
                        <a href="https://forum.fablab-fsb.tech/" target="_blank">
                            <img src='/images/forum.png' alt='' width="35px"/>
                            <span>{t('forum')}</span>
                        </a>
                    </NavList>

                    <NavList>
                        <a href='/orders'>
                            <img src='/images/orders.png' alt='' width="40px" />
                            <span>{t('reservation')}</span>
                        </a>
                    </NavList>



                    <NavList>
                        <a href='/workshops'>
                            <img src='/images/workshop.png' alt='' width="35px" />
                            <span>{t('workshops')}</span>
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
padding:3px 20px;
position:fixed;
top:0;
width:100vw;
z-index:100;

ul{
    list-style-type:none;
    
}
.p-dropdown {
  float: left;
  font-size: 13px;
  font-weight: 300;
  position: relative;
  text-decoration: none;
  width:105px;
  margin-left:26%;
  padding-left:8px;
  background-color:white;
  border-radius:10px;
}

.p-dropdown a:not(.btn) {
  color: #3c4043;
  text-decoration: none;
}

.p-dropdown .btn,
.p-dropdown .title {
  padding-bottom: 10px;
  cursor: pointer;
  overflow: unset !important;
}

.p-dropdown .btn:before {
  top: 30px;
  right: 5px;
}

.p-dropdown .btn ~ .dropdown-content {
  top: 42px;
}

.p-dropdown .p-dropdown-content,
.p-dropdown ul.p-dropdown-content {
  line-height: normal;
  position: absolute;
  z-index: 5;
  text-align: left;
  opacity: 0;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  visibility: hidden;
  -webkit-transform: translateY(8px);
  -ms-transform: translateY(8px);
  transform: translateY(8px);
  padding: 14px 20px;
  width: -webkit-min-content;
  width: -moz-min-content;
  width: min-content;
  top: auto;
  right: 0;
  margin: 0;
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid #e4e6ef;
  min-width: 100px;
  box-shadow: 0 14px 20px rgba(0, 0, 0, 0.1);
}

.p-dropdown .p-dropdown-content hr,
.p-dropdown ul.p-dropdown-content hr {
  margin-left: -20px;
  margin-right: -20px;
}

.p-dropdown .p-dropdown-content ul,
.p-dropdown ul.p-dropdown-content ul {
  padding: 0;
}

.p-dropdown .p-dropdown-content ul > li,
.p-dropdown .p-dropdown-content > li,
.p-dropdown ul.p-dropdown-content ul > li,
.p-dropdown ul.p-dropdown-content > li {
  display: block;
}

.p-dropdown .p-dropdown-content ul > li:first-child label,
.p-dropdown .p-dropdown-content > li:first-child label,
.p-dropdown ul.p-dropdown-content ul > li:first-child label,
.p-dropdown ul.p-dropdown-content > li:first-child label {
  margin-top: 0;
}

.p-dropdown .p-dropdown-content ul > li label,
.p-dropdown .p-dropdown-content > li label,
.p-dropdown ul.p-dropdown-content ul > li label,
.p-dropdown ul.p-dropdown-content > li label {
  color: #e4e6ef;
  font-size: 11px;
  text-transform: uppercase;
  margin-top: 14px;
  margin-bottom: 0;
}

.p-dropdown .p-dropdown-content ul > li a,
.p-dropdown .p-dropdown-content > li a,
.p-dropdown ul.p-dropdown-content ul > li a,
.p-dropdown ul.p-dropdown-content > li a {
  line-height: 26px;
  white-space: nowrap;
  display: block;
  padding: 2px 8px;
}

.p-dropdown .p-dropdown-content ul > li a i,
.p-dropdown .p-dropdown-content > li a i,
.p-dropdown ul.p-dropdown-content ul > li a i,
.p-dropdown ul.p-dropdown-content > li a i {
  margin-right: 6px;
}

.p-dropdown.p-dropdown-invert .p-dropdown-content,
.p-dropdown.p-dropdown-invert ul.p-dropdown-content {
  left: 0;
  right: auto;
}

.p-dropdown.p-dropdown-invert .p-dropdown-content:before,
.p-dropdown.p-dropdown-invert ul.p-dropdown-content:before {
  content: " ";
  right: auto;
  left: 22px;
}

.p-dropdown:hover .title:before,
.p-dropdown.dropdown-active .title:before {
  opacity: 1;
  visibility: visible;
}

.p-dropdown:hover .p-dropdown-content,
.p-dropdown.dropdown-active .p-dropdown-content {
  opacity: 1;
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
  visibility: visible;
}

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
border-radius:10px;
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

const Search2=styled.div`
opacity:1;
flex-grow:1;
position:relative;
margin-right:36%;
border-radius:10px;
padding-left:10px;


.lang{
    padding-left:20px;
  
   
}

&>div{
    max-width:80px;
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

