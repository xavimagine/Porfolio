import React from 'react';
import urls  from '../../routesImg/imgRoutes';
import { Containt,ProgramasD,Programs,Back,Front,Perfil } from './Img.elements'

const Info = () =>{
   
    return(
        <>
        <Containt>
            <Perfil>
                <div>
                    <img src={urls.me} alt=''/>
                    <h1><b>About me</b></h1>

                    <p>Hi, I'm Javier Díaz Rayo, a junior multiplatform developer and graphic designer from Spain, I'm 30 years old.</p>
                    <p>
                    I have notions of Java, html 5, mysql, I am currently training myself in React, JavaScript.
                    Previously I was trained in graphic design and editorial design, I have notions of Photoshop, Illustrator and Indesign. I like design as well as layout.
                    </p>
                    <p>
                    I work very well in a team, I am very communicative, social, creative, cooperative and proactive,
                    creative, cooperative and proactive.
                    </p>
                </div>
            </Perfil>
           
           <Front>
            <div>
                    <p>Front-end</p>  
                        <img src={urls.html} alt=''/>
                        html 5
                        <img src={urls.js} alt=''/>
                        JavaScript (Learning)
                        <img src={urls.reat} alt=''/>
                        React (Learning)

                </div>
           </Front>
           
            <Back>
            <div>
                <p>Back-end</p> 
                    <img src={urls.mysql} alt=''/>
                    mysql
                    <img src={urls.phpmyadmin} alt=''/>
                    phpmyadmin
            </div>
            </Back>
           
            <Programs>
                <div>
                    <p>Programs</p>
                        <img src={urls.android} alt=''/>
                         Android Studio
                        <img src={urls.eclipse} alt='' />
                         Eclipse
                        <img src={urls.postgresql} alt=''/>
                         Postgresql
                        <img src={urls.code} alt=''/>
                         Visual Studio code
                        <img src={urls.wordpress} alt=''/>
                         Wordpress
                </div>
            </Programs>
                
            <ProgramasD>
                <div>
                    <p>Programs design</p>
                        <img src={urls.photoshop} alt=''/>
                        Photoshop
                        <img src={urls.illustrator} alt=''/>
                        Illustrator
                        <img src={urls.indesign} alt=''/>
                        Indesign
                </div>
            </ProgramasD>
          
        </Containt>
            
        </>
   
    );
}

export default Info