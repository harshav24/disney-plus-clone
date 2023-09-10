import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { ImageSlider } from './ImageSlider';
import { Movies } from './Movies';
import { Viewers } from './Viewers';
import { SET_MOVIES } from '../store/movieSlice';
import { db } from '../firebase';



export const Home = () => {


  const dispatch = useDispatch()

  useEffect(() => {
      db.collection("movies").onSnapshot((snapshot) => {
        let movies = snapshot.docs.map((doc) => {
          return {id: doc.id, ...doc.data()}
      })
      console.log(movies, "movies"); 
      dispatch(SET_MOVIES(movies));   
      })
  }, [])

  return (
    <HomeContainer>
      <ImageSlider />
      <Viewers />
      <Movies />
    </HomeContainer>
  )
};


const HomeContainer = styled.main`
  overflow-x: hidden;  
  overflow-y: hidden;
  max-width: 100vw;
  min-height: calc(100vh - 70px );
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  color: white;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
    z-index: -1;
  }

`