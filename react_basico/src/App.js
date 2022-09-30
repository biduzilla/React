import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'title 1',
        body: 'body 1',
      },
      {
        id: 2,
        title: 'title 2',
        body: 'body 2',
      },
      {
        id: 3,
        title: 'title 3',
        body: 'body 3',
      }
    ]
  };



  render() {
    const { posts } = this.state;

    return (
      <div className="App">
        {posts.map(post=>(        
          <> 
             <h1 key={post.id}>{post.title}</h1>
             <p>{post.body}</p>         
          </> 
        ))}
      </div>
    );
  };
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
