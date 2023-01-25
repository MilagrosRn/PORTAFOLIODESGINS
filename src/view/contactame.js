export default ()=>{
    const view =`
<section class="container contact">
<h2 class="title-form">Contactame</h2>
<div class="row">
<form class="col s12 m6">
    <div class="row card-panel">
        <div class="input-field col s12"> 
            <input type="text" id="nombre">
            <label for="nombre">Nombre</label>
        </div>
        <div class="input-field col s12"> 
            <input type="text" id="apellido"  class="validate" required>
            <label for="apellido">Apellido</label>
        </div>
        <div class="input-field col s12"> 
            <input type="text" id="asunto" pclass="validate" required>
            <label for="asunto">asunto</label>
        </div>
        <div class="input-field col s12"> 
            <textarea name=""  id="descripcion" cols="50" rows=""  value=""></textarea>
            <label for="descripcion">descripcion</label>
            </div> 
            <button class="btn-descarga">Enviar correo</button>
    </div>
   
</form>
    <div class="col s12 m6 img-form">
<img src="./imagenes/redesign/Group 25.png">
</div>
</div>
</section>
    `
    
    const div = document.createElement('div')
    div.innerHTML = view;
    return div
}