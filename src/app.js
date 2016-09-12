import React, {Component} from 'react'
import MainMenu from './components/mainmenu/'
import Stage from './components/stage'

class App extends Component {
  constructor() {
    super()
    this.state = ({ route: window.location.hash.substr(1) })
  }
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1)
      })
    })
  }

  render() {
    let 
    
    switch (this.state.route) {
      case '/': Child = About; break;
      case '/inbox': Child = Inbox; break;
      default: Child = MainMenu;
    }

    return (
      <div className='container'>
        <Child />
      </div>
    )
  }
}

export default App