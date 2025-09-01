import React from "react";
import ReactDom from 'react-dom/client';

import { Navbar } from "./components";
import {Header, Features, Plans, Companies, Testimonials, Subscribe,Footer} from './containers';
import "./App.css";

const App = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Features />
            <Plans />
            <Companies />
            <Testimonials />
            <Subscribe />
            <Footer />
        </>
    );
};

export default App;