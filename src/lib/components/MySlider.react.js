import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../../style/index.css';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */

export default class MySlider extends Component {
    constructor(props) {
        super(props);
        this.img = React.createRef();
        this.mark = React.createRef();
        this.wrapImg = React.createRef();
        this.state = {
            stepInterval: 0,
            subscript: [],
            flag: true,
            startTime: 0,
            wrapImgLeft: 0,
            markLeft: 0,
            startDataSite:0,
            buttonType:''
        };
    }
    componentDidMount() {
        this.setSubscript();
    }

    // 计算开始时间和结束时间
    computeTime(obj) {
        let {setProps, typeSite} = this.props;
        let {stepInterval} = this.state
        let markTime = this.mark.current.offsetLeft / stepInterval;

        //滑块开始时间
        let startTime = +markTime
        //滑块结束时间
        let endTime = +(this.mark.current.offsetWidth / stepInterval + (markTime))
        // 图片起始时间
        let imgStartTime = Math.abs(this.wrapImg.current.offsetLeft) / stepInterval
        //图片结束时间
        let imgEndTime = this.wrapImg.current.parentNode.offsetWidth / stepInterval + imgStartTime
        if (typeSite) {
            if (!obj) {
                //初始化是图片和滑块所处位置
                setProps({
                    range: {
                        imgStartTime,
                        imgEndTime
                    }
                })
                setProps({
                    value: {
                        startTime,
                        endTime
                    }
                })
            }
           
            if (obj === this.wrapImg.current) {
                // 图片滑动后的位置
                console.log(obj,'ssss')
                setProps({
                    range: {
                        imgStartTime,
                        imgEndTime
                    }
                })
                //图片移动后，滑块所在的位置
                setProps({
                    value: {
                        startTime,
                        endTime
                    }
                });
            } else {
                //滑块移动后，所在位置
                setProps({
                    value: {
                        startTime,
                        endTime
                    }
                });
            }
            this.setState({
                startTime: (imgStartTime + startTime).toFixed(2)
            })
        } else {
            let wrapTime = Math.abs(this.wrapImg.current.offsetLeft)
            let markStart = this.mark.current.offsetLeft
            let startTime1 = (wrapTime + markStart) / stepInterval
            let endTime1 = (this.mark.current.offsetWidth + wrapTime + markStart) / stepInterval
           
            setProps({
                value: {
                    startTime: startTime1,
                    endTime: endTime1
                }
            })
            this.setState({
                startTime: (+ startTime1).toFixed(2),
                startDataSite:Math.floor(300000*startTime1)
            })
        }

    }
    //设置下标位置
    setSubscript() {
        let {step} = this.props;
        let {flag} = this.state
        let self = this;
        let subscript = []

        this
            .img
            .current
            .addEventListener('load', function () {
                for (let i = 0; i < step; i++) {
                    subscript.push(i);
                }
                self.setState({
                    stepInterval: this.offsetWidth / step,
                    subscript
                });
                self.wrapImg.current.dataset.width = this.offsetWidth;
                self.silderDrag(self.mark.current);
                self.silderDrag(self.wrapImg.current, true);
                if (flag) {
                    self.computeTime();
                    self.setState({flag: false})
                }
            });

    }
    //设置初始化时间
    setStatrTime(type) {

        let {stepInterval, startTime,startDataSite,buttonType} = this.state
        
        let {current: wrapImg} = this.wrapImg
        let {current: mark} = this.mark
        if(buttonType == 'startPoint'){
           
            startTime = startDataSite/300000
            // this.setState({startTime})
        }else if(buttonType == 'startTime'){
           
            startDataSite = 300000*startTime
            // this.setState({startDataSite})
        }
        let moveWidth = wrapImg.dataset.width - wrapImg.offsetWidth
        let markMoveWidth = wrapImg.offsetWidth - mark.offsetWidth
        let wrapPosi = startTime * stepInterval
       
        if (wrapPosi <= moveWidth) {
            // wrapImg.style.left = `-${wrapPosi}px`
            this.setState({
                wrapImgLeft: -wrapPosi + 'px',
                markLeft: '0px'
            }, () => {
                this.computeTime()
            })

        } else if (wrapPosi > moveWidth) {
            let RemainingTime = wrapPosi - moveWidth
            // wrapImg.style.left = `-${moveWidth}px`
            this.setState({
                wrapImgLeft: -moveWidth + 'px',
                markLeft: '0px'
            }, () => {
                this.computeTime()
            })

            if (RemainingTime < markMoveWidth) {
               
                this.setState({
                    markLeft: RemainingTime + 'px'
                }, () => {
                    this.computeTime()
                })

                // mark.style.left = `${RemainingTime}px`
            } else {
                this.setState({
                    markLeft: markMoveWidth + 'px'
                }, () => {
                    this.computeTime()
                })

            }
        }

    }
    //滑块
    silderDrag(obj, flag) {
        let disX,
            type,
            disW,
            disX1,
            disL,
            keyCode;
        let wrapWidth = this.wrapImg.current.offsetWidth;
        let {stepInterval} = this.state;
        let self = this

        function objMove(ev) {

            if (ev.offsetX < 10) {
                type = 'left';
                obj.style.cursor = 'w-resize';
            } else if (ev.offsetX > obj.offsetWidth - 10) {
                type = 'right';
                obj.style.cursor = 'e-resize';
            } else {
                type = '';
                obj.style.cursor = 'default';
            }
        }
        document.onkeydown = function(e){
            // console.log(e.keyCode,e)
            if(e.keyCode == 16){
                keyCode = true
            }
        }
        document.onkeyup = function(e){
                keyCode = false
                self.computeTime(obj)
        }
        if (!flag) {
            obj.onmousemove = objMove
        }
        obj.onmousedown = function (ev) {
           
            if (!flag) {
                obj.onmousemove = null
                if (ev.offsetX < 10) {
                    type = 'left';
                    obj.style.cursor = 'w-resize';
                }
                if (ev.offsetX > obj.offsetWidth - 10) {
                    type = 'right';
                    obj.style.cursor = 'e-resize';
                }
            }
            disX1 = ev.clientX;
            disW = obj.offsetWidth;
            disL = obj.offsetLeft;
            disX = ev.clientX - obj.offsetLeft;

            document.onmousemove = function move(ev) {
               
                if (type) {
                    let w = ev.clientX - disX1;
                    if (obj.offsetWidth > wrapWidth) {
                        obj.style.width = wrapWidth + 'px';
                        return;
                    }
                    if (obj.offsetWidth + obj.offsetLeft > wrapWidth) {
                        obj.style.width = wrapWidth - obj.offsetLeft + 'px';
                        return;
                    }
                    if (obj.offsetWidth < stepInterval) {
                        obj.style.width = stepInterval + 'px';
                    }
                    if (type == 'right') {
                        obj.style.width = w + disW + 'px';
                    }
                    if (type == 'left') {
                        if (disL + w <= 0) {
                            // obj.style.width
                            obj.style.left = 0;
                            return;
                        }
                        obj.style.width = disW - w + 'px';
                        obj.style.left = disL + w + 'px';
                    }
                    return;
                }
                let currentX = ev.clientX - disX;

                if (!flag) {
                    if (currentX < 0) {
                        currentX = 0;
                    }
                    if (currentX > wrapWidth - obj.offsetWidth) {
                        currentX = wrapWidth - obj.offsetWidth;
                    }
                } else {
                    if (currentX > 0) {
                        currentX = 0;
                    }
                    if (currentX < wrapWidth - obj.dataset.width) {
                        currentX = wrapWidth - obj.dataset.width;
                    }
                }
                obj.style.left = currentX + 'px';
            }
            document.onmouseup = function () {
                document.onmousemove = null
                document.onmouseup = null
                
                type = undefined;
                obj.style.cursor = 'default';
                self.setState({
                    markLeft: self.mark.current.offsetLeft + 'px',
                    wrapImgLeft: self.wrapImg.current.offsetLeft + 'px'
                })
                
                if (!flag) {

                    obj.onmousemove = objMove
                    if (obj.offsetWidth + obj.offsetLeft > wrapWidth) {
                        obj.style.width = wrapWidth - obj.offsetLeft + 'px';
                        return;
                    }

                }
                if(!keyCode){
                    self.computeTime(obj)
                }
                

            };
            ev.preventDefault();
            ev.stopPropagation();
        };
    }
    changeStartTime(e) {
        this.setState({startTime: e.currentTarget.value,buttonType:'startTime'})
    }
    changeStartDataSite(e){
        this.setState({startDataSite: e.currentTarget.value,buttonType:'startPoint'})

    }
    updateRender() {
        
        this.setStatrTime()
    }
    
