const handleInputChange = (event) => (
    //console.log(event.tanget);
    setInputState({
        ...inputState,
        [event,target,name]: event,target,value,
    });
    };

const handleClickLimpiar = () => {
  setInputState({ titulo: "", fecha: "", nota: "" });
};

const handleClickGuardar = () => {
  let arregloNotas = JSON.parse 
  (localStorage.getItem("notas")) || [];
  arregloNotas.push(inputState);
  localStorage.setItem("notas", JSON.stringify(arregloNotas));
  handleClickLimpiar();
};
const handleClickLimpiaLista = () => {
  setNotas([]);
   localStorage.setItem("notas", JSON.stringify([]));
};

return(
<div classname="App container">
<div className="row">
<div className="col">
<h3>Lista</h3>
    {arregloNotas.length === 0 &&
   "Al momento no tienes notas guardadas. Puedes crear una en elformulario 
   contiguo."}
{arregloNotas.length !== 0 &&
  {arregloNotas.map((item) => {
      return (
       const handleInputChange = (event) => (
    //console.log(event.tanget);
    setInputState({
        ...inputState,
        [event,target,name]: event,target,value,
    });
    };

const handleClickLimpiar = () => {
  setInputState({ titulo: "", fecha: "", nota: "" });
};

const handleClickGuardar = () => {
  let arregloNotas = JSON.parse 
  (localStorage.getItem("notas")) || [];
  arregloNotas.push(inputState);
  localStorage.setItem("notas", JSON.stringify(arregloNotas));
  handleClickLimpiar();
};
const handleClickLimpiaLista = () => {
  setNotas([]);
   localStorage.setItem("notas", JSON.stringify([]));
};

return(
<div classname="App container">
<div className="row">
<div className="col">
<h3>Lista</h3>
    {arregloNotas.length === 0 &&
   "Al    <li>
          {item.titulo}({item.fecha})
          </li>
      );
  })}
  </ol>
)}
<button>
</div>
<div className="col">
<h3>Notas</h3>mtme="mb-2"> style({width: "100%"})
Titulo
<input 
  id="titulo"
  name="titulo"
  type="text"
  onChange={handleInputChange}
  value={inputState.titulo}
  />
  </label>
  <button
      type="button"
      className"btn btn-primary"
      onClick={handleClickimpaLista}
   >
   LImpia lista
   </button>
   </div>
   </div className="App container">
   <div className="row">
   <div classname="col">
   <h3>Lista</h3>
   {notas.length=== 0 ? (
     "Al momento no tienes notas guardadas, puedes crear una en el formulario"
   ) : }

 Limpiar
         </button>
      </div>
  <br />
  <label className="mb-2">
    Fecha
    <input
      id="fecha"
      name="fecha"
      type="text"
      onChange= {handleInputChange}
      vslue={inputState.nota}
     />
     </label>
     </div>
     </div>
     <hr />
     <div className="ms-2 mt-2">
     <button
      type="button"
      className"btn btn-primary"
      onClick={handleClickimpar}
      disabled={
            inputState.titulo=== "" || 
            inputState.fecha === "" ||
            inputState.nota === ""
            }
   >

 Limpiar
         </button>
      </span>
      </div>
          <div className="col">
          <span className="row ms-1">
          <button
          type="button"
          className="btn btn-primary"
          onClick={handleClickGuardar}
          disabled={
            inputState.titulo=== "" || 
            inputState.fecha === "" ||
            inputState.nota === ""
            }
          >
          Guardar
          </button>
          </span>
          </div>
           </div>
         </div>
          </div>
           </div>
         };
)
