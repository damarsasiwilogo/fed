import Navigation from "../components/Navigation";
import { CiCirclePlus, CiCircleMinus } from 'react-icons/ci';
import { Box, Center, IconButton } from '@chakra-ui/react'
import { useState } from "react";

function Counter() {
    const [count1, increment1, decrement1,] = useCounter(0, 1);
    const [count2, increment2, decrement2,] = useCounter(0, 5);

    function useCounter(val, step) {
        const [count, setCount] = useState(val);
        
        function increment() {
            setCount(count + step);
        }
        
        function decrement() {
            setCount(count - step);
        }
        
        return [count, increment, decrement];
    }

    return (
        <>
        <Box>
            <Center>
                <div>
                    <p>you clicked {count1} times</p>
                    <IconButton icon={<CiCirclePlus/>} isRound='true' colorScheme="green" size="md" alignSelf='flex-end' onClick = {increment1} />
                    <IconButton icon={<CiCircleMinus/>} isRound='true' colorScheme="red" size="md" alignSelf='flex-end' onClick = {decrement1} />
                </div>
                <div>
                    <p>you clicked {count2} times</p>
                    <IconButton icon={<CiCirclePlus/>} colorScheme="green" size="md" onClick = {increment2} />
                    <IconButton icon={<CiCircleMinus/>}colorScheme="red" size="md" onClick = {decrement2} />
                </div>
                <Navigation/>
            </Center>
        </Box>
        </>
    );
}

export default Counter;