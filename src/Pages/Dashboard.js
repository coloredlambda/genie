import React from 'react';
import { SearchField, Button } from 'react-desktop';
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

