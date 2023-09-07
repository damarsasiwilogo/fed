import React, { useEffect, useState } from "react";
import { ChakraProvider, Button, Text, Flex, Spinner, VStack } from "@chakra-ui/react";
import Navigation from "../components/Navigation";

function Stopwatch () {
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (isRunning) {
            const interval = setInterval(() => {
                setTimeElapsed((time)=> time + 1);
            }, 1000);
    
            return () => clearInterval(interval);
        }
    }, [isRunning]);

    const start = () => {
        setIsRunning(true);
    };

    const stop = () => {
        setIsRunning(false);
    };

    const reset = () => {
        setTimeElapsed(0);
        setIsRunning(false);
    };
    
    return (
        <ChakraProvider>
        <main>
            <Flex justifyContent="center" alignItems="center">
                <VStack>
                    <Text>Stopwatch</Text>
                    <div>
                        <Button
                        onClick={start}
                        disabled={isRunning}
                        color="blue"
                        size="large"
                        >Start</Button>
                    <Button
                        onClick={stop}
                        disabled={!isRunning}
                        color="red"
                        size="large"
                        >Stop</Button>
                    <Button
                        onClick={reset}
                        color="gray"
                        size="large"
                        >Reset</Button>
                    </div>
                        <Spinner size="xl" color="blue" loading={isRunning} />
                        <Text>{timeElapsed} seconds</Text>
                </VStack>
            </Flex>
            <Navigation/>
        </main>
        </ChakraProvider>);
};

export default Stopwatch;