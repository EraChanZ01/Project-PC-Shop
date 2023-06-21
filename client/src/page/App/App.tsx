import React, { useLayoutEffect } from "react";
import ReactDOM from 'react-dom/client';
import Home from '../Home/Home'
import { connect } from "react-redux";
import './App.scss'
import { checkAuth } from '../../store/slice/authSlice'

function App({ checkAuth }: any) {
  useLayoutEffect(() => {
    checkAuth()
  }, [])
  return (
    <div className="App">
      <Home />
    </div>
  );
}
const mapDispatchToProps = (dispatch: any) => (
  {
    checkAuth: () => dispatch(checkAuth())
  }
)

export default connect(null, mapDispatchToProps)(App);
