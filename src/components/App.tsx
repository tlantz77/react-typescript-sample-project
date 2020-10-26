import React, { Component } from 'react';

export interface AppProps {
  
}
 
class App extends Component<AppProps> {
  state = {counter : 0 };
  render() { 
    return (
      <div>
        Yo!
      </div>
    );
  }
}
 
export default App;