import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Practic from "./components/Practic";
import { Container } from "react-bootstrap";
import Practictwo from "./components/Practictwo";
import Practicthree from "./components/Practicthree";
import { useState } from "react";
import TaksForms from "./components/TaksForms/TaksForms";
import VeterinaryPatients from "./components/VeterinaryPatients/VeterinaryPatients";

function App() {
  const [changestatus, setchangestatus] = useState(false);
  return (
    <div>
      <Container>
        <Practic />
        <Practictwo classroom="My Friends" />
        <Practicthree classroom="My Friends" changestatus={changestatus} />
        <div>
          <button
            className="btn btn-danger text-center"
            onClick={() => setchangestatus(!changestatus)}
          >
            Click Me!
          </button>
        </div>
        <TaksForms/>
        <VeterinaryPatients />
      </Container>
    </div>
  );
}

export default App;
