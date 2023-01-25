// <a href="./imagenes/habil/milagroscv.pdf" download="CVMilagrosRodriguez">Descarga mi CV</a>


export default () => {
    const view = `
   
    <div class="row"> 
        <div class="min1">
              <img src="./imagenes/redesign/port.gif"> 
                
            </div>
        </div> 
    </div>
    
    <div class = "proyectos">
        <h2 class="center-align title-section">PROYECTOS</h2>
            <div class="proyect-title">
                <h2 class="subtitle">FRONT-END DEVELOP</h2>
            </div>
        <div class="row">
        
            <div class="carousel">
                <a class="carousel-item" href="https://bq-apiclient.web.app/">
                    <img src="./imagenes/redesign/Frame 6.svg">
                </a>
                <a class="carousel-item" href="https://www.wibook.pe">
                <img src="./imagenes/redesign/Frame 10.svg">
                </a>
                <a class="carousel-item" href="https://milagrosrn.github.io/LIM012-fe-social-network/src/">
                <img src="./imagenes/redesign/Frame 11.svg">
                </a>
                <a class="carousel-item" href="https://milagrosrn.github.io/LIM012-data-lovers/src/">
                <img src="./imagenes/redesign/Frame 7.svg">
                </a>
                <a class="carousel-item" href="https://aliceramirez17.github.io/HackeandoLaDesigualdad2020/src/">
                <img src="./imagenes/redesign/Frame 8.svg">
                </a>
            </div>
        </div>
        <div class="proyect-title">
            <h2 class="subtitle">UX/UI DESIGN</h2>
        </div>
        <div class="row">

            <div class="carousel">
                <a class="carousel-item" href="https://bq-apiclient.web.app/">
                    <img src="./imagenes/redesign/Frame 5.svg">
                </a>
                <a class="carousel-item" href="https://www.wibook.pe">
                <img src="./imagenes/redesign/Frame 4.svg">
                </a>
                <a class="carousel-item" href="https://milagrosrn.github.io/LIM012-fe-social-network/src/">
                <img src="./imagenes/redesign/Frame 9.svg">
                </a>
                <a class="carousel-item" href="https://milagrosrn.github.io/LIM012-data-lovers/src/">
                <img src="./imagenes/redesign/Frame 2.svg">
                </a>
                <a class="carousel-item" href="https://aliceramirez17.github.io/HackeandoLaDesigualdad2020/src/">
                <img src="./imagenes/redesign/Frame 3.svg">
                </a>
            </div>
        </div>

    </div>


    
    


    
</div>

    `

    const div = document.createElement('div')
    div.innerHTML = view;
    return div
}