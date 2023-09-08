import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='flex items-center justify-center w-screen h-screen'>
      <form className='flex items-center justify-center flex-col gap-3'>
        <h1 className='text-2xl text'>LIBRUS 2</h1>
        <input className='bg-gray-200 text-gray-950 rounded-md p-2 text-sm w-64' type='text' placeholder='Login' required></input>
        <input className='bg-gray-200 text-gray-950 rounded-md p-2 text-sm w-64'type='password' placeholder='Password' required></input>
        <button className='bg-green-200 w-56 rounded-md p-2 text-sm' type='submit'>SUBMIT</button>
      </form>
    </div>
  )
}

export default App;
