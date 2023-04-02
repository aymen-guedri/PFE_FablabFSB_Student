import React, { useState } from "react";
import "./Post.css";
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import Heart from "../../img/coeurs.png";
import NotLike from "../../img/coeur.png";
import { likePost } from "../../api/PostsRequests";
import { useSelector } from "react-redux";
import styled from 'styled-components'

const Post = ({ data }) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length)

  
  const handleLike = () => {
    likePost(data._id, user._id);
    setLiked((prev) => !prev);
    liked? setLikes((prev)=>prev-1): setLikes((prev)=>prev+1)
  };
  return (
    <div className="Post">
        <ShareActor>
                    <a>
                        <img src='/logo.png'alt='' />
                        <div>
                            <span>FabLab FSB</span>
                            <span>www.fablab-fsb.tn</span>
                            
                        </div>
                    </a>
                  
          </ShareActor>
     <span>{data.desc}</span>
      <img
        src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""}
        alt=""
      />

      <div className="postReact">
        <img
          src={liked ? Heart : NotLike}
          alt=""
          style={{ cursor: "pointer" }}
          onClick={handleLike}
        />
        
      </div>

      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {likes} likes
      </span>
      <div className="detail">
        <span>
          <b>{data.name} </b>
        </span>
       
      </div>
    </div>
  );
};

export default Post;


const Container =styled.div`
grid-area:main;
`;

const CommonCard =styled.div`
text-align:center;
overflow:hidden;
margin-bottom:8px;
background-color:#fff;
border-radius:10px;
position:relative;
border:none;
box-shadow:0 0 0 1px rgb(0 0 0 /15%),0 0 0 rgb(0 0 0/20%);

`;

const ShareBox=styled(CommonCard)`
display:flex;
flex-direction:column;
color:#958b7b;
background:white;
div{
    button{
        outline:none;
        color:rgba(0,0,0,0.6);
        font-size:14px;
        line-height:1.5;
        min-height:48px;
        background:transparent;
        border:none;
        display:flex;
        align-items:center;
        font-weight:600;

    }
    .img{
        width:40px;
        height:30px;
    }

    &:first-child{
        display:flex;
        align-items:center;
        padding:8px 16px 0px 16px;
        img{
            width:48px;
            border-radius:20%;
            margin-right:8px;
        }
        button{
            margin:4px 0;
            flex-grow:1;
            border-radius:35px;
            padding-left:16px;
            border:1px solid rgba(0,0,0,0.15);
            background-color:white;
            text-align:left;

        }
    }

    &:nth-child(2){
        display:flex;
        flex-wrap:wrap;
        justify-content:space-around;
        padding-bottom:4px;

        button{
            img{
                margin : 0 4px 0 -2px;
            }
            
        }
    }
}
`;




const Article=styled(CommonCard)`
padding:0;
margin:0 0 8px;
overflow:visible;

`;

const ShareActor=styled.div`
padding-right:40px;
flex-wrap:nowrap;
padding:12px 16px 0;
margin-bottom:8px;
align-items:center;
display:flex;
a{
    margin-right:12px;
    flex-grow:1;
    overflow:hidden;
    display:flex;
    text-decoration:none;

    img{
        width:48px;
        height:48px;
    }

    &>div{
        display:flex;
        flex-direction:column;
        flex-grow:1;
        flex-basis:0;
        margin-left:8px;
        overflow:hidden;
        span{
            text-align:left;
            &:first-child{
                font-size:14px;
                font-weight:700;
                color:rgba(0,0,0,1);
            }

            &:nth-child(n+1){
                font-size:12px;
                color:rgba(0,0,0,0.6);
                
            }
        }
    }
}

button{
    position:absolute;
    right:12px;
    top:0;
    background:transparent;
    outline:none;
    border:none;
    
}

`;


const Describtion=styled.div`
padding:0 16px;
overflow:hidden;
color:rgba(0,0,0,0.9);
font-size:14px;
text-align:left;
`;


const SharedImg=styled.div`
margin-top:8px;
width:100%;
display:block;
position:relative;
background-color:#f9fafb;
img{
    object-fit:contain;
    width:100%;
    height:100%;

}
`;


const SocialCount=styled.ul`
line-height:1.3;
display:flex;
align-items:flex-start;
overflow:auto;
margin:0 16px;
padding:8px 0;
border-bottom: 1px solid #e9e5df;
list-style:none;

li{
    margin-right:5px;
    font-size:12px;
    button{
        display:flex;
        border:none;
        background-color:white;

    }
}




`;

const SocialAction=styled.div`
.imageslouta{
    width:25px;
    height:22px;
}

align-items:center;
display:flex;
justify-content:flex-start;
margin:0;
min-height:40px;
padding:4px 8px;
button{
    display:inline-flex;
    align-items:center;
    padding:8px;
    color:#0a66c2;
    border:none;
    background-color:white;

    @media(min-width:768px){
        span{
            margin-left:8px;

        }
    }
}


`;


