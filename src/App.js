import React from 'react';

import './App.css';

class App extends React.Component {
    document.getElementById("p").innerHTML=document.getElementById("name").value
    render() {
        return ("<input placeholder='YOUR NAME' id='name'><p id='p'>");
    }
}

export default App;
