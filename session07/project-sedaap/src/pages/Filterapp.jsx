import React, { useState } from "react";
import { Input, Box, Center, Heading, VStack, FormControl, FormLabel, Text } from "@chakra-ui/react";
import Navigation from "../components/Navigation";

function Filterapp() {
    const dataset = ["Banana", "Apple", "Orange", "Mango", "Pineapple", "Watermelon", "Strawberry", "Melon"];

    const [filterValue, setFilterValue] = useState("");
    
    return (
    <>
        <Box>
            <Center>
                <Heading>Filter</Heading>
                <VStack>
                    <FormControl>
                        <FormLabel>Search</FormLabel>
                        <Input type="text" width={"xs2"} onChange={(e) => setFilterValue(e.target.value)}/>
                    </FormControl>
                </VStack>
            </Center>
        </Box>
        <Box>
            <Center>
                {dataset.filter((data) => {
                    return data.toLowerCase().includes(filterValue.toLowerCase());
                })
                .map((data) => (
                    <Box key={data} className="text-data" borderRadius={"5px"} color="white" m="5px" padding={"5px"} w={"120px"}><Center><Text className="text-data">{data}</Text></Center></Box>
                ))}
            </Center>
        </Box>
        <Navigation/>
    </>
    );
};

export default Filterapp;