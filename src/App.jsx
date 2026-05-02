import ListaEmpleados from "./components/ListaEmpleados";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return(
    <>
      <Navbar></Navbar>
      <main className="container">
        <h1 className="text-center my-4">Lista Empleados</h1>
        <ListaEmpleados></ListaEmpleados>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
