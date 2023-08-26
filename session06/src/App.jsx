import { ChakraProvider, Button, IconButton, Container, Flex, FormControl, useDisclosure, Heading, VStack, Text, Input, Checkbox, Spacer } from "@chakra-ui/react";
import theme from "./theme";
import { DeleteIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
} from '@chakra-ui/react'


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
  
  function showDeleteDialog({todo, id}) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <IconButton icon={<DeleteIcon/>} onClick={onOpen} />
            <AlertDialog isOpen={isOpen} onClose={onClose}>
            <AlertDialogOverlay>
            <AlertDialogContent>
            <AlertDialogHeader>Delete Todo</AlertDialogHeader>
            <AlertDialogBody>Are you sure you want to delete this todo item?</AlertDialogBody>
            <AlertDialogFooter>
                <Button variant="danger" onClick={() => deleteTodo(todo.id, onClose)}>Confirm</Button>
                <Button variant="secondary" onClick={onClose}>Cancel</Button>
            </AlertDialogFooter>
            </AlertDialogContent>
            </AlertDialogOverlay>
            </AlertDialog>
        </>
    );
}

  function deleteTodo(id) {
    const copy = todos.filter((todo) =>{
      return todo.id !== id;
    });
    setTodos(copy);
  };
  // function deleteTodo(id) {
  //   const copy = [...todos];
  //   copy.splice(id, 1);
  //   setTodos(copy);
  // };

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
              <Input placeholder="What do you want to do?" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
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
            <IconButton variant="outline" colorScheme="red" icon={<DeleteIcon />} onClick={() => showDeleteDialog(id)}></IconButton>
          </Flex>
          ))}
    </VStack>
    </Container>
  </ChakraProvider>);
}

export default App;
