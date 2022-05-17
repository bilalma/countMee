import React, { useEffect, useState } from 'react';
import './Countme.css'


const Countme = props => {

    const { name, number, time } = props.data;
    const [ count, setCount ] = useState('0');
    let reset = 0;
    useEffect(() => {
        let start = 0;
        let finish = parseInt(number.substring(0, 3));

        if (start === finish) return;
        let miliSecond = parseInt(time);
        let increaseTime = (miliSecond / finish) * 1000;

        let timer = setInterval(() => {
            start += 1;
            setCount(String(start) + number.substring(3))
            if (start === finish) clearInterval(timer);

        }, increaseTime)

    }, [ number, time ])
    return (
        <div>
            <div className='container'>
                <div className='wrapper'>
                    {/* <button>reset{reset}</button> */}
                    <h3>
                        <i>{name} : {count}</i>
                    </h3>
                </div>
            </div>
        </div>
    )

}

export default Countme;