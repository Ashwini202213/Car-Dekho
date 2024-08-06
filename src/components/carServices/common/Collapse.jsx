import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import ReviewCard from '../reviewRating/ReviewCard';
import Arrow from './Arrow';

function MyCollapse() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Collapse in={open}>
                <div id="example-collapse-text">
                    <ReviewCard
                        name='Vipin'
                        detail='wrote a review on 07 Dec'
                        review='Best and unique services'
                    />

                    <ReviewCard name='Om Prakash Sharma'
                        detail=' wrote a review on 06 Dec'
                        review='Yup this was my challan'
                    />

                    <ReviewCard name='Rajesh'
                        detail=' wrote a review on 23 Nov'
                        review='Outstanding'
                    />
                </div>
            </Collapse>
            
            <Button className='btnBg'
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                View More Reviews <Arrow />
            </Button>
        </>
    );
}

export default MyCollapse;