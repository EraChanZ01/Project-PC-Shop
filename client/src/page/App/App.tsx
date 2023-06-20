import React, { useEffect } from "react";
import ReactDOM from 'react-dom/client';
import Home from '../Home/Home'
import { connect } from "react-redux";
import './App.scss'
import { checkAuth } from '../../store/slice/authSlice'

function App({ checkAuth }: any) {
  console.log(checkAuth)
  useEffect(() => {
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
