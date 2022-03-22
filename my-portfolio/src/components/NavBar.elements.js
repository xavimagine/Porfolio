import styled from "styled-components";

export const NavbarContaint = styled.div`
    width: 100%;
    height: 70px;
    background-color:#23394d ;
`;
    
   
    

    export const NavbarWrapper = styled.div`
        width: 100%;
        max-width: 1300px;
        height: 50%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin:auto;
    `;
  

    export const LogTitle = styled.div`
    margin-left: 3rem;
    align-items: center;
    display: flex;
    flex-warp: wrap;
    font-size: 1.2rem;
    font-family: 'Smooch Sans', sans-serif;
    font-size: 22px;
        p{
            &:nth-child(2){
                color: #64b2ff;
            }
            &:nth-child(3){
               font-size: 1.5rem;
               font-weigth: 500;
               color: #64b2ff;
            }            
        }

        svg{
            fill:#e07924;
            margin-right: 0.2rem;
        }
    
    `

     export const Menu =styled.ul`
     height:100%;
     display:flex;
     justify-content: space-between;
     list-style:none;
      @media screen and (max-width: 960px){
        position: absolute;
        top: 70px;
        left: 0; //Importante
        width: 100%;
        height; 90vh;
        justify-content: center;
        flex-direction: colum;
        align-items: center;
        transition: 0.5s all ease;
      }
     `

     export const MenuItem = styled.li`
     height:100%;`

     export const MenuItemLink= styled.a`
     display: flex;
     justify-content: center;
     aling-items: center;
     height: 100%;
     padding: 0.5rem 2.5rem;
     color: #64b2ff;
     font-family: 'Smooch Sans', sans-serif;;
     font-size: 1rem;
     font-weight: 300;
     cursor: pointer;
     transition: 0.5s all ease;
     ;
      
        &:hover { 
            color:#fff;
            background-color: #e0792a;
            transition: 0.5s all ease;
        }` 
    export const MobileIcon = styled.div`
        display: grid;
        @media screen and (max-width: 960px){
            display: flex;
            align-items: center;
            cursor: pointer;

            svg{
                fill: #e07924;
                margin-right:0.5rem;
            }
        }
    `