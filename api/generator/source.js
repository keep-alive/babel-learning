import { useEffect } from 'react';
export default function(props) {
    useEffect(() => {
        console.log(document.querySelector('h1'))
    })
    return <h1>{props.name}</h1>
}