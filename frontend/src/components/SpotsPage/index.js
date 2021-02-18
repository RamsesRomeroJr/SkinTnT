import './index.css'
import {useEffect, useState} from "react"
import {NavLink} from "react-router-dom"
import Spot from './spot.js'
import {useDispatch, useSelector} from "react-redux"
import {fetchAllSpots} from "../../store/spots"
import styled from "styled-components";

const SpotsContainer = styled.div`
    box-sizing:border-box;
    display: grid;
    /* grid-template-columns: repeat(auto-fill,240px); */
    /* justify-content: center; */
    grid-auto-rows: auto;
    /* grid-gap: 200px; */
    margin: 0 auto;
    width: 50%;
    padding-top: 15px;
    padding-bottom: 50px;
`

const ContainerTitle = styled.h2`
    font-family: 'Staatliches', cursive;
    font-size:40px;
    text-shadow: 0px 1px 3px rgba(0,0,0,0.6);

    &:hover{
        text-shadow: 0 5px 15px 0px rgba(0,128,0,0.9);
    }

`


const SpotsPage = () =>{

    const dispatch = useDispatch();
    const currentSpots = useSelector(state => {
        return state.spots;
    })

    useEffect(async() => {
        dispatch(fetchAllSpots()
        )
    }, []);

    return (
        <div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <ContainerTitle>Tattoo Shops</ContainerTitle>
            </div>
            <SpotsContainer>
                {!currentSpots && <h3>Loading...</h3>}
                {currentSpots && currentSpots.map(spot => {
                    return <Spot theSpot={spot} key={spot.id} />
                })}
            </SpotsContainer>
        </div>
    )
};

export default SpotsPage;
