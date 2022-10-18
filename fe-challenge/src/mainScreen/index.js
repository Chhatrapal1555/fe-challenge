import bgTop from '../assets/images/bg-top.svg';
import bgBottom from '../assets/images/bg-bottom.svg';
import './style.css';
import Card from '../component/card';
import ReactSwitch from 'react-switch';
import { useState } from 'react';

const data = {
    "monthly": {
        "basic": {
            name: "Basic",
            price: "19.99",
            currency: "$",
            storage: "500 GB storage",
            user: "2 USers Allowed",
            transfer: " Send up to 3 GB",

        },
        "professional": {
            name: "Professional",
            price: "24.99",
            currency: "$",
            storage: "1 TB Storage ",
            user: "5 Users Allowed",
            transfer: "Send up to 10 GB",
        },
        "master": {
            name: "Master",
            price: "39.99",
            currency: "$",
            storage: "2 TB Storage",
            user: "10 Users Allowed",
            transfer: "Send up to 20 GB",
        }
    },
    "anually": {
        "basic": {
            name: "Basic",
            price: "199.99",
            currency: "$",
            storage: "500 GB storage",
            user: "2 USers Allowed",
            transfer: " Send up to 3 GB",

        },
        "professional": {
            name: "Professional",
            price: "249.99",
            currency: "$",
            storage: "1 TB Storage ",
            user: "5 Users Allowed",
            transfer: "Send up to 10 GB",
        },
        "master": {
            name: "Master",
            price: "399.99",
            currency: "$",
            storage: "2 TB Storage",
            user: "10 Users Allowed",
            transfer: "Send up to 20 GB",
        }
    }
}

function MainScreen() {
  
    const [paymentFreq, togglePaymentFreq] = useState(false)
    const changeHandler = () => {
togglePaymentFreq(!paymentFreq)
    }

    // ))
    return (
        <div className='body'>
            <img src={bgTop} className='bg-top' alt='bgT' />
            <h2 style={{textAlign:'center'}}> Our Pricing </h2>
            <div className='description_type' >
                <p> Anually</p>
                <ReactSwitch
                    checked={paymentFreq}
                    onChange={changeHandler}
                    onColor="#a3a8f0"
                    offColor='#a3a8f0'                   
                    handleDiameter={15}
                    uncheckedIcon={true}
                    checkedIcon={true}
                    height={20}
                    width={48}
                    className="react-switch"
                    id="material-switch"
                   
                />
                <p> monthly</p>
            </div>
            <div className='container'>
                {Object.keys(paymentFreq ? data.monthly: data.anually).map(item => (
                    <Card details={paymentFreq ? data.monthly[item]:data.anually[item]} />
                ))}
            </div>
            <img src={bgBottom} className='bg-bottom' alt='bgB' />
        </div>

    );
}
export default MainScreen;