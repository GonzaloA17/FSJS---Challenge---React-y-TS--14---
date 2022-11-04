//punto 1//

//-Mostrar en el navegador “Hola JSX”

/*const elemento = <h1>Hola Mundo</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(elementoM);*/

//punto 2//

const users = [
    { name: "John Doe", id: 1 },
    { name: "Jane Doe", id: 2 },
    { name: "Billy Doe", id: 3 }
  ];

  const listUser = (users) =>{
    
  } 
  
  function App() {
    return (
      <>
        <h3>User names</h3>
        <ul></ul>
      </>
    );
  }
  
  ReactDOM.render(<App />, document.getElementById("root"));
  

  //punto 3//

  function App() {
    const [number1, setNumber1] = React.useState();
    const [number2, setNumber2] = React.useState();
    const [total, setTotal] = React.useState(0);
  
    return (
      <div>
        <h2>Adding Two Numbers</h2>
        <input placeholder="First Number" type="number" />
        <input placeholder="Second Number" type="number" />
  
        <button>Add Two Numbers</button>
        <p>Total:</p>
      </div>
    );
  }
  
  ReactDOM.render(<App />, document.getElementById("root"));
  