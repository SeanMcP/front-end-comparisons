import React from 'react'
import Emoji from 'a11y-react-emoji'

function App(props) {
  const [count, setCount] = React.useState(0)
  return (
      <main className="react-container">
        <h1><Emoji symbol="👋" />{' '}Hello {props.name || 'beautiful'}!</h1>
        <p>I am a <b>React app</b> created with <code>create-react-app</code></p>
        <button onClick={() => setCount(count + 1)}>
          <Emoji symbol="👍"/>{' '}
          <b>Like count: {count}</b>
        </button>
      </main>
  );
}

export default App;
