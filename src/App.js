import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Practic from "./components/Practic";
import { Container } from "react-bootstrap";
import Practictwo from "./components/Practictwo";
import Practicthree from "./components/Practicthree";
import { useEffect, useState } from "react";
import TaksForms from "./components/TaksForms/TaksForms";
import VeterinaryPatients from "./components/VeterinaryPatients/VeterinaryPatients";
import WebNotice from "./components/WebNotice/WebNotice";
import axios from "axios";

function App() {
  const [changestatus, setchangestatus] = useState(false);
  const [articles, SetArticle] = useState([]);

  /*  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=ar&apiKey=3ef5a5b9375d46c0b4c92daff3ad59df"
    )
      .then((res) => res.json())
      .then((data) => SetArticle(data.articles || []));
  }, []); */

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=ar&apiKey=3ef5a5b9375d46c0b4c92daff3ad59df"
      );
      SetArticle(res.data.articles || []);
    } catch (error) {
      console.error("Error", error);
    }
  };
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
        <TaksForms />
        <VeterinaryPatients />
        <WebNotice articles={articles} />
      </Container>
    </div>
  );
}

export default App;
