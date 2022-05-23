
import React from 'react';
import urls  from '../../routesImg/imgRoutes';
import { Containt,Perfil } from './Img.elements'
import { MdOutlineDesignServices  } from "react-icons/md";
import { FiDatabase  } from "react-icons/fi";
import {HiOutlineDesktopComputer} from "react-icons/hi";
import { AiOutlineSwap  } from "react-icons/ai";
import { CgWebsite  } from "react-icons/cg";


const Info = () =>{
   
    return(
        <>
        <Containt>

                    <img src={urls.pcs} alt='' id='pc'/>
            <Perfil>
                <div>
                    
                    <h1><b>About me</b></h1>
                    <div  id='Atext'>
                        <p>Hi, I'm Javier Díaz Rayo, a junior multiplatform developer and graphic designer from Spain, I'm 30 years old.</p>
                        <p>I have notions of Java, html 5, mysql, I am currently training myself in React, JavaScript.
                        Previously I was trained in graphic design and editorial design, I have notions of Photoshop, Illustrator and Indesign. I like design as well as layout.
                        </p>
                     
                        
                        <p>
                        I work very well in a team, I am very communicative, social, creative, cooperative and proactive,
                        creative, cooperative and proactive.
                        </p>
                    </div>
                    
                </div>
            </Perfil>
        
                <table >
                    <tbody>
                        <tr>
                            <td>
                                <div>  <MdOutlineDesignServices/></div>
                                <p>Graphic design</p>  
                                <p>Photoshop</p> 
                                <p>Illustrator</p>
                                <p>Indesing</p>


                                <p> Adobe</p> 
                            </td>
                            <td>
                            <div><CgWebsite/></div> 
                                <p>Front-end</p>  
                                <p>html 5</p> 
                                <p>JavaScript (Learning)</p>
                                <p>React (Learning)</p>

                                <p>Android Studio</p>
                                <p>Visual Studio code</p>
                                <p>Wordpress</p>
                            </td>
                            <td>
                            <div><HiOutlineDesktopComputer/><AiOutlineSwap/><FiDatabase/></div> 
                                <p>Back-end</p> 
                                <p>mysql</p> 
                                <p>phpmyadmin</p> 

                                <p>Postgresql</p> 
                                <p>Visual Studio code</p> 
                                <p>Eclipse</p> 
                            </td>
                        </tr>
                    </tbody>  
                    
                </table>

        </Containt>
            
        </>
   
    );
}

export default Info