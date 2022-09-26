import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Navigation , EffectFade , Autoplay } from 'swiper';
import { Grid } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Homepage() {

  return (
    <div className='bg-slate-100 h-[1000px]'>
        <Swiper
        modules={[Navigation,EffectFade,Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className='bg-pink-300 h-[600px] flex'
        loop={true}
        autoplay={true}
        >
            <SwiperSlide className='w-[100%]'>
                <img className='w-[100%]' src='https://cdn.pixabay.com/photo/2013/09/12/19/57/boots-181744_960_720.jpg' alt='asd' />
            </SwiperSlide>
            <SwiperSlide className='w-[100%]'>
                <img className='w-[100%]' src='https://cdn.pixabay.com/photo/2017/06/20/22/14/man-2425121_960_720.jpg' alt='asd' />
            </SwiperSlide>
            <SwiperSlide className='w-[100%]'>
                <img className='w-[100%]' src='https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_960_720.jpg' alt='asd' />
            </SwiperSlide>
        </Swiper>

        <div className='h-10 bg-slate-200 flex justify-center pt-1 border-y-2 border-green-400'>
            <h2 className='text-lg text-center'>
                ALL THOSE PRODUCT IS FOR YOU!!
            </h2>
        </div>

        <Grid container>
            <Grid container rowspacing={2} item xs={3}>
            <Accordion>
                <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
                expandIcon={<KeyboardArrowDownIcon />}
                >
                <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <h2>
                        Kadın
                    </h2>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Typography>Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <h2>
                        Kadın
                    </h2>
                </AccordionDetails>
            </Accordion>
            </Grid>
            <Grid container spacing={2} item xs={9}>
                <Grid item xs={2}>
                    <img className='rounded-lg' src='https://m.media-amazon.com/images/I/71D9ImsvEtL._UY500_.jpg' alt='jsdhakj' / >
                    <h3 className='mt-2 text-lg mb-0'>Nike Pro - Original</h3>
                    <span className='relative bottom-1 text-sm text-stone-700'>4.5 Stars</span>
                </Grid> 
                <Grid item xs={2}>
                    <img className='rounded-lg' src='https://images.meesho.com/images/products/52483851/vje6h_512.jpg' alt='jsdhakj' / >
                    <h3 className='mt-2 text-lg mb-0'>Nike Pro - Original</h3>
                    <span className='relative bottom-1 text-sm text-stone-700'>4.5 Stars</span>
                </Grid> 
                <Grid item xs={2}>
                    <img className='rounded-lg' src='https://m.media-amazon.com/images/I/71D9ImsvEtL._UY500_.jpg' alt='jsdhakj' / >
                    <h3 className='mt-2 text-lg mb-0'>Nike Pro - Original</h3>
                    <span className='relative bottom-1 text-sm text-stone-700'>4.5 Stars</span>
                </Grid> 
                <Grid item xs={2}>
                    <img className='rounded-lg' src='https://m.media-amazon.com/images/I/71D9ImsvEtL._UY500_.jpg' alt='jsdhakj' / >
                    <h3 className='mt-2 text-lg mb-0'>Nike Pro - Original</h3>
                    <span className='relative bottom-1 text-sm text-stone-700'>4.5 Stars</span>
                </Grid> 
                <Grid item xs={2}>
                    <img className='rounded-lg' src='https://m.media-amazon.com/images/I/71D9ImsvEtL._UY500_.jpg' alt='jsdhakj' / >
                    <h3 className='mt-2 text-lg mb-0'>Nike Pro - Original</h3>
                    <span className='relative bottom-1 text-sm text-stone-700'>4.5 Stars</span>
                </Grid> 
                <Grid item xs={2}>
                    <img className='rounded-lg' src='https://m.media-amazon.com/images/I/71D9ImsvEtL._UY500_.jpg' alt='jsdhakj' / >
                    <h3 className='mt-2 text-lg mb-0'>Nike Pro - Original</h3>
                    <span className='relative bottom-1 text-sm text-stone-700'>4.5 Stars</span>
                </Grid> 
            </Grid>
        </Grid>

        
    </div>
  )
}

export default Homepage