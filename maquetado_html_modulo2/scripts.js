//editar Acerca De
function cambiar_parrafo(){
    document.getElementById("fondoBotones").style.display="block";
    let texto = document.getElementById("edit-acercade").innerText;
    console.log (texto)
}
function myFunction2(valor){
    document.getElementById("acercaDe_texto").innerText = valor;

};
function logMessage (message){
    console.log(message + "<br>")
}

let textarea=document.getElementById("edit-acercade")
textarea.addEventListener('keyup', (e) => {
    logMessage(`Key "${e.key}" released [event: keyup]`);
    if (e.key == "Enter"){
        document.getElementById("fondoBotones").style.display="none"
        
    }
  
    
});



function showFile (input){

let file =input.files[0];
alert (`File name: ${file.name}`);
alert(`Last modified: ${file.lastModified}`);

let reader =new FileReader();
reader.readAsText (file);
reader.onload =function(){
console.log (reader.result)
document.getElementById("acercaDe_texto").innerText = reader.result

};
reader.onerror =function(){
console.log (reader.error);
};
document.getElementById("fondoBotones").style.display="none"
}

//editar Experiencia
function cambiar_parrafoExp(){
    document.getElementById("fondoBotonesExp").style.display="block";
    let textoExp = document.getElementById("edit-experiencia").innerText;
    console.log (textoExp)
}
function myFunctionExp(valor){
    document.getElementById("experiencia_texto").innerText = valor;
};
function logMessage (message){
    console.log(message + "<br>")
}

let textareaExp =document.getElementById("edit-experiencia")
textareaExp.addEventListener('keyup', (e) => {
    logMessage(`Key "${e.key}" released [event: keyup]`);
    if (e.key == "Enter"){
        document.getElementById("fondoBotonesExp").style.display="none"
        
    }
  
    
});


function showFileExp (input){
let fileExp =input.files[0];
alert (`File name: ${fileExp.name}`);
alert(`Last modified: ${fileExp.lastModified}`);

let reader =new FileReader();
reader.readAsText (fileExp);
reader.onload =function(){
console.log (reader.result)
document.getElementById("experiencia_texto").innerText = reader.result
};
reader.onerror =function(){
console.log (reader.error);
};
document.getElementById("fondoBotonesExp").style.display="none"
}

//editar Educacion
function cambiar_parrafoEd(){
    document.getElementById("fondoBotonesEd").style.display="block";
    let textoEd = document.getElementById("edit-educacion").innerText;
    console.log (textoEd)
}
function myFunctionEd(valor){
    document.getElementById("educacion_texto").innerText = valor;
};
function logMessage (message){
    console.log(message + "<br>")
}

let textareaEd =document.getElementById("edit-educacion")
textareaEd.addEventListener('keyup', (e) => {
    logMessage(`Key "${e.key}" released [event: keyup]`);
    if (e.key == "Enter"){
        document.getElementById("fondoBotonesEd").style.display="none"
        
    }
  
    
});

function showFileEd (input){
    let fileEd =input.files[0];
    alert (`File name: ${fileEd.name}`);
    alert(`Last modified: ${fileEd.lastModified}`);
    
    let reader =new FileReader();
    reader.readAsText (fileEd);
    reader.onload =function(){
    console.log (reader.result)
    document.getElementById("educacion_texto").innerText = reader.result
    };
    reader.onerror =function(){
    console.log (reader.error);
    };
    document.getElementById("fondoBotonesEd").style.display="none"
    }

//editar Proyectos
function cambiar_parrafoPro(){
    document.getElementById("fondoBotonesPro").style.display="block";
    let textoPro = document.getElementById("edit-proyectos").innerText;
    console.log (textoPro)
}
function myFunctionPro(valor){
    document.getElementById("proyectos_texto").innerText = valor;
};
function logMessage (message){
    console.log(message + "<br>")
}

let textareaPro =document.getElementById("edit-proyectos")
textareaPro.addEventListener('keyup', (e) => {
    logMessage(`Key "${e.key}" released [event: keyup]`);
    if (e.key == "Enter"){
        document.getElementById("fondoBotonesPro").style.display="none"
        
    }
  
    
});



function showFilePro (input){
let filePro =input.files[0];
alert (`File name: ${filePro.name}`);
alert(`Last modified: ${filePro.lastModified}`);

let reader =new FileReader();
reader.readAsText (filePro);
reader.onload =function(){
console.log (reader.result)
document.getElementById("proyectos_texto").innerText = reader.result
};
reader.onerror =function(){
console.log (reader.error);
};
document.getElementById("fondoBotonesPro").style.display="none"
}




//editar Idiomas
function cambiar_parrafoId(){
    document.getElementById("fondoBotonesId").style.display="block";
    let textoId= document.getElementById("edit-idiomas").innerText;
    console.log (textoId)
}
function myFunctionId(valor){
    document.getElementById("idiomas_texto").innerText = valor;
};
function logMessage (message){
    console.log(message + "<br>")
}

let textareaId =document.getElementById("edit-idiomas")
textareaId.addEventListener('keyup', (e) => {
    logMessage(`Key "${e.key}" released [event: keyup]`);
    if (e.key == "Enter"){
        document.getElementById("edit-idiomas").style.display="none"
        
    }
  
    
});


function showFileId (input){
let fileId =input.files[0];
alert (`File name: ${fileId.name}`);
alert(`Last modified: ${fileId.lastModified}`);

let reader =new FileReader();
reader.readAsText (fileId);
reader.onload =function(){
console.log (reader.result)
document.getElementById("idiomas_texto").innerText = reader.result
};
reader.onerror =function(){
console.log (reader.error);
};
document.getElementById("fondoBotonesId").style.display="none"
}






    
  




