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
import Checkbox from '@mui/material/Checkbox';

function Homepage() {

  return (
    <div className='bg-slate-300'>
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

        <div className='h-10 bg-slate-200 flex justify-center pt-1 border-y-2 border-green-400 mb-3'>
            <h2 className='text-lg text-center'>
                ALL THOSE PRODUCT IS FOR YOU!!
            </h2>
        </div>

        <Grid container spacing={2}>
            <Grid container item xs={2} direction="column">
                <Typography align='center' sx={{paddingBottom: 1,backgroundColor:'lightgreen',paddingTop:1, marginBottom:1}}>
                    Categorys
                </Typography>
                <Accordion>
                    <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    expandIcon={<KeyboardArrowDownIcon />}
                    >
                    <Typography>Sex</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Erkek <Checkbox />
                        </Typography>
                        <Typography>
                            Kadın <Checkbox />
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    expandIcon={<KeyboardArrowDownIcon />}
                    >
                    <Typography>People Choose</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Most Purchased <Checkbox />
                        </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                        <Typography>
                            Never Received <Checkbox />
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    expandIcon={<KeyboardArrowDownIcon />}
                    >
                    <Typography>Brand</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Nike <Checkbox />
                        </Typography>
                        <Typography>
                            Adidas <Checkbox />
                        </Typography>
                        <Typography>
                            Gucci <Checkbox />
                        </Typography>
                        <Typography>
                            Chanel <Checkbox />
                        </Typography>
                        <Typography>
                            Prada <Checkbox />
                        </Typography>
                        <Typography>
                            Dior <Checkbox />
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    expandIcon={<KeyboardArrowDownIcon />}
                    >
                    <Typography>Body</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            XXS <Checkbox />
                        </Typography>
                        <Typography>
                            XS <Checkbox />
                        </Typography>
                        <Typography>
                            S <Checkbox />
                        </Typography>
                        <Typography justifyContent='center'>
                            M <Checkbox />
                        </Typography>
                        <Typography>
                            L <Checkbox />
                        </Typography>
                        <Typography>
                            XL <Checkbox />
                        </Typography>
                        <Typography>
                            2XL <Checkbox />
                        </Typography>
                        <Typography>
                            3XL <Checkbox />
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    expandIcon={<KeyboardArrowDownIcon />}
                    >
                    <Typography>Stars</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            5<Checkbox />
                        </Typography>
                        <Typography>
                            4+<Checkbox />
                        </Typography>
                        <Typography>
                            3+<Checkbox />
                        </Typography>
                        <Typography>
                            2+<Checkbox />
                        </Typography>
                        <Typography>
                            1+<Checkbox />
                        </Typography>
                        
                    </AccordionDetails>
                </Accordion>
            </Grid>
            <Grid container spacing={1} item xs={10} >
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