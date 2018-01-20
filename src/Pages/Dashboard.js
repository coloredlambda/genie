import React from 'react';
import { SearchField, Button } from 'react-desktop';
import './Dashboard.css';

//Logo Image
import logo from '../logo.png';

class Dashboard extends React.Component{
    render(){
        return(
            <div className="App">
                <header className="App-header">
                    <img src={logo} height='30px' width='30px'/>
                    <h1 className="App-title">Genie Lyrics</h1>
                </header>

                <div className='Search'>
                    <h1>Search Lyrics Manually</h1>
                    <SearchField
                        size='15px'
                        placeholder='The Chainsmokers - Closer'
                    />
                </div>

                <h1>Or</h1>

                <Button
                    color='blue'
                    size='20px'
                >
                    Detect Song
                </Button>
            </div>
        )
    }
}

export default Dashboard;

