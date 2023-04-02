import React from 'react'
import styled from 'styled-components'
import Leftside from './Leftside';
import Main from './Main';
import Rightside from './Rightside';
function Home(props) {
  return (
    <Container>
      <Section>
        
      </Section>

      <Layout>
        <Leftside/>
        <Main/>
        <Rightside/>
      </Layout>


    </Container>
  )
}

const Container=styled.div`
padding-top:52px;
max-width:100%;
`;
const Content=styled.div`
max-width:1128px;
margin-left:auto;
margin-right:auto;
`;
const Section=styled.section`
height:30px;

`;

const Layout=styled.div`
display:grid;
margin:0 20px;
grid-template-areas:"leftside main rightside";
grid-template-columns:minmax(0,5fr) minmax(0,10fr) minmax(300px,7fr)   ;
column-gap:25px;
row-gap:25px;
/* grid-template-row:auto; */


@media(max-width:768px){
  display:flex;
  flex-direction:column;
  padding:0 5px;
  
}

`;

export default Home
