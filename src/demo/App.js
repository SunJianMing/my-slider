/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import { MySlider } from '../lib';
import Img from '../img/WechatIMG170.png';
import Img1 from '../img/channel03.png';

class App extends Component {

    constructor() {
        super();
        this.state = {
            value: '',
            picUrl: Img1,
            step: 61.17,
            width:10,
            range:'',
            height:80,
            setTimeShow:true
        };
        this.setProps = this.setProps.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
    }
    changeStep(){
        this.setState({
            step:11.03,
            height:200,
            picUrl:Img
        })
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <MySlider
                    setProps={this.setProps}
                    {...this.state}
                />
                {/* <input type="button" value='button'  onClick={this.changeStep.bind(this)}/> */}
            </div>
        )
    }
}

export default App;
