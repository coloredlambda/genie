import React from 'react';
import { Button, Search } from 'semantic-ui-react';
import './Dashboard.css';

//Logo Image
import logo from '../Images/logo.png';
import searchImage from '../Images/search.svg';

class Dashboard extends React.Component{
    render(){
        return(
            <div className="App">
                <header className="App-header">
                    <img src={logo} height='30px' width='30px'/>
                    <h1 className="App-title">Genie</h1>
                    <h3>Lyrical nerd</h3>
                </header>

                <div className='Search'>
                    <img
                        src={searchImage}
                        width='200px'
                        height='100px'
                    />

                    <h1>Search Song Manually</h1>

                    <Search
                        size='15px'
                        placeholder='The Chainsmokers - Closer'
                    />
                </div>

                <h1>Or</h1>

                <Button
                    color='#372D46'
                >
                    Detect Song
                </Button>
            </div>
        )
    }
}

export default Dashboard;

