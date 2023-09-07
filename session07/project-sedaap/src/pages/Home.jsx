import { useState } from "react";
import { Button, VStack } from "@chakra-ui/react";
import Logo from "../logo.svg";
import Navigation from "../components/Navigation";

function Home({text}) {
    const [counter, setCounter] = useState(0);
    const [dataDiri, setDataDiri] = useState({ nama:"Damar" , umur: 20});

    function handleClick() {
        setCounter((c) => c + 1);

        setDataDiri((data) => {
            const copy = {...data};
            copy.umur = data.umur + 1;
            return copy;
        });
    };

    return (
        <>
        <VStack>
            <main>
                <h2>Exercise 7</h2>
                <p>{counter}</p>
                <p>{text}</p>
                <p>nama: {dataDiri.nama}
                <br />
                umur: {dataDiri.umur}</p>
                <div>
                    <Button onClick={handleClick}>Nambah Umur</Button>
                </div>
                <img src={Logo} className="App-logo" alt="logo" />
            </main>
            <Navigation/>
        </VStack>
        </>
    )
}
export default Home;