import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import upcomingcar1 from '../../../assets/images/newsAndReviews/upcomingcar1.jpg';
import upcomingcar2 from '../../../assets/images/newsAndReviews/upcomingcar2.jpg';
import upcomingcar3 from '../../../assets/images/newsAndReviews/upcomingcar3.jpg';
import upcomingcar4 from '../../../assets/images/newsAndReviews/upcomingcar4.jpg';
import upcomingcar5 from '../../../assets/images/newsAndReviews/upcomingcar5.jpg';

const UpcomingCars = () => {
    return(
    <div className='gsc-col-xs-12'>
    <section className='shadow15'>
    <h2 className="upcoming-cars">Upcoming cars</h2>
    <div className='tabtitle'>
       <div className='contenthold'>
          <div className='gsc-ta-content'>
             <div  className='gsc col xs 12'>
                 <div className='mblcoursal'>
                    <ul className='clerifixrow'>
                      <li className='col-5'>
                       <div className='posr'></div>
                       <div className='col-4'>
                         <img className='hover' src={upcomingcar1} title=''/>
                       </div>
                       <div className='col-8'>
                         <a href="" title='' className=''>Mesedezbenz</a>
                         <div className='price' style={{fontWeight:'500'}}>
                           <span className='icon'>&#8377;</span> 47  Lakh*
                           <span style={{fontSize:"10px",color: "rgba(36, 39, 44, .5)"}}>Estimated Price</span>
                           <p className="launch">Expected Launch: Jul 2024</p>
                         </div>
                       </div>
                      </li>
                      <li className='col-5'>
                       <div className='posr'></div>
                       <div className='col-4'>
                         <img className='hover' title='' src={upcomingcar2}/>
                       </div>
                       <div className='col-8'>
                         <a href="" title='' className=''>Mesedezbenz</a>
                         <div className='price' style={{fontWeight:'500'}}>
                           <span className='icon'>&#8377;</span>70  Lakh*
                           <span style={{fontSize:"10px",color: "rgba(36, 39, 44, .5)"}}>Estimated Price</span>
                           <p className="launch">Expected Launch: Jul 2024</p>
                         </div>
                       </div>
                      </li>
                      <li className='col-5'>
                       <div className='posr'></div>
                       <div className='col-4'>
                         <img className='hover' title='' src={upcomingcar3}/>
                       </div>
                       <div className='col-8'>
                         <a href="" title='' className='anchor'>Mesedezbenz</a>
                         <div className='price' style={{fontWeight:'500'}}>
                           <span className='icon'>&#8377;</span>50  Lakh*
                           <span style={{fontSize:"10px",color: "rgba(36, 39, 44, .5)"}}>Estimated Price</span>
                           <p className="launch">Expected Launch: Jul 2024</p>
                         </div>
                       </div>
                      </li>
                      <li className='col-5'>
                       <div className='posr'></div>
                       <div className='col-4'>
                         <img className='hover' title='' src={upcomingcar4}/>
                       </div>
                       <div className='col-8'>
                         <a href="" title='' className=''>Mesedezbenz</a>
                         <div className='price' style={{fontWeight:'500'}}>
                           <span className='icon'>&#8377;</span> 10 Lakh*
                           <span style={{fontSize:"10px",color: "rgba(36, 39, 44, .5)"}}>Estimated Price</span>
                           <p className="launch">Expected Launch: Jul 2024</p>
                         </div>
                       </div>
                      </li>
                      <li className='col-5'>
                       <div className='posr'></div>
                       <div className='col-4'>
                         <img className='hover' title='' src={upcomingcar5}/>
                       </div>
                       <div className='col-8'>
                         <a href="" title='' className=''>Mesedezbenz</a>
                         <div className='price' style={{fontWeight:'500'}}>
                           <span className='icon'>&#8377;</span>47 Lakh*
                           <span style={{fontSize:"10px",color: "rgba(36, 39, 44, .5)"}}>Estimated Price</span>
                           <p className="launch">Expected Launch: Jul 2024</p>
                           
                         </div>
                       </div>
                      </li>
                    </ul>
                 </div>
                 <div className='viewall-Upcoming-Cars'>
                   <a href="" title='latest car' className='link'>View All Upcoming Cars <FontAwesomeIcon icon={faCircleChevronRight}  /></a>
                 </div>
             </div>
          </div>
       </div>
    </div>
    
 </section>
 </div>
    )
  };

export default UpcomingCars;