import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import manthinking from '../../../assets/images/newsAndReviews/manthinking.png';
import circle from '../../../assets/images/newsAndReviews/circle.svg';
import Seats from '../../../assets/images/newsAndReviews/Seats.svg';
import Brand from '../../../assets/images/newsAndReviews/Brand.svg';
import Budget from '../../../assets/images/newsAndReviews/Budget.svg';
import Mileage from '../../../assets/images/newsAndReviews/Mileage.svg';
import Feature from '../../../assets/images/newsAndReviews/Feature.svg';
import question from '../../../assets/images/newsAndReviews/question.svg';
import star from '../../../assets/images/newsAndReviews/star.svg';
import smalldot from '../../../assets/images/newsAndReviews/smalldot.svg';
import Recommenderlogo from '../../../assets/images/newsAndReviews/Recommenderlogo.svg';

const CarRecomender = () => {
  return (
    <div className='carRecomender'>
      <div className='imggrp'>
        <img src={manthinking} alt="" className='manthinking'/>
        <img src={circle} alt="" className='ringimg'/>
        <img src={Seats} alt="" className='sets'/>
        <img src={Brand} alt="" className='brand'/>
        <img src={Budget} alt="" className='budget'/>
        <img src={Mileage} alt="" className='milege'/>
        <img src={Feature} alt="" className='feature'/>
        <img src={question} alt="" className='question'/>
        <img src={star} alt="" className='star'/>
        <img src={star} alt="" className='star2'/>
        <img src={star} alt="" className='star3'/>
        <img src={smalldot} alt="" className='dot'/>
      </div>
      <div className='text'>
        <img src={Recommenderlogo} alt="" className='recommender'/>
        <div className='heading'>Not Sure, Which car to buy</div>
        <p>Let us help you find the dream car</p>
      </div>
      <div className='btnholder'>
        <a href="" className='btn' title='Show Me Best Car' style={{color:"#f75d34" , fontSize: "14px",fontWeight: "500"}}>Show Me Best Car <FontAwesomeIcon icon={faAngleDown} /></a>
      </div>
    </div>
  );
};
export default CarRecomender;
