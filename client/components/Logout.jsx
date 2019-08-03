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
    })
      .then(result => {
        window.location.reload(true)
      })
      .catch(err => reject(err))
  }

  render () {
    return (
      <div>
        <Button
          color={"inherit"}
          onClick={this.logout}>
          Logout </Button>
      </div>
    )
  }
}

export default Logout;
