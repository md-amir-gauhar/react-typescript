import ReactDom from 'react-dom';
import Parent from './props/Parent';

const App = () => {
  return (
    <div>
      <h1>Hello there</h1>
      <Parent />
    </div>
  );
};

ReactDom.render(<App />, document.querySelector('#root'));
