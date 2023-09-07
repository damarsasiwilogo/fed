import { Link } from "react-router-dom";
import React from "react";
import { Text, Box } from "@chakra-ui/react"

function Navigation() {
    return (
        <Box h= "5vh" as="nav">
            <Text fontSize="md" fontWeight="bold" className="nav-text"><Link to="/">Home</Link></Text>
            <Text fontSize="md" fontWeight="bold" className="nav-text"><Link to="/counter">Counter</Link></Text>
            <Text fontSize="md" fontWeight="bold" className="nav-text"><Link to="/stopwatch">Stopwatch</Link></Text>
            <Text fontSize="md" fontWeight="bold" className="nav-text"><Link to="/filterapp">Filterapp</Link></Text>
            <Text fontSize="md" fontWeight="bold" className="nav-text"><Link to=""></Link></Text>
        </Box>

    // <nav>
    //     <ul>
    //         <li>
    //             <Link to="/">home</Link>
    //         </li>
    //         <li>
    //             <Link to="/about">about</Link>
    //         </li>
    //         <li>
    //             <Link to="/counter">counter</Link>
    //         </li>
    //         <li>
    //             <Link to="/list">list</Link>
    //         </li>
    //         <li>
    //             <Link to="/stopwatch">stopwatch</Link>
    //         </li>
    //         <li>
    //             <Link to="/filterapp">filter app</Link>
    //         </li>
    //     </ul>
    // </nav>
    );
}

export default Navigation;
