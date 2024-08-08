import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import latestcar1 from '../../../assets/images/newsAndReviews/latestcar1.jpg';
import latestcar2 from '../../../assets/images/newsAndReviews/latestcar2.jpg';
import latestcar3 from '../../../assets/images/newsAndReviews/latestcar3.jpg';
import latestcar4 from '../../../assets/images/newsAndReviews/latestcar4.jpg';
import latestcar5 from '../../../assets/images/newsAndReviews/latestcar5.jpg';

const LatestCars = ()=>{
    return(
        <div className='gsc-col-xs-12'>
          <section className='shadow16'>
             <h2>Latest Cars</h2>
             <div className='tabtitle'>
                <div className='contenthold'>
                   <div className='gsc-ta-content'>
                      <div  className='gsc col xs 12'>
                          <div className='mblcoursal'>
                             <ul className='clerifixrow'>
                               <li className='col-6'>
                                <div className='posr'></div>
                                <div className='col-4'>
                                  <img className='hover' src={latestcar1} title=''/>
                                </div>
                                <div className='col-8'>
                                  <a href="" title='' className=''>BYD Att0 3</a>
                                  <div className='price' style={{fontWeight:'500'}}>
                                    <span className='icon'>&#8377;</span>24.99-33.99 Lakh*
                                  </div>
                                </div>
                               </li>
                               <li className='col-6'>
                                <div className='posr'></div>
                                <div className='col-4'>
                                  <img className='hover' title='' src={latestcar2}/>
                                </div>
                                <div className='col-8'>
                                  <a href="" title='' className=''>Hyundai Exter</a>
                                  <div className='price' style={{fontWeight:'500'}}>
                                    <span className='icon'>&#8377;</span>6.13 - 10.43 Lakh*
                                  </div>
                                </div>
                               </li>
                               <li className='col-6'>
                                <div className='posr'></div>
                                <div className='col-4'>
                                  <img className='hover' title='' src={latestcar3}/>
                                </div>
                                <div className='col-8'>
                                  <a href="" title='' className='anchor'>Mesedez-Benz EQA</a>
                                  <div className='price' style={{fontWeight:'500'}}>
                                    <span className='icon'>&#8377;</span>66 Lakh*
                                  </div>
                                </div>
                               </li>
                               <li className='col-6'>
                                <div className='posr'></div>
                                <div className='col-4'>
                                  <img className='hover' title='' src={latestcar4}/>
                                </div>
                                <div className='col-8'>
                                  <a href="" title='' className=''>Mesedez-Benz EQB</a>
                                  <div className='price' style={{fontWeight:'500'}}>
                                    <span className='icon'>&#8377;</span>6.13 - 10.43 Lakh*
                                  </div>
                                </div>
                               </li>
                               <li className='col-6'>
                                <div className='posr'></div>
                                <div className='col-4'>
                                  <img className='hover' title='' src={latestcar5}/>
                                </div>
                                <div className='col-8'>
                                  <a href="" title='' className=''>Land Rover Defender</a>
                                  <div className='price' style={{fontWeight:'500'}}>
                                    <span className='icon'>&#8377;</span>97 Lakh - 2.85 Cr*
                                  </div>
                                </div>
                               </li>
                             </ul>
                          </div>
                          <div className='viewall'>
                            <a href="" title='latest car' className='link'>View All Latest Cars <FontAwesomeIcon icon={faCircleChevronRight}  /></a>
                          </div>
                      </div>
                   </div>
                </div>
             </div>
          </section>
          </div>
    )
};
export default LatestCars;