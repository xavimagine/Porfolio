import styled from "styled-components";

export const Containt = styled.div`
    width: 100%;
    height: 70px;

    #pc{
        width: 700px;
        height: auto;
        margin: 10px auto -1px;
        display: block;
       
    }
   

    table{
        background-color: white;
        width: 1086px;
        height: 500px;
        border-radius: 12px;
        margin-top: -10rem;
        margin-left: 180px;
        padding-top: 2rem;
        padding-bottom: 22rem;
        font-family: 'Smooch Sans', sans-serif;
        font-size: 20px;
        text-align: center;
        border-color: black;
    }
    tr #lenaguajes{
        padding-bottom: 30px;
    }
   
 
`;
export const Perfil = styled.div`
    background-color: #23394d;
    color: #FFFFFF;
    text-align: center;
    height: 250px;
    padding-bottom: 14rem;
    padding-top: 7%;
    
    h1{
        font-family: 'Exo 2', sans-serif;
    }
    #Atext{
        margin: 20px auto;
        width: 500px;
        text-align: justify;
        
        font-family: 'Smooch Sans', sans-serif;
        font-size: 18px;
    }

    @media screen and (max-width: 960px) {
          width: 100%;
          div {
            width: 30%;
            justify-content: right;
          }
          #Atext{
          font-size: 15px;
    }
          
        }
        @media screen and (max-width: 880px) {
          div {
            width: 40%;
            justify-content: left;
         
          }
        }
        @media screen and (max-width: 500px) {
          div {
            width: 60%;
            justify-content: left;
            
          }
        }
        @media screen and (max-width: 260px) {
          div {
            width: 100%;
            justify-content: left;
           
          }
        }
`;
export const Impc = styled.div`

@media screen and (max-width: 960px) {
        #pc{
        width:70%;
        } 
    }
@media screen and (max-width: 880px) {
          #pc{
        width:40%;
        }
    }
@media screen and (max-width: 500px) {
          #pc{
             width:60%;
            }
    }
@media screen and (max-width: 260px) {
          #pc{
            width:50%;
            }
    }
`;

export const Tblenguajes = styled.div`
@media screen and (max-width: 960px) {
        table{
        width: 960 px;
        height: 500px;
        } 
    }
@media screen and (max-width: 880px) {
          #pc{
        width:40%;
        }
    }
@media screen and (max-width: 500px) {
          table{
             width:60%;
            }
    }
@media screen and (max-width: 260px) {
          table{
            width:50%;
            }
    }
`;

export const Bienvenida = styled.div`
 #avat{
        width: 100px;
        height: auto;
        margin: 10px auto -1px;
        display: block;
       
    }`;