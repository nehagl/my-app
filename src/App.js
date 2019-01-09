import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props)
    {
      super(props);
      this.state = { title:'MY TODO LIST',
    
      datalist:[]
    }
 }
 

funSubmit = (e) => {  
    e.preventDefault();  
    console.log('try');  
    let datalist = this.state.datalist;  
    let name = this.refs.name.value;  
   
     let data = {   name  }  
     datalist.push(data);  
    
     
    this.setState({  
        datalist: datalist,  
        
    });  
     this.refs.myform.reset();  
     this.refs.name.focus();  
}  

funRemove = (i) => {  
   let datalist = this.state.datalist;  
   datalist.splice(i, 1);  
   this.setState({  
     datalist: datalist  
    });  
   this.refs.myform.reset();  
   this.refs.name.focus();  
} 

  render() {
    let datalist = this.state.datalist;
    return (
      


      <div className="App">  
      <header className="App-header">   
          <h1 className="App-title">{this.state.title}</h1>  
      </header>  
      <form ref="myform" className="myForm"> 
         <input type="text" ref="name" placeholder="Add Title" className="formfield" /> 
         <button onClick={this.funSubmit} className="appButton"> Add</button>
      </form>  
       <ul>  
         {datalist.map((data , i) =>  
          <li key={i} className="myList"> 
             <input type="checkbox" class="checkclass"/> 
              <label class="textclass">  {data.name}</label> 
          <button onClick={() =>this.funRemove(i)} className="ListButton">X</button>  
         </li> )}  
         </ul> 
         
     </div>

    );
  }
}

export default App;
