import './App.css';
import Library from './pages/step01-jsx/Library';
import Clock from './pages/step02-element/Clock';
import CommentList from './pages/step03-component/CommentList';
import List02 from './pages/step03-component/List02';
import NumberCount from './pages/step04-state/NumberCount';
import FilterCommandList from './pages/step05-map_filter_find_some_every/FilterCommandList';
import FindCommandList from './pages/step05-map_filter_find_some_every/FindCommandList';
import SomeEveryCommandList from './pages/step05-map_filter_find_some_every/SomeEveryCommandList';
import ReduceCommandList from './pages/step05-map_filter_find_some_every/ReduceCommandList';


function App() {
  return (
    <div className="App">
      <Library />
      <hr />
      <Clock />
      <hr />
      {/*  같은 컴포넌트 여러개는 => 리스트 컴포넌트를 만들어라 
      <Comment />
      <Comment />
      <Comment /> 
      */}
      <CommentList />
      <hr />
      <List02 />
      <hr />
      <NumberCount />
      <hr />
      <FilterCommandList /> 
      <hr />
      <FindCommandList />
      <hr />
      <ReduceCommandList />
      <hr />
      <SomeEveryCommandList />
      <hr />
    </div>
  );
}

export default App;
