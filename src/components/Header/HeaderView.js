import React from 'react'

export default function HeaderView(props) {
    const {data} = props;
    return (
        <div>
            I am a {data}!
        </div>
    )
}