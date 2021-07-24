import axios from "axios";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRef } from "react";
import Head from "./component/Head";
import Section from "./component/Section";
import Search from "./component/Search";

function App() {
  const [search, setSearch] = useState("");

  const searchRef = useRef(null);

  const [kitties, setKitties] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setKitties(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const kittiesInfo = kitties?.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  const onStart = () => {
    searchRef?.current.scrollIntoView({
      behavior: "smooth",
      inline: "nearest",
    });
    setTimeout(() => {
      searchRef?.current.focus();
    }, 500);
  };
  const onInputChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <ChakraProvider>
      <Head onClick={onStart} />
      <Section data={kittiesInfo} searchRef={searchRef} onChange={onInputChange} value={Search}/>
    </ChakraProvider>
  );
}

export default App;
