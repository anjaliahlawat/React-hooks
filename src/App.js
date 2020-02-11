import React, {useReducer} from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounter2 from './components/HookCounter2';
import HookCounter3 from './components/HookCounter3';
import HookCounter4 from './components/HookCounter4';
import HookCounter5 from './components/HookCounter5';
import ClassMouse from './components/ClassMouse';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';
// import ComponentC from './components/ComponentC';
import ComponentF from './components/ComponentF';
import ComponentE from './components/ComponentE';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import CounterThree from './components/CounterThree';
import ComponentA from './components/ReducerWithUserContext/ComponentA';
import ComponentB from './components/ReducerWithUserContext/ComponentB';
import ComponentC from './components/ReducerWithUserContext/ComponentC';
import ParentComponent from './components/UseCallback/ParentComponent';
import Counter from './components/UseMemo/Counter';
import ClassTimer from './components/useRef/ClassTimer';
import HookTimer from './components/useRef/HookTimer';
import DocTitleTwo from './components/Custom hooks/DocTitleTwo';

//use context hook
export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

export const CountContext = React.createContext()

// for using reducer with userContext
const initialState = 0
const reducer = (state, action) => {
    switch(action) {
        case 'increment' : 
            return state +1
        case 'decrement':
            return state -1 
        case 'reset':
            return initialState
        default:
            return state
    }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    // <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
      <div className="App">
          {/* <ClassCounter /> */}
          {/* <HookCounter5 /> */}
          {/* <HookCounter /> */}
          {/* <HookCounter2 /> */}
          {/* <HookCounter3 /> */}
          {/* <HookCounter4 /> */}
          {/* <ClassMouse /> */}
          {/* <HookMouse /> */}
          {/* <MouseConatiner /> */}
          {/* <IntervalClassCounter />
          <IntervalHookCounter /> */}
          {/* <DataFetching /> */}
          {/* <UserContext.Provider value={'Anjali'}>
              <ChannelContext.Provider value={'React'}>
                  <ComponentE />
              </ChannelContext.Provider>
          </UserContext.Provider> */}
          {/* <CounterOne /> */}
          {/* <CounterTwo /> */}
          {/* <CounterThree /> */}
          {/* Count - {count}
          <ComponentA />
          <ComponentB />
          <ComponentC /> */}
          {/* <ParentComponent /> */}   
          {/* <Counter />  */}
          {/* <ClassTimer />0 */}
        {/* <HookTimer /> */}
        <DocTitleTwo />
          </div>
          
    
    // {/* </CountContext.Provider> */}
    
    
  );
}

export default App;
