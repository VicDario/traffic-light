import { useState } from 'react';
import './TrafficLight.css'

function TrafficLight() {
    const [ light, setLight] = useState(0);

    if(light === 0){
        return (
            <>
            <div className="traffic">
                <div className="traffic-top"></div>
                <div className="traffic-light">
                    <div className="light rounded-circle red" onClick={() => setLight(1)}></div>
                    <div className="light rounded-circle yellow" onClick={() => setLight(2)}></div>
                    <div className="light rounded-circle green" onClick={() => setLight(3)}></div>
                </div>
            </div>
            </>
        );
    }
    if(light === 1){
        return (
            <>
            <div className="traffic">
                <div className="traffic-top"></div>
                <div className="traffic-light">
                    <div className="light rounded-circle red-active" onClick={() => setLight(0)}></div>
                    <div className="light rounded-circle yellow" onClick={() => setLight(2)}></div>
                    <div className="light rounded-circle green" onClick={() => setLight(3)}></div>
                </div>
            </div>
            </>
        );
    }
    if(light === 2){
        return (
            <>
            <div className="traffic">
                <div className="traffic-top"></div>
                <div className="traffic-light">
                    <div className="light rounded-circle red" onClick={() => setLight(1)}></div>
                    <div className="light rounded-circle yellow-active" onClick={() => setLight(0)}></div>
                    <div className="light rounded-circle green" onClick={() => setLight(3)}></div>
                </div>
            </div>
            </>
        );
    }
    if(light === 3){
        return (
            <>
            <div className="traffic">
                <div className="traffic-top"></div>
                <div className="traffic-light">
                    <div className="light rounded-circle red" onClick={() => setLight(1)}></div>
                    <div className="light rounded-circle yellow" onClick={() => setLight(2)}></div>
                    <div className="light rounded-circle green-active" onClick={() => setLight(0)}></div>
                </div>
            </div>
            </>
        );
    }
}
export default TrafficLight;