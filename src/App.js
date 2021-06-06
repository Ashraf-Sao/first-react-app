import React from 'react';
import HornedBeasts from './components/HornedBeasts'

class App extends React.Component {

  render() {
    return (
      <div>
        <header>
         
        <h1> all the Horned Beasts are here </h1>
          
        </header>
        <main>
          <HornedBeasts/>
          <HornedBeasts/>
        </main>
        <footer>
          all rights reserved
        </footer>
      </div>
    );
  }
}
export default App;