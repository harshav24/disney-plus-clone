import React, { useState } from 'react'
import styled from 'styled-components'

export const Viewers = () => {

    const viewersImage = [
        {src: "/images/viewers-disney.png", name: "disney", video: "/video/disney.mp4"},
        {src: "/images/viewers-pixar.png", name: "pixar", video: "/video/pixar.mp4"},
        {src: "/images/viewers-marvel.png", name: "marvel", video: "/video/marvel.mp4"},
        {src: "/images/viewers-starwars.png", name: "starwars", video: "/video/starwars.mp4"},
        {src: "/images/viewers-national.png", name: "national", video: "/video/national.mp4"},
    ];

    const [play, setPlay] = useState<any>()


  return (
    <Conatiner>
        {viewersImage.map((d) => (
            <Wrap 
            onMouseEnter={() => setPlay(d.name)}
            onMouseLeave={() => setPlay("")}
            >
                {play === d.name ?
                 <video autoPlay muted loop src={`/videos/${d?.name}.mp4`}  /> 
                 : 
                 <img src={d?.src} alt="" />
            }
            </Wrap>
            ))}
    </Conatiner>
  )
}


const Conatiner = styled.div`
    margin-top: 30px;
    padding: 30px 0px 26px;
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr)); 
    gap: 25px;

    @media only screen and (max-width: 500px) {
      display: none;
    }
`

const Wrap =styled.div`
    cursor: pointer;
    border: solid 3px rgba(249,249,249, 0.1);
    border-radius: 5px;
    box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
     
    img {
        width:100%;
        height: 100%;
        object-fit: cover;    
    }
    video {
        width:100%;
        height: 100%;
        object-fit: cover;    
    }
    &:hover {
      transform: scale(1.05);
      border-color: rgba(249,249,249, 0.8);  
      box-shadow: rgb(0 0 0 /80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    }
`