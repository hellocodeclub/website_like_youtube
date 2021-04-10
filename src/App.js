import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <Navigation />
        <div class="container" style={{marginTop:"100px"}}>
            <div class="row p-2">
      	        <div class="row p-2">
      			    <div class="col-lg-3 col-xs-1 mx-auto pt-2">
      				    <div class="card" style={{width: "41rem"}}>
      				    	<img class="card-img-top" src="./player.png" alt="Card image cap" height="410px"/>
      				    	<div class="card-body">
      				    		<h5 class="card-title"><a href="http://www.google.com">Title here</a></h5>
      				    		<p class="text-m"><small> Description here</small></p>
      				    		<p class="text-muted font-italic"><small>Posted by <a href="#">Marta</a> Today</small></p>
      				    	</div>
      				    </div>
      			    </div>
      		    </div>
            </div>
        </div>
    </div>
  );
}

export default App;
