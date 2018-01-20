import React from 'react';
import { Button, Search } from 'semantic-ui-react';
import './Dashboard.css';

//Image Import
import logo from '../Images/logo.png';
import searchImage from '../Images/search.svg';


// Electron import
const electron = window.require('electron');
const { ipcRenderer } = electron;

class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state = { buttonLoading : false };
    }

    // Function to request song details from OS
    requestSongDetails(){
        this.setState({buttonLoading : true}, () => {
            ipcRenderer.send('song:requestDetails');
        });

        ipcRenderer.on('song:details', (event, details) => {
            console.log(details);
        })
    }


    render(){
        return(
            <div className="App">
                <header className="App-header">
                    <img src={logo} height='30px' width='30px'/>
                    <h1 className="App-title">Genie</h1>
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
                    color='violet'
                    circular
                    size='large'
                    onClick={() => {this.requestSongDetails()}}
                    loading={this.state.buttonLoading}
                    disabled={this.state.buttonLoading}
                >
                    Detect Song
                </Button>
            </div>
        )
    }
}

export default Dashboard;

