export default ()=>{
    const view =`
    

    <section class="sob">
    <div class="row general">
       

        <div class="col s12 container-title">
            <h2>SOBRE MI</h2>
            <h3>SOY WEB DEVELOPER Y UX/UI DESIGNER</h3>
            <div class="row general-section">
                <div class="col s4 m4">
                <img  class="general-section-item " src="./imagenes/redesign/Group 23.png" alt="">
                    <h3>¿Qué hago?</h3>
                    <p>
                    Desarrollo productos web mejorando continuamente procesos y presentación de productos a los clientes. 
                    </p>
                </div>
                <div class="col s4 m4">
                <img  class="general-section-item " src="./imagenes/redesign/Group 6.png" alt="">
                    <h3>¿Cómo lo hago?</h3>
                    <p>
                    Me comprometo con mi trabajo, combino conocimientos con aprendizaje constante y pasion por lo que hago.
                    </p>
                </div>
                <div class="col s4 m4">
                <img  class="general-section-item " src="./imagenes/redesign/Group 7.png" alt="">
                    <h3>¿Porqué yo?</h3>
                    <p>
                    No le temo a los nuevos retos, soy proactiva, adaptable y resilente.Trabajo con la mejor actitud ya sea individual o en equipo. 
                    </p>
                </div>
            </div>
        </div>
     
        </div>
</section>

<div class="habil" > 
<button class="btn-descarga">
                <a href="./imagenes/redesign/milagroscv.pdf" download="CVMilagrosRodriguez">
                Descarga mi CV
                </a>
            </button>
           
            <h2>MIS HABILIDADES</h2>
            </div>
            
<section class=" tools hab-cont-blandas">
    <div class="section-tools" >
        <div class="row hab-blandas">
            <div class="hab-img">
                <img  src="./imagenes/redesign/Group 23.png" alt="">
                
            </div>
           <div>
           <h3>MAQUETACION Y DISEÑO</h3>
                    <p>Mobile First Design /Atomic Design</p>
                    <p> Photoshop</p>
                    <p> CorelDraw</p>
                    <p> Adobe Illustrator</p>
                    <p>Figma / Proto.io</p>
           </div>
        </div>
        <div class="row hab-blandas">
            <div class="hab-img">
                <img  src="./imagenes/redesign/Group 6.png" alt="">
                
            </div>
           <div>
           <h3>DESARROLLO FRONT-END</h3>
                    <p>Angular</p>
                    <p>Nx</p>
                    <p>JavaScript ES6 </p>
                    <p>Consumo de API’s Rest</p>
                    <p>CSS3 / SASS / SCSS</p>
                    <p>Java (Neatbeans 8.12)</p>
                    <p>BD noSQL / Firebase</p>
                    <p>SQL</p>
                    <p>TESTING: Jest / Jasmine</p>
                   
           </div>
        </div>
        <div class="row hab-blandas">
        <div class="hab-img">
            <img  src="./imagenes/redesign/Group 7.png" alt="">
            
        </div>
       <div>
       <h3>HERRAMIENTAS AGILES</h3>
                <p> Trello / Jira</p>
                <p> Git / Github /Gitlab / Bitbucket</p>
                      <p> Scrum / Kanban</p>
                     
               
       </div>
    </div>
       
    </div>
</section>

    `
    
    const div = document.createElement('div')
    div.innerHTML = view;
    return div
}
/* <p>
Soy Milagros Font-end Developer egresada de Laboratoria .Me gusta aprender constantemente para crear 
interfaces que busquen una mejor experiencia de usuario.
</p>
<p>
En mi formación consolide habilidades como el autoaprendizaje, trabajo en equipo,
orientacion a resultados y la aplicación de metodologías agiles.

</p>
<p>
Me considero una persona positiva, suelo contagiar ese ánimo al equipo de trabajo y
me comprometo con los productos que desarrollo.
</p>*/