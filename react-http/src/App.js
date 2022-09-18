import logo from './logo.svg';
import './App.css';
// import One from './Error-Boundary/One';
// import Two from './Error-Boundary/Two';
// import Three from './Error-Boundary/Three';
// import  ErrorBoundary  from './Error-Boundary/ErrorBoundary';
import DataFetching from './Error-Boundary/DataFetching';
import {PostForm} from './Error-Boundary/PostForm';
function App() {
  return (
    <div className="App">
      
      <PostForm/>
      <DataFetching/>
      
        {/* <p>
          <h1>Components</h1>
        </p>
      <ErrorBoundary>
       <One/>
       </ErrorBoundary>
       <ErrorBoundary>
       <Two/>
       </ErrorBoundary>
       <ErrorBoundary>
       <Three/>
      </ErrorBoundary> */}
    </div>
  );
}

export default App;
