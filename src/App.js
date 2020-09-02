import React from 'react';
import './App.css';

function App() {
  const add = 1 + 2;
  var customStyle ={
    color:'blue'
  }
  //02
  const products = [
    {
      name:'PhotoShop',
      price:'$99.68'
    },
    {
      name:'Illustrator',
      price:'$60.52'
    },
    {
      name:'PDF Reader',
      price:'$6.85'
    },
    {
      name:'Adobe Premiere',
      price:'$75.48'
    }
  ]
  //03
  const friendsDetails = [
    {
      name:'Jamal',
      age:16,
      aim:'Singer'
    },
    {
      name:'kamal',
      age:17,
      aim:'Engineer'
    },
    {
      name:'Rahim',
      age:15,
      aim:'Doctor'
    },
    {
      name:'Kalam',
      age:18,
      aim:'Businessman'
    },
    {
      name:'Rafiq',
      age:20,
      aim:'Poet'
    },
  ]
  return (
    <div className="App">
      <header className="App-header">
        <p style={customStyle}>May name is Hira</p>
        <p>Add  is {add}</p>

      {
        friendsDetails.map(friend => <Friends friendData={friend}></Friends>)
      }

        <Product products = {products[0]}></Product>
        <Product products = {products[1]}></Product>
        <Product products = {products[2]}></Product>
        <Product products = {products[3]}></Product>
        <Person name='Hasnat Rokon' subject='Math'></Person>
        <Person name='Shamim Sharkar' subject='English'></Person>
        <Person name='Shihabul Alom' subject='Bangla'></Person>
        <Person name='Malti Tarek' subject='Biology'></Person>
        <Person name='Asaduzzan Asad' subject='English'></Person>
      </header>
    </div>
  );
}
//03
const Friends = props =>{
  const friendsStyle = {
    width:'300px',
    height:'250px',
    color:"#003366",
    backgroundColor:"#99b3ff",
    borderRadius:"10px",
    margin:'15px'
  }
  const {name, age, aim} = props.friendData;
  return (
    <div style={friendsStyle}>
        <h3>Name: {name}</h3>
        <h4>Age: {age}</h4>
        <h4>Aim: {aim}</h4>
    </div>
  )
}
//02
function Product(props) {
  const productStyle = {
    width:'250px',
    height:'250px',
    color:'black',
    backgroundColor:'	 #e6e6fa',
    borderRadius:'10px',
    margin:'15px',
    padding:'10px'

  }
  const buyNowBtn = {
    color:"#FFFFFF",
    backgroundColor:'black',
    padding:"10px 15px",
    borderRadius:'5px',
    border:"1px solid black",
    cursor:'pointer'
  }
// console.log(props)
  const {name, price} = props.products;
  return (
    <div style={productStyle}>
        <h2>{name}</h2>
        <h3>{price}</h3>
        <button style={buyNowBtn} >Buy Now >></button>
    </div>
  )
}
//01
function Person(props){
const personStyle = {
  width:'60%',
  border:'2px solid tomato',
  margin:'10px',
  padding:'30px'
}
  return (
    <div style={personStyle}>
        <h2 >Teacher Name: <span style={{color:'#dc143c'}} >{props.name} </span></h2>
        <h4>Subject: <span style={{color:'#3399ff'}} >{props.subject}</span></h4>
    </div>
  )
}


export default App;
