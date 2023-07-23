//Inicializacion del objeto tareasJSON
const tareasJSON = [
  {
    id: 1,
    tarea: "Entregar Desafio",
    realizado: false,
  },
  {
    id: 2,
    tarea: "Estudiar nuevos modulos",
    realizado: false,
  },
  {
    id: 3,
    tarea: "Preparar materiar",
    realizado: false,
  },
];
//DOM
const agregarT = document.querySelector("#imp_task");
const mostrarTareas = document.querySelector("tbody");
const btArgrar = document.getElementById("btA");
const total = document.getElementById("total");
const realizadas = document.getElementById("realizadas");
//funcion
const agregarTarea = () => {
  const tarea = agregarT.value;
  if (!tarea) {
    alert("Debes Agregar una tarea");
    return false;
  }
  const tareaFinal = tareasJSON[tareasJSON.length - 1];
  const nuevaTarea = {
    id: tareaFinal ? tareaFinal.id + 1 : 1,
    tarea: tarea,
    realizado: false,
  };
  tareasJSON.push(nuevaTarea);
  console.log(tareasJSON);
  mostrarHtml();
};

btArgrar.addEventListener("click", agregarTarea);

const status = (id) => {
  const idTarea = tareasJSON.findIndex((tareasJSON) => tareasJSON.id === id);
  if (tareasJSON[idTarea].realizado === false) {
    const nuevo = {
      id: tareasJSON[idTarea].id,
      tarea: tareasJSON[idTarea].tarea,
      realizado: true
    };
    tareasJSON.splice(idTarea, 1, nuevo);
  } else {
    const nuevo = {
      id: tareasJSON[idTarea].id,
      tarea: tareasJSON[idTarea].tarea,
      realizado: false
    };
    tareasJSON.splice(idTarea, 1, nuevo);
  
  }
  mostrarHtml();
};

borrarTarea=(id)=>{
  let idTarea = tareasJSON.findIndex((tareasJSON)=>tareasJSON.id===id)
  tareasJSON.splice(idTarea,1)
  mostrarHtml()
}

const mostrarHtml = () => {
  let html = "";
  let check = "";
  let totalRealizados = [];
  tareasJSON.forEach((tareasJSON) => {
    check = tareasJSON.realizado
      ? `<li>${tareasJSON.tarea}</li><td><input type="checkbox" checked onclick="status(${tareasJSON.id})"></td>`
      : `<li>${tareasJSON.tarea}</li><td><input type="checkbox"  onclick="status(${tareasJSON.id})"></td>`;
    html += `
      <tr>
      <td>${tareasJSON.id}</td>
      <td>${check}</td>
      
       <td><button id="bt2"  onclick="borrarTarea(${tareasJSON.id})">X</button></td>
      </tr>
      
      `;
    if (tareasJSON.realizado === true) {
      totalRealizados.push(tareasJSON);
    }
  });
 
  total.innerHTML ="Total:"+ tareasJSON.length;
  realizadas.innerHTML ="Realizadas:"+ totalRealizados.length;
  mostrarTareas.innerHTML = html;
};

mostrarHtml();

