import React from 'react'
import defaultDataset from './dataset'
import './assets/styles/style.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      answers: [],
      chats: [],
      currentId: "init",
      dataset: defaultDataset,
      open: false
    }
  }
  render() {
    return (
      <div>
        <section className="c-section">
          <div className="c-box">
            {/* <Chats />
            <Answers /> */}
          </div>
        </section>
      </div>
    );
  }
}

export default App;
