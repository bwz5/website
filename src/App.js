import React from 'react'
import Header from './Header.js'
import Home from './Home.js'
import Projects from './Projects.js'
import Blog from './Blog.js'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

export default function App(){
  return (
    <BrowserRouter>
      <Header /> 
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path = "/projects" element={<Projects />} />
        <Route path = "/blog" element={<Blog />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  ); 
}