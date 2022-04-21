import styled from "styled-components";

export const NavbarContaint = styled.div`
    width: 100%;
    height: 70px;
    background-color:#23394d ;
`;
    
   
    

    export const NavbarWrapper = styled.div`
        width: 100%;
        max-width: 1300px;
        height: 78%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin:auto;
    `;
  
export const LogTitle = styled.div `
    margin-left: 3rem;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    font-size: 1.2rem;
    font-family: 'Smooch Sans', sans-serif;
    font-size: 22px;
        p{
            &:nth-child(2){
                color: #64b2ff;
            }
            &:nth-child(3){
               font-size: 1.5rem;
               font-weight: 00;
               color: #64b2ff;
            }            
        }

        svg{
            fill:#e07924;
            margin-right: 0.2rem;
        }
    
    `

     export const Menu = styled.ul`
     height:100%;
     display:flex;
     margin-top: auto;
     justify-content: space-between;
     list-style:none;

      @media screen and (max-width: 960px){
        background-color: #23394d;
        position: absolute;
        top: 54px;
        left: ${({open}) => (open ? "0": "-120%")}; //Importante
        width: 100%;
        height: 90vh;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        transition: 0.5s all ease;
      }
     `;

     export const MenuItem = styled.li`
     height:100%;
      
     
      @media  screen and (mad-width: 968px){
          width:100%;
          height: 70px;
          display: flex;
          justify-content: ce;
          align-items: center;
      }
     `

     export const MenuItemLink = styled.a`
       display: flex;
       justify-content: center;
       align-items: center;
       height: 100%;
       padding: 0.5rem 2.8rem;
       color: #64b2ff;
       font-family: "Smooch Sans", sans-serif;
       font-size: 1rem;
       font-weight: 300;
       cursor: pointer;
       transition: 0.5s all ease;
       div{
         svg{
           margin-right: 8px;
         }
       }

       &:hover {
         color: #fff;
         background-color: #e07924;
         transition: 0.5s all ease;
        
         div{
           svg{
             fill: #23394d;
             margin-right: 0.5rem;
           }
         }
        

        div{
          width: 100%;
          height: 100%;
          display:flex;
          justify-content: center;
          align-items:center;
        }

        svg{
          display:none;
          margin-right: 0.5rem;
          fill: #e0792a;
        }

         @media screen and (max-width: 960px) {
          width: 100%;
          div {
            width: 30%;
            justify-content: left;
            svg {
              display: flex;
            }
          }
        }
        @media screen and (max-width: 880px) {
          div {
            width: 40%;
            justify-content: left;
            svg {
              display: flex;
            }
          }
        }
        @media screen and (max-width: 500px) {
          div {
            width: 60%;
            justify-content: left;
            svg {
              display: flex;
            }
          }
        }
        @media screen and (max-width: 260px) {
          div {
            width: 100%;
            justify-content: left;
            svg {
              display: flex;
            }
          }
        }
}
     `;
    
    
    export const MobileIcon = styled.div`
      display: none;

      @media screen and (max-width: 960px) {
        display: flex;
        align-items: center;
        cursor: pointer;

        svg {
          fill: #e07924;
          margin-right: 0.5rem;
        }
      }
    `;