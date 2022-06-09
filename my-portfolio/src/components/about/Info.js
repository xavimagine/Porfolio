
import React from 'react';
import urls  from '../../routesImg/imgRoutes';
import { Containt,Perfil,Impc,Tblenguajes,Bienvenida } from './Img.elements'
import { MdOutlineDesignServices  } from "react-icons/md";
import { FiDatabase  } from "react-icons/fi";
import {HiOutlineDesktopComputer} from "react-icons/hi";
import { AiOutlineSwap  } from "react-icons/ai";
import { CgWebsite  } from "react-icons/cg";
import { GoGist } from "react-icons/go";


const Info = () =>{
   
    return(
        <>
        <Containt>
            <Bienvenida>
            <img src={urls.avatar} alt='' id='avat'></img>
            Bienvenidos Soy un programador multiplatforma  ydiseñador gráfico.
            </Bienvenida>
           
            <Impc> <img src={urls.pcs} alt='' id='pc'/></Impc>
                   
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
            <Tblenguajes>
                <table >
                    <tbody>
                        <tr>
                            <td> <MdOutlineDesignServices/> </td>
                            <td> <CgWebsite/> </td>
                            <td> <GoGist/> </td>
                            <td><HiOutlineDesktopComputer/><AiOutlineSwap/><FiDatabase/> </td>
                        </tr>
                        <tr>
                            <td> <h2>Graphic design</h2>   </td>
                            <td> <h2>Front-end</h2>   </td>
                            <td> <h2>Back-end</h2>  </td>
                            <td> <h2>Base de datos</h2>  </td>
                        </tr>
                        <tr  id="lenguajes">
                            <td/>
                            <td> Lenguajes: </td>
                            <td> Lenguajes: </td>
                            <td> Lenguajes: </td>
                        </tr>

                        <tr>
                            <td/>
                            <td> html 5 </td>
                            <td>Java</td>
                            <td> Sql </td>
                        </tr>
                        <tr>
                           <td/>
                            <td> Css </td>
                                                     
                        </tr>
                        <tr>
                            <td/>
                            <td> JavaScript (Learning)   </td>
                        
                        </tr>
                        <tr>
                            <td/>
                            <td> React (Learning)   </td>
                            <td/>
                           
                        </tr>
                        <tr>
                            <td>Programas de diseño:</td>
                            <td> IDE:  </td>
                            <td> IDE:  </td>
                            <td> IDE:  </td>
                           
                        </tr>
                        <tr>
                            <td>Photoshop</td>
                            <td> Android Studio   </td>
                            <td> Visual Studio code  </td>
                            <td> Postgresql  </td>
                        </tr>
                        <tr>
                            <td> Illustrator   </td>
                            <td>Visual Studio code  </td>
                            <td>Eclipse </td>
                            <td> phpmyadmin </td>
                        </tr>
                        <tr>
                            <td> Indesing   </td>
                            <td>Wordpress  </td>
                           
                        </tr>
                        
                    </tbody>  
                    
                </table>
            </Tblenguajes>
        </Containt>
            
        </>
   
    );
}

export default Info