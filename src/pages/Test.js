import React from 'react';
import {useSelector} from 'react-redux';

export default function Test() {
    const glob = useSelector(state => state);   
    console.log(glob)
    return (
        <div>
            
        </div>
    )
}
