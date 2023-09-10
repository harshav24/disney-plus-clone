import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports';



export const Movies = () => {

interface IMovieProps {
    id: number;
    backgroudImg: string;
    cardImg: string;
    description: string;
    subTitle:string;
    title:string;
    type:string;
};


	const movies:IMovieProps[] = useSelector((state:any) => state.movie.movies);
	console.log(movies,"hiii");

    
	

  return (
    <Container>
        <h4>Recommended for You</h4>
        <Content>
            {movies.map((d:any) => (
                <Wrap>
                    <Link to={`/details/${d.id}`}>
                        <img 
                        src={d?.cardImg} alt="" />
                    </Link>
                </Wrap>
            ))}
        </Content>
    </Container>
  )
};


const Container = styled.div`
    @media only screen and (max-width: 850px) {
        margin-top: 30px;
    }
    h4 {
        font-size: 20px;
    }
    h4 {
        @media only screen and (max-width: 550px) {
            font-size: 14px
        }
        @media only screen and (max-width: 400px) {
            font-size: 12px
        }
    }
`

 
const Content = styled.div`
    display: grid;
    grid-gap: 25px;
	margin-bottom: 50px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
	
    @media only screen and (max-width: 550px) {
		grid-template-columns: repeat(3, minmax(0, 1fr));
    }	
    @media only screen and (max-width: 399px) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
    }	

	`
	
const Wrap = styled.div`
	position: relative;
	border-radius: 3px;
	overflow: hidden;
	margin-bottom: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
	
    img {
		width: 100%;
        height:100%;
		cursor: pointer;
        height: 100%;
        object-fit: cover;
    }

	&:hover {
		transform: scale(1.05);
		 box-shadow: rgb(0 0 0 .80) 0px 40px 58px -16px,
		 rgb(0 0 0 .72) 0px 30 33 -10,
		 border-color: rgba(249,249,249,0.8)
	}
`



// json file for 30+ movies and images in disnye plus hotstar?