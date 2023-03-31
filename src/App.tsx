import { Route, Routes } from "react-router-dom";
import Home from "components/pages/Home";
import Clients from "components/pages/Clients";
import NewClientForm from "components/pages/NewClientForm";
import Frame from "components/pages/Frame";

function App() {
  return (
    <>
      <Frame />
      <div className="pl-28 pt-8 pr-9 pb-9 w-screen h-[calc(100vh-130px)] bg-pale-gray">
        <Routes>
          <Route path="*" element={<h1 className="text-black-87">Página não encontrada: que pena! Por que você não tenta ir para a homepage?</h1>} />
          <Route path="/" element={<Home />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/add-new-client" element={<NewClientForm />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
