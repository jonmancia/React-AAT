import React from 'react';
import Header from '../components/Page_Header/Header';
import Content from '../components/Page_Content/Content';

class App extends React.Component {
  componentDidMount() {
    $(".button-collapse").sideNav();
  }

  render() {
    return(
      <div className="center containter-fluid">
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
