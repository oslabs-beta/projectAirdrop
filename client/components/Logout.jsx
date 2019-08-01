import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';

class Logout extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    console.log('are we in logout in the client?')
    fetch('api/logout',
      {
      mode: 'no-cors'
    });
  }

  render () {
    return (
      <div>
        <Button onClick={this.logout}> Logout </Button>
      </div>
    )
  }
}

export default Logout;
