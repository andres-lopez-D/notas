return(
<div classname="App container">
<div className="row">
<div className="col">
<h3>Lista</h3>
</div>
<div className="col">
<h3>Notas</h3>
<label className="mb-2">
Titulo
<input 
  id="titulo"
  name="titulo"
  type="text"
  onChange={handleInputChange}
  value={inputState.titulo}
  />
  </label>
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
   >

 Limpiar
         </button>
         </div>
         </div>
         };
)