import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const add = 1 + 2;
  var customStyle ={
    color:'tomato'
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
        <h2 style={customStyle}>My name is Hira</h2>
        <p>Add  is {add}</p>
        <Counter></Counter>
        <Users></Users>
        <h3>Uses map and pass dynamic data for show different card data</h3>
      {
        friendsDetails.map(friend => <Friends friendData={friend}></Friends>)
      }
        <h3>Uses tag and pass object for show one by one card data</h3>
        <Product products = {products[0]}></Product>
        <Product products = {products[1]}></Product>
        <Product products = {products[2]}></Product>
        <Product products = {products[3]}></Product>

        <h3>Uses tag and pass custom data for show one by one card</h3>
        <Person name='Hasnat Rokon' subject='Math'></Person>
        <Person name='Shamim Sharkar' subject='English'></Person>
        <Person name='Shihabul Alom' subject='Bangla'></Person>
        <Person name='Malti Tarek' subject='Biology'></Person>
        <Person name='Asaduzzan Asad' subject='English'></Person>
      </header>
    </div>
  );
}

//05
function Users(){
  const [users, setUser] = useState([])
useEffect(() =>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUser(data))
},[]);

const userStyle = {
  width:"400px",
  height:"250px",
  color:"black",
  backgroundColor:'tomato',
  border:'1px solid black',
  borderRadius:'10px',
  margin:'20px',
  padding:"0px 30px 40px 30px"
}
console.log(users)
  return (
    <div>
        <h2>Dynamic API Data Load</h2>
        <h3>Total User: {users.length}</h3>
        {
          users.map(user => <div style={userStyle}>
                <h4>User No: {user.id}</h4>
                <h4>Name: {user.name}</h4>
                <h4>Email: {user.email}</h4>
                <h4>Email: {user.phone}</h4>
              </div>
            )
        }
    </div>
  )
}


//04
function Counter(){
const [count, setCount] = useState(0);
// const handleIncrease = () => setCount (count+ 1);
return (
  <div>
      <h1>Count: {count}</h1>
      <button onClick={() => {if(count > 0){setCount (count - 1)}}}>Decrease</button>
      <button onClick={() => setCount (count+ 1)}>Increase</button>
  </div>
)
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
