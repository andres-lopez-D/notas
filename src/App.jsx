import { useState } from "react";


function App() {
  //todo: presentar el concepto de "state"
  
  //hooks
 const [inputState, setInputState] = useState({
   titulo:"",
   fecha:"",
   nota:"",
 });//valor inicial del state
 const initialState= JSON.parse(localStorage.getItem("notas"))||[];
 const [notas, setNotas] = useState(initialState)
 
  const handleInputChange = (event) => {
    //console.log(event.target.);
    setInputState({
      ...inputState,
      [event.target.name]: event.target.value,
    });
  };
  const handleResetBorrar= () => {
    setInputState({
      ...inputState,
    titulo: "", 
    fecha: "", 
    nota: ""
  });
};



  const handleResetGuardar = () => {
    const nuevoArreglo = [...notas, inputState]
    setNotas([...nuevoArreglo]);
    localStorage.setItem("notas", JSON.stringify(nuevoArreglo));
    handleResetBorrar();
  };

  const handleBorrarTodo=()=>{
    setNotas([])
    localStorage.setItem("notas", JSON.stringify([]));
  }

  const handleBorrarNota=(index)=>{
    const NuevoArreglo = []

    console.log(index)
    
    
    notas.forEach((nota, i)=>{
      if(index !== i){
        NuevoArreglo.push(nota)
      }
    });
    localStorage.setItem("notas", JSON.stringify(NuevoArreglo));
    setNotas([...NuevoArreglo]);
  }

  const handleClickNota= (index) => {
    setInputState({...notas[index]});

  }

   return (
    <div className="App container">
      <div className="row">
        <div className="col">
          <h3>Lista</h3>
          <frame scrolling="yes">
          {
            notas.length===0 &&
            "Al momento no tienes notas guardadas. Puedes crear una en el formulario"
          }
            {
            notas.length !== 0 && (
              <ol scrolling="yes">
                {notas.map((item, index)=>{
                  return(
                    <li key={index} onClick = {()=>handleClickNota(index)}>
                      {item.titulo}({item.fecha})&nbsp;&nbsp;&nbsp;
                      <i
                      className="bi-x-circle-fill"
                      onClick={()=>handleBorrarNota(index)}
                      style={{color:"grey", fontSize:"1rem", cursor:"pointer",}}
                      ></i>
                      <br />
                      {item.nota}
                      
                    </li>
                  )
                })}
              </ol>
            )
          }
          </frame>
          
          <br />
          
          <button
               type="button"
               className="btn btn-secondary"
               onClick={handleBorrarTodo}
               style={{width: "100%"}}
               disabled={
                 notas.length===0
               }
          >Borrar Todo</button>
        </div>
        <div className="col">
         <h3>Notas</h3><br></br>
         <label className="mb-2"  style={{width: "100%"}}>
          Titulo
         <input 
           id="titulo" 
           name="titulo" 
           type="text"
           onChange={handleInputChange}
           value={inputState.titulo}
           style={{width: "100%"}}
           />
           </label>
           <br/>
           <label className="mb-2"style={{width: "100%"}}>
            Fecha 
            <input 
            id="fecha" 
            name="fecha" 
            type="date"
            onChange={handleInputChange}
            value={inputState.fecha}
            style={{width: "100%"}}
            />
            </label>
            <br/>
            <label className="bm-2"style={{width: "100%"}}>
             Nota 
             <textarea 
             id="nota" 
             name="nota" 
             onChange={handleInputChange}
             value={inputState.nota}
             style={{width: "100%"}}
             />
            </label>
            <hr></hr>
      <div className="ms-2 me-2 mt-2 row">

      <div className="col">
        <span className="row me-1">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleResetBorrar}
            disabled={inputState.titulo===""||
                      inputState.fecha===""||
                      inputState.nota===""}
          >
            Limpiar
          </button>
          </span>
        </div>

        <div className="col">
          <span className="row ms-1">
          
          <button 
            type="button"
            className="btn btn-secondary"
            onClick={handleResetGuardar}
            disabled={inputState.titulo===""||
                      inputState.fecha===""||
                      inputState.nota===""}
            >
            Guardar
          </button>
          </span>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;