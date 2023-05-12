import './App.css';
import ClickCounter from './components/ClickCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import CounterTwo from './components/CounterTwo';
import HoverCounter from './components/HoverCounter';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';


function App() {
  return (
    <div class Name="App">
      <CounterTwo 
        render={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount}/>
        )} 
      />
      <CounterTwo
        render={(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />
      {/* <ClickCounterTwo/>
      <HoverCounterTwo/>
      <User render={(isLoggedIn) => isLoggedIn ? 'Ram' : 'Krishna'}/> */}
    </div>
  );
}

export default App;
