
import * as React from 'react';

import OUHImAGE from '../assets/images/ouh.jpeg'
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import gradientImage from '../assets/images/gradient.jpeg'
import './Home.css';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import FadeIn from '../components/FadeIn';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Fade from '../components/Fade';
import JobSection, { Job } from '../components/JobSection';
import HeroSection from '../components/HeroSection';

function Home() {


    const jobPositions: Job[] = [
        {
            title: 'Sygeplejersker',
            description: 'Sygeplejerske i sundhedsektoren',
            type: 'Færdiguddannet'
        },
        {
            title: 'Sygeplejersker',
            description: 'Sygeplejerske i sundhedsektoren',
            type: 'Færdiguddannet'
        },
        {
            title: 'Sygeplejersker',
            description: 'Sygeplejerske i sundhedsektoren',
            type: 'Færdiguddannet'
        },
        {
            title: 'Sygeplejersker',
            description: 'Sygeplejerske i sundhedsektoren',
            type: 'Færdiguddannet'
        },
        {
            title: 'Sygeplejersker',
            description: 'Sygeplejerske i sundhedsektoren',
            type: 'Færdiguddannet'
        },
        {
            title: 'Sygeplejersker',
            description: 'Sygeplejerske i sundhedsektoren',
            type: 'Færdiguddannet'
        }

    ]

    return (



        <div>


            <div style={{ marginBottom: '200px' }}>
                <HeroSection ></HeroSection>

            </div>






            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 200 }} className='home'>




                <div style={{ width: '90%' }}>



                    <Grid container marginBottom={'200px'} flexDirection={'row'} display={'flex'} alignContent={'center'} gap={2} justifyContent={'center'} padding={'20px'}>



                        <Grid item sm={4} display={'flex'} flexDirection={'column'} justifyContent={'left'} alignItems={'left'} >



                            <Typography color={'#8F5297'} fontSize={12}>Speciale områder</Typography>
                            <Typography fontSize={30}>Vores specialisering</Typography>
                            <Typography fontSize={20}>Vi er specialiserede i:</Typography>


                            <ul style={{ padding: 0, marginRight: 0, listStyle: 'none', display: 'flex', justifyContent: 'space-between', flexDirection: 'column', gap: '15px' }}>

                                <li>

                                    <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                                        <CheckCircleIcon sx={{ color: '#8F5297', fontSize: '36px', marginRight: '20px' }} /><Typography variant='body1'>Kvalificerede vikarer</Typography>


                                    </div>

                                </li>


                                <li>

                                    <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                                        <CheckCircleIcon sx={{ color: '#8F5297', fontSize: '36px', marginRight: '20px' }} /><Typography variant='body1'>Bredt udvalg af vikarer</Typography>

                                    </div>

                                </li>



                                <li>

                                    <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                                        <CheckCircleIcon sx={{ color: '#8F5297', fontSize: '36px', marginRight: '20px' }} /><Typography variant='body1'>Fleksible bemandingstider</Typography>

                                    </div>

                                </li>



                                <li>

                                    <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                                        <CheckCircleIcon sx={{ color: '#8F5297', fontSize: '36px', marginRight: '20px' }} /><Typography variant='body1'>En fast takst (på pr. time basis)</Typography>

                                    </div>

                                </li>



                                <li>

                                    <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                                        <CheckCircleIcon sx={{ color: '#8F5297', fontSize: '36px', marginRight: '20px' }} /><Typography variant='body1'>Både kortvarige og langvarige vikariater</Typography>

                                    </div>

                                </li>

                            </ul>

                            <FadeIn direction='right' delay='700ms'>

                                <Typography fontSize={'400'}>Vikar-In har åbent døgnet rundt, hele året. </Typography>
                                <Typography fontSize={'400'}>Kontakt os på Tlf:  25 72 72 49</Typography>
                            </FadeIn>
                        </Grid>

                        <Grid item sm={6} flexDirection={'row'} display={'flex'} justifyContent={'center'}>
                            <FadeIn direction='left' distance='2' >

                                <div>
                                    <img width={'700'} height={'auto'} src={OUHImAGE}></img>

                                </div>
                            </FadeIn>


                        </Grid>


                    </Grid>




                    <FadeIn direction='right'>
                        <Paper style={{ marginBottom: '10%' }}>
                            <Grid container flexDirection={'row'} display={'flex'} alignContent={'center'} gap={2} justifyContent={'center'} padding={'20px'}>


                                <Grid item sm={6} flexDirection={'row'} display={'flex'} justifyContent={'center'}>
                                    <div >
                                        <img width={'500px'} height={'fit-content'} src={OUHImAGE}></img>

                                    </div>

                                </Grid>

                                <Grid item sm={4} display={'flex'} flexDirection={'column'} justifyContent={'left'} alignItems={'left'} >



                                    <Typography color={'#8F5297'} fontSize={12}>Fordele</Typography>
                                    <Typography fontSize={30}>Din samarbejdspartner!</Typography>
                                    <Typography fontSize={20}>Når du vælger Vikar-In som din samarbejdspartner opnår du følgende fordele:</Typography>


                                    <ul style={{ padding: 0, marginRight: 0, listStyle: 'none', display: 'flex', justifyContent: 'space-between', flexDirection: 'column', gap: '15px' }}>

                                        <li>

                                            <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                                                <CheckCircleIcon sx={{ color: '#8F5297', fontSize: '36px', marginRight: '20px' }} /><Typography variant='body1'>Kvalificerede vikarer</Typography>


                                            </div>

                                        </li>


                                        <li>

                                            <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                                                <CheckCircleIcon sx={{ color: '#8F5297', fontSize: '36px', marginRight: '20px' }} /><Typography variant='body1'>Bredt udvalg af vikarer</Typography>

                                            </div>

                                        </li>



                                        <li>

                                            <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                                                <CheckCircleIcon sx={{ color: '#8F5297', fontSize: '36px', marginRight: '20px' }} /><Typography variant='body1'>Fleksible bemandingstider</Typography>

                                            </div>

                                        </li>


                                        <li>

                                            <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                                                <CheckCircleIcon sx={{ color: '#8F5297', fontSize: '36px', marginRight: '20px' }} /><Typography variant='body1'>En fast takst (på pr. time basis)</Typography>

                                            </div>

                                        </li>



                                        <li>

                                            <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                                                <CheckCircleIcon sx={{ color: '#8F5297', fontSize: '36px', marginRight: '20px' }} /><Typography variant='body1'>Både kortvarige og langvarige vikariater</Typography>

                                            </div>

                                        </li>

                                    </ul>

                                    <FadeIn direction='right' delay='700ms'>

                                        <Typography fontSize={'400'}>Vikar-In har åbent døgnet rundt, hele året. </Typography>
                                        <Typography fontSize={'400'}>Kontakt os på Tlf:  25 72 72 49</Typography>
                                    </FadeIn>

                                </Grid>


                            </Grid>
                        </Paper>


                    </FadeIn>




                    <JobSection jobs={jobPositions} />



                </div>


            </div>



        </div>
    )

}

export default Home;