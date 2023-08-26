import { ChakraProvider, Button, IconButton, Container, Flex, FormControl, FormLabel, Heading, VStack, Text, Input, Checkbox, Spacer } from "@chakra-ui/react";
import theme from "./theme";
import { DeleteIcon } from "@chakra-ui/icons";
import React, { useState } from "react";



function App() {
  const [todos, setTodos] = useState([
    {
      value: "Tennis",
      isDone: false,
    },
    {
      value: "Mobile Legend",
      isDone: false,
    }
  ]);
  const [newTodo, setNewTodo] = useState([]);

  function addTodo() {
    if (newTodo) {
      const newTodos = [...todos, {value: newTodo, isDone: false}];
      setTodos(newTodos);
      setNewTodo("");
    }
  };

  function deleteTodo(id) {
    const copy = [...todos];
    copy.splice(id, 1);
    setTodos(copy);
  };

  const todoCompleted = todos.filter((todo) => todo.completed).length;

  return (
  <ChakraProvider theme={theme}>
    <Container maxW={"container.md"}>
    <VStack 
    borderBottomColor={"gray.300"} 
    borderBottomWidth={"1px"} 
    pb={"1em"} >
          <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize="6xl" fontWeight="extrabold">Todo List App
          </Text>
            <FormControl width={"100%"} mb={"1em"}>
              <FormLabel>Add To do</FormLabel>
              <Input px={"4"} placeholder="What do you want to do?" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
            </FormControl>
            <Button onClick={addTodo} colorScheme="blue">Submit</Button>
    </VStack>
    <VStack >
      <Heading my={"2em"} bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize="3xl" fontWeight="extrabold">Done: {todoCompleted}</Heading>
        {todos.map((todo, id) => (
          <Flex key={todo.value} w="100%" mb=".5em">
            <Checkbox borderColor={"green.500"} colorScheme="green" checked={todo.completed} onChange={() =>{
              const copy = [...todos];
              copy[id].completed = !copy[id].completed;
              setTodos(copy);}}>
              <Text>{todo.value}</Text>
            </Checkbox>
            <Spacer/>
            <IconButton variant="outline" colorScheme="red" icon={<DeleteIcon />} onClick={() => deleteTodo(id)}></IconButton>
          </Flex>
          ))}
    </VStack>
    </Container>
  </ChakraProvider>);
}

export default App;
