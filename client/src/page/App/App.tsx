import React, { useLayoutEffect } from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../Home/Home'
import { connect } from "react-redux";
import './App.scss'
import { checkAuth } from '../../store/slice/userSlice'

function App({ checkAuth }: any) {
  useLayoutEffect(() => {
    checkAuth()
  }, [])
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
const mapDispatchToProps = (dispatch: any) => (
  {
    checkAuth: () => dispatch(checkAuth())
  }
)

export default connect(null, mapDispatchToProps)(App);
