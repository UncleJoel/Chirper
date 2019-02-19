import React, { Component } from 'react';
import ChirpTimeline from './ChirpTimeline.jsx';
import Jumbotron from './Jumbotron.jsx'


let chirpdata = [
    {
        username: 'J-Rock',
        chirp: 'I love watching birds.',
    },
    {
        username: 'StoneyB',
        chirp: 'There aint nothin like seeing an eagle!'
    },
    {
        username: 'Houdini',
        chirp: 'One day im going to be one of those winged angels.',
    },
]

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chirp: '',
            username: '',
            chirps: [],
        }
    }

    timeLine(e) {
        this.setState({
            chirps: []
        })
    }

    componentDidMount() {
        this.setState({ chirps: chirpdata })
    }

    handleSubmit(e) {
        e.preventDefault()

        // snapshots
        let chirps = this.state.chirps
        let chirp = {
            chirp: this.state.chirp,
            username: this.state.username
        }
        chirps.unshift(chirp)

        //Return input to empty!
        this.setState({
            chirp: '',
            username: '',
            chirps,
        })
    }

    render() {
        return (
            <>
                <div className='container-fluid'>
                <Jumbotron />
                    <form id='form' className='p-4 border border-danger col-6 mx-auto'>
                        <div className='form-group col mx-auto text-center text-danger'>
                            <label>Username:</label>
                            <input
                                className='form-control  text-center '
                                placeholder="Who are you?"
                                onChange={(e) => this.setState({ username: e.target.value })}
                                value={this.state.username} />
                        </div>
                        <div className='form-group col mx-auto text-center'>
                            <label className='text-danger'>Chirp It:</label>
                            <input
                                className="form-control text-center"
                                placeholder="What've you got to say?"
                                onChange={(e) => this.setState({ chirp: e.target.value })}
                                value={this.state.chirp} />
                        </div>
                        <div className='col-12 text-center'>
                            <button type="submit" className="btn btn-danger align-self-center" onClick={(e) => this.handleSubmit(e)}>Chirp</button>
                        </div>
                    </form>
                    <ChirpTimeline chirps={this.state.chirps} />
                </div>
            </>
        )
    }

}





export default App;