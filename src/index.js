import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './Components/App';
import aptData from './Data/Apt.json';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAFEd2BiRbPXBu_UPtTlvRudvrB1kzpVOs",
  authDomain: "info340-finalproject-6eaf1.firebaseapp.com",
  databaseURL: "https://info340-finalproject-6eaf1-default-rtdb.firebaseio.com",
  projectId: "info340-finalproject-6eaf1",
  storageBucket: "info340-finalproject-6eaf1.appspot.com",
  messagingSenderId: "318532125719",
  appId: "1:318532125719:web:99fdba9f76806a1a6a4852"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App apts={aptData}/>
  </React.StrictMode>
);