    render() {
        let {
            id,
            picUrl,
            width,
            setTimeShow,
            height,
            step
        } = this.props;
        let {stepInterval, subscript, markLeft, wrapImgLeft, startTime,startDataSite} = this.state;
        if (typeof width === 'number') {
            width = width * stepInterval + 'px'
        }
        return (
            <div id={id}>
                <div
                    className="wrap"
                    style={{
                    width: width
                }}>
                    <div
                        className="wrapImg"
                        style={{
                        left: wrapImgLeft,
                        height: height + 20 + 'px'
                    }}
                        ref={this.wrapImg}>
                        <img
                            ref={this.img}
                            src={picUrl}
                            style={{
                            height: height + 'px'
                        }}
                            className="img"
                            alt=""/> 
                            {subscript.map((item,index) => (
                            <div
                                key={index}
                                style={{
                                position: 'absolute',
                                left: stepInterval * item + 'px',
                                fontSize: '12px',
                                bottom: 0
                            }}>
                                <i
                                    style={{
                                    display: 'block',
                                    height: '5px',
                                    width: '1px',
                                    backgroundColor: '#999'
                                }}></i>
                                <span
                                    style={{
                                    marginLeft: '-50%'
                                }}>
                                    {item}min
                                </span>
                            </div>
                        ))}
                    </div>

                    <i
                        ref={this.mark}
                        className="mark"
                        style={{
                        width: stepInterval + 'px',
                        height: height + 'px',
                        left: markLeft
                    }}></i>
                </div>
                {setTimeShow && <div className='buttom'>
                    <input
                        type="text"
                        value={startTime}
                        onChange={this
                        .changeStartTime
                        .bind(this)}/>
                    <button
                        style={{marginRight:'20px'}}
                        onClick={this.updateRender.bind(this)}>startTime</button>
                    <input type="text" 
                         value={startDataSite}
                         onChange={this.changeStartDataSite.bind(this)}
                         />
                    <button onClick={this.updateRender.bind(this)}>startPoint</button>
                </div>}
                   
            </div>
        );
    }
    componentDidUpdate(prevProps){
        if(prevProps.step != this.props.step){
            this.setSubscript()
            this.setState({
                wrapImgLeft:0,
                markLeft:0
            })
        }
        
    }
}

MySlider.defaultProps = {
    width: 10,
    height: 80,
    setTimeShow: true,
    typeSite: false
};

MySlider.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,
    /**
     * The picUrl displayed in the string.
     * 总预览图路径
     */
    picUrl: PropTypes.string,
    /**
     * 预览图总时间（61.17）
     */
    step: PropTypes.number,
    /**
     * The value displayed in the input.
     * 返回开始时间和结束时间 {value:{imgStartTime,imgEndTime}}
     */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object, PropTypes.array]),

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    /**
     * 返回范围数据的范围(图片可视区时间段)
     */
    range: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    setProps: PropTypes.func,
    /**
     * 可视区宽度默认10分钟
     */
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /**
     * 选择开始时间框是否显示
     */
    setTimeShow: PropTypes.bool,
    /**
     * 计算模式时间模式，true为底部图片为根据，false为mark块为依据
     */
    typeSite: PropTypes.bool,
    /**
     * 图片高度
     */
    height: PropTypes.number
};
