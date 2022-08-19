import React from 'react';
import ReactDOM  from 'react-dom';
import './index.css';
//import App from './App';

function Card(){
  return (
  <div class='food'>
    <h1>Hi Foodie's</h1>
    <Veg/>
  </div>
  )
}
ReactDOM.render(<Card/>,document.getElementById('root'));

function Veg()
{
  return ( <>      
     <nav class="navbar,bar">
  <div class="container well">
  <nav class="navbar \">
    <span class="navbar-brand "><h3>Hi FOODIE'S</h3></span>
    
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <h4><a class="nav-link active" href="#">Home</a></h4>
        </li>
        <li class="nav-item">
        <h4><a class="nav-link" href="#">Features</a></h4>
        </li>
        <li class="nav-item">
        <h4><a class="nav-link" href="#">Contact</a></h4>
        </li>
        <li class="nav-item">
        <h4><a class="nav-link disabled">About</a></h4>
        </li>
      </ul>
    </div>
  </div>
</nav>



<nav class="navbar bg-light">
  <div class="container">
    
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
    </nav>
  </div>
  
</nav>




    <div class = "container">
      <div class = "jumpatron">
        <div class = "row">
          <div class = "col-md-4">
                <div class = "card">
                  <div class = "card_body"> 
                    <img class = "img-responsive" src='veg.jpg' alt="veg" height = "300px" width = "350px" />
                  </div>
                  <div class = "card_title"> 
                      <h2>The INDIAN Pure-Veg Food's </h2>
                  </div>
                  <div class = "card_description"> 
                    <p>This Food's are so Good to Eat And also Helthy for our Body. Don't miss it to Tast of the food </p>      
                  </div>
                  <button type ="button" class = "btn btn-outline-danger "><a href="https://www.vegrecipesofindia.com/recipes/indian-vegetable-recipes/">View Recipe</a></button>
                </div>
           
          </div>

          <div class = "col-md-4">
                <div class = "card">
                  <div class = "card_body"> 
                    <img class = "img-responsive" src='non-veg.jpg' alt="non-veg" height = "300px" width = "350px" />
                  </div>
                  <div class = "card_title"> 
                      <h2>The INDIAN NoN-Veg Food's </h2>
                  </div>
                  <div class = "card_description"> 
                    <p>This Food's are so Good to Eat And also Helthy for our Body. Don't miss it to Tast of the food </p>      
                  </div>
                  <button type ="button" class = "btn btn-outline-danger "><a href ="https://www.indianhealthyrecipes.com/recipes/non-veg/">View Recipe</a></button>
                </div>
           
          </div>

          <div class = "col-md-4">
                <div class = "card">
                  <div class = "card_body"> 
                    <img class = "img-responsive" src='continental.jpg' alt="continental" height = "300px" width = "350px" />
                  </div>
                  <div class = "card_title"> 
                      <h2>The CONTINENTAL Food's </h2>
                  </div>
                  <div class = "card_description"> 
                    <p>This Food's are so Good to Eat And also Helthy for our Body. Don't miss it to Tast of the food </p>      
                  </div>
                  <button type ="button" class = "btn btn-outline-danger ">
                    <a href ="https://timesofindia.indiatimes.com/life-style/food-news/what-is-continental-food-7-continental-dishes-we-are-in-love-with/photostory/84287887.cms">
                    View Recipe </a> </button>
                </div>
           
          </div>

        </div>
      </div>
    </div> </>
 )
}

ReactDOM.render(<Veg/>,document.getElementById('root'));
