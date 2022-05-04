import React from 'react';
import urls  from '../../routesImg/imgRoutes';
import { Containt,Material,Perfil } from './Img.elements'

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
           


           <Material>
           <div>
                    <p>Programs design</p>
                      
                        Photoshop
                        
                        Illustrator
                    
                        Indesign
                </div>
          
              
                    <p>Front-end</p>  
                        <p>html 5</p> 
                        JavaScript (Learning)
                        React (Learning)

                        Android Studio
                        Visual Studio code
                        Wordpress

               
         
              
               
            <div>
                <p>Back-end</p> 
                    mysql
                    phpmyadmin


                    Postgresql
                    Visual Studio code
                    Eclipse
            </div>      
            </Material>
                
          
        
         
        </Containt>
            
        </>
   
    );
}

export default Info