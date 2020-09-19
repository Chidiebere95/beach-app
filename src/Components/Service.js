import React from 'react'

export default function Service({icon,title,info}) {
    return (
        <article className='service'>
            <span><i className={icon}></i></span>
            <h6>{title}</h6>
            <p>{info}</p>
        </article>
    )
}
