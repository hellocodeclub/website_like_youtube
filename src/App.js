import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactHlsPlayer from 'react-hls-player';

function App() {
  return (
    <div className="App">
        <Navigation />
        <div class="container" style={{marginTop:"100px"}}>
            <div class="row p-2">
      	        <div class="row p-2">
      			    <div class="col-lg-3 col-xs-1 mx-auto pt-2">
      				    <div class="card" style={{width: "41rem"}}>

      				    	<ReactHlsPlayer height="410px"
      				    	    src="http://hellocodeclub-streaming.s3.eu-west-2.amazonaws.com/streaming/video1/hellocodeclub-streaming.m3u8"
      				    	    autoPlay={false}
                                controls={true}
                                width="100%"
                                height="auto"
      				    	/>
      				    	<div class="card-body">
      				    		<h5 class="card-title"><a href="http://www.google.com">First Video in my streaming site</a></h5>
      				    		<p class="text-m"><small> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id sapien a purus egestas fringilla. Praesent condimentum bibendum enim, eget elementum lectus blandit eget. </small></p>
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
