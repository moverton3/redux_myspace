import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Header, Icon } from 'semantic-ui-react';

class Home extends Component {
  state = { posts: [] }

  componentDidMount(){
    axios.get('/api/posts')
    .then( res => {
      this.setState({ posts: res.data })
    })
  }

  render() {
    const { posts } = this.state
    return (
      <div>
      <br />
        <Header as='h1' textAlign='center' icon>
         <Icon name='users' />
          V for Vendetta MySpace
          <Header.Subheader>
            For all of your stalking needs!
          </Header.Subheader>
        </Header>
      <ul>
        { posts.map( post => <Link to={`post/${post.id}`}><li>{post.title}</li></Link>)}
      </ul>
    </div>
    );
  }
}

export default Home;
