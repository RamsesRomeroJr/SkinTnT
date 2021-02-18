import {useEffect, useState} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import styled from 'styled-components';
import './index.css'

const TattooImg = styled.img`
    width: 200px;
    margin-top:20px;
    /* height: 200px; */
`

const SpotContainer = styled.div`
    background-color: white;
    border:solid 0.5px lightgrey;
    box-shadow: 0 1px 5px 0px rgba(0,0,0,0.6);
    height: 200px;
    margin-top:20px;
    cursor: pointer;

    &:hover{
        color:#EE6262;
        border:solid 0.5px lightgrey;
        box-shadow: 0 3px 9px 0px rgba(238,98,98);
    }
`

const Spot = ({theSpot}) => {
    const history = useHistory()

    return (
        <SpotContainer onClick={()=> history.push(`/spot/${theSpot.id}`)}>
            <NavLink to={`/spot/${theSpot.id}`} key={theSpot.id} className='spot-title'>{theSpot.name}</NavLink>
            <div/>
            <TattooImg src={theSpot.url}/>
        </SpotContainer>
    )
}

export default Spot;
