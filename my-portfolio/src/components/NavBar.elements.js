import styled from "styled-components";

   
    
   
    

    export const NavbarWrapper = styled.div`
    margin: auto;
    width: 100%;
    max-width: 1388px;
    height: 100%;
    aling-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    `;
    export const NavbarContaint = styled.div`
    width: 100%;
    heigth: 88px;
    position: sticky;
    top: 0;
    z-index: 99;
    background-color:#49426c ;
    `;

    export const LogTitle = styled.div`
    display: flex;
    flex-warp: wrap;
    justify-content: flex-start;
    aling-items: center;
    font-family: 'Smooch Sans', sans-serif;
    font-size: 26px;
    color: #ebc88b
    `

     export const Menu =styled.ul`
     height:100%;
     display:flex;
     justify-content:center;
     align-items:center;
     `

     export const MenuItem = styled.li`
     height:100%;
     padding:8.5rem 1.5rem;
     display:flex;
     justify-content:center;
     align-items:center;
     font-size:1.2rem;
     font-family:'Smooch Sans', sans-serif;
     font-weight:400;

     &:hover{
         background-color: #343257;
         border-bottom: 0.3rem solid #ebc08b;
         transition: 0.4s ease-in;
     }
     `

     export const MenuItemLink= styled.a`
     text-decoration:none;
     color: #ebc88b;
     `
