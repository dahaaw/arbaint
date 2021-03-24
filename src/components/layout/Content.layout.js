import React from 'react'

export default function ContentLayout(props) {
    return (
        <div style={{'paddingTop':'60px'}}>
            {props.children}
        </div>
    )
}
