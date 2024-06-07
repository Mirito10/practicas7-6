function agregarTarea(){

    //Obtenemos el valor del campo tarea
    let nuevaTareaTexto = document.getElementById("nuevaTarea").value;


    if (nuevaTareaTexto === ""){
        alert("Meta una tarea, porfa!");
        return;
    }

    //crear el elemento lista
    let nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = nuevaTareaTexto + " ";

    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Elimniar";
    botonEliminar.onclick = function (){
        nuevaTarea.remove();
    }

    //Agregar el boton a la lista
    nuevaTarea.appendChild(botonEliminar);

    //agregar el elemento tarea a la lista
    document.getElementById("listaTareas").appendChild(nuevaTarea);

    //limpiar el cuadro de texto del nombre tarea
    document.getElementById("nuevaTarea").value = "";
}