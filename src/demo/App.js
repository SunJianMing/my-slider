/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import { MySlider } from '../lib';
import Img from '../img/channel03.png';

class App extends Component {

    constructor() {
        super();
        this.state = {
            value: '',
            picUrl: Img,
            step: 61.17,
            width:10,
            range:'',
            height:150,
            setTimeShow:true
        };
        this.setProps = this.setProps.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    render() {
        return (
            <div>
                <MySlider
                    setProps={this.setProps}
                    {...this.state}
                />
            </div>
        )
    }
}

export default App;
