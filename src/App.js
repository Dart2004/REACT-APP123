import React from 'react';

import './App.css';

class App extends React.Component {
    render() {
        return ("<input placeholder='YOUR NAME' id='name'><p id='p'>");
        document.getElementById("p").innerHTML=document.getElementById("name").value
    }
}

export default App;
