import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi';
import Img1 from '../asset/modalityImg1.svg'
import Img2 from '../asset/modalityImg2.svg'
import Img3 from '../asset/modalityImg3.svg'


const Modalities = () => {
    return (
        <>
            <div className='bg-[#fff] sm:py-28 py-14 xl:px-24 lg:px-16 sm:px-8 px-4'>
                <div className='flex xl:gap-20 gap-12 items-center lg:flex-nowrap flex-wrap'>
                    <div className='lg:w-[40%] w-full flex flex-col lg:gap-4 gap-3'>
                        <div className='bg-[#FEE1BD] py-0.5 font-normal border-[1px] rounded-2xl border-[#EFCA9C] px-3.5 w-fit'>
                            <h1 className='font-inter lg:text-sm text-xs'>Crafted Collaborations</h1>
                        </div>
                        <h1 className='xl:text-[2.7rem] lg:text-4xl sm:text-3xl text-2xl text-[#091438] font-manrope font-medium line-h'>Service Modalities Tailored for Every Tech Tale</h1>
                        <p className='text-[#475467] text-sm leading-6'>Every story, like every vision, is unique. At Nextalytic, we appreciate this distinction, offering varied engagement models to resonate with your narrative. Whether you seek a band of tech bards, a fixed quest cost, or a chronicle charted by the hour, we have a mode for every mission.</p>
                        <div className='xl:mt-1 mt-3 flex lg:justify-normal justify-end'>
                            <h1 className='font-inter font-medium items-center flex gap-2 '>Choose Your Engagement Epic <FiArrowUpRight className='text-lg' /></h1>
                        </div>
                    </div>
                    <div className='lg:w-[60%] w-full flex flex-col gap-12'>
                        <div className='border-[1px] border-[#C2CDD5] py-3 px-4 shadow-techShadow rounded-xl'>
                            <img src={Img1} alt="" />
                            <div className='mt-4 flex flex-col gap-3'>
                                <h1 className='xl:text-3xl lg:text-2xl sm:text-3xl text-xl font-marcelous'>Tech Ensemble: The Dedicated Maestros</h1>
                                <p className='text-[#475467] font-raleway sm:text-base text-sm'>Enlist a symphony of skilled sorcerers, steadfast in their dedication to your digital dream. From inception to epilogue, they harmonize with your hymn, rendering relentless resonance.</p>
                                <h1 className='font-inter font-medium flex gap-1 items-center'>Learn More <FiArrowUpRight className='text-lg' /></h1>
                            </div>
                        </div>
                        <div className='grid sm:grid-cols-2 grid-cols-1 sm:gap-y-0 gap-y-10 xl:gap-x-16 gap-x-8 sm:px-6 px-2'>
                            <div className='flex flex-col gap-3'>
                                <div>
                                    <img src={Img2} alt="" />
                                </div>
                                <h1 className='text-[#091438] text-2xl font-marcelous'>Fixed Price Projects</h1>
                                <p className='text-[#475467] font-raleway text-sm leading-loose'>For tales with defined destinies and clear constellations, opt for our fixed-price paradigm. A clear pact, a promised panorama, with a cap on your coffers.</p>
                                <h1 className='font-inter font-medium flex gap-1 items-center'>Learn More <FiArrowUpRight className='text-lg' /></h1>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <div>
                                    <img src={Img3} alt="" />
                                </div>
                                <h1 className='text-[#091438] text-2xl font-marcelous'>Hourly Projects</h1>
                                <p className='text-[#475467] font-raleway text-sm leading-loose'>For evolving epics that grow with the telling, our hourly model offers flexibility. As sands shift in the hourglass, craft your chronicle, candle by candle.</p>
                                <h1 className='font-inter font-medium flex gap-1 items-center'>Learn More <FiArrowUpRight className='text-lg' /></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modalities
