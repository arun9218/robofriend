import React,{ Component }from 'react';
import Cardlist from '../Components/Cardlist';
import Searchbox from '../Components/Searchbox';
import Scroll from '../Components/Scroll';
import './App.css'

class App extends Component{
  constructor(){
    super();
    this.state={
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
      return response.json();
    }).then(user=>{
      this.setState({ robots: user})
    });
  }

  onserachChange=(event)=>{
    this.setState({searchfield:event.target.value});
  }

  render(){
    const{robots,searchfield}=this.state;
    const fillterarray=robots.filter(robot=>
    {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !robots.length ? <h1> LOADDING </h1>:
    (
          <div className='tc'>
              <h1> ROBOTFRIENDS </h1>
              <Searchbox searchChange={this.onserachChange}/>
              <Scroll >
                 <Cardlist robots={ fillterarray } />
              </Scroll>
          </div>
      );
  }
} 

export default App;
