// import logo from './logo.svg';
//import './App.css';
import React from 'react';
import  {Component} from 'react';
import EnhancedComments from './Comp/CommentCount';
import EnhancedLikes from './Comp/LikesCount';
//  import Jsx from './Comp/Jsx';
// import Jsxcomp from './Comp/Jsxcomp';
// import Welcome from './Comp/Welcome';
// import Greet from './Comp/Greet';
// import State from './Comp/State';
// import Hello from './Comp/Hello';
// import Counter from './Comp/Counter';
// import Destructure from './Comp/Destructure';
// import StateTutorial from './Comp/StateTutorial';
// import Example from './Comp/Example';
// import CompE from './Comp/CompE';
/*import Button from './Comp/Button';
import Namelist from './Comp/Namelist';
import Key from './Comp/Key';
*/

//  export const UserContext=React.createContext() //creating the context
//  export const JobContext=React.createContext() //creating the context

//const App = () => {
 class App extends Component{
  render() {
    return (
      <div className='App'>
        {/* <UserContext.Provider value={'Nilesh Rathod'}>
        <JobContext.Provider value={'Technoserve Student'}> */}
          {/* <CompE/> */}
          {/* <Key/> */}
          {/* <Button/> */}
          {/* <Button.style/> */}
          {/* <Namelist/> */}

          {/* <Example/> */}
          {/* <ExampleUseeffect/> */}
        {/* </JobContext.Provider>
         </UserContext.Provider> */}
        {/* <Hello/> */}
        {/* <Counter/> */}
        {/* <Destructure name="Nilesh Rathod" value="BE" /> */}
        {/* <Welcome/> */}
        {/* <Jsxcomp/> */}
        {/* <Jsx/> */}
        {/* <Greet/>  */}
        {/* <StateTutorial/>
        <Example/> */}
        <EnhancedComments/>
        
        <EnhancedLikes/>
        
      {/* <Greet name='Nilesh' value=' is a Full Stack Developer and Automation Tester'>
        <p> This is the children props</p>
        </Greet>
       <Greet name='Suraj is an' value=' Automation Tester and a Full Stack Developer'/>
       <p>This is children props</p>
          <button > Action</button>
        <Greet name='Shridhar' value=' is a programmer'/>
        <State/> */}
      </div>
    )
  }
 }
//}
export default App;


