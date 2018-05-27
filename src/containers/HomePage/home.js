import React from 'react';
import { Dashboard, Header, Sidebar } from 'react-adminlte-dash';

const nav = () => ([
  <Header.Item href="/some/link" key="1" />
]);

const sb = () => ([
  <Sidebar.Menu header="NAVIGATION" key="1">
    <Sidebar.Menu.Item title="Home" href="/" />
  </Sidebar.Menu>
]);

class HomePage extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <Dashboard
          navbarChildren={nav()}
          sidebarChildren={sb()}
          theme="skin-blue"
        >
          test
        </Dashboard>
      </div>
    );
  }
}

export default HomePage;
