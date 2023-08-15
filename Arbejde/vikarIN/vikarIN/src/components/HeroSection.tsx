import React, { useContext } from 'react';
import cn from 'classnames';
import NURSE from '../assets/images/nurse.png'

import background from '../assets/images/background.png'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { Button } from '@mui/material';
import FadeIn from './FadeIn';
import Fade from './Fade';
import { styleContext } from '../contexts/StyleContext';
import styles from './HeroSection.module.scss'
import { Divider, Typography } from '@mui/material';

function HeroSection() {

  let workerAttributeList: string[] = [
    'Kvalificerede vikarer',
    'Bredt udvalg af vikarer',
    'Fleksible bemandingstider',
    'En fast takst (på pr. time basis)',
    'Både kortvarige og langvarige vikariater'


  ]

  const title = 'Vikarer I Særklasse'

  const calculateLineLength = (wordLenght: number) => {
    return wordLenght + wordLenght * 0.1
  }

  // const styles =useContext(styleContext);

  return (
    <div
      className={cn(styles.root, 'untitled-page',)} style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: '65% 100%', }}>

      <div className={styles.flex_row}>


        <div className={styles.wrapper}  >
          <FadeIn direction='left'>
            <div className={styles.flex_col} >
              <div style={{ width: `${calculateLineLength(title.length)}ch` }}>
                <h5 className={styles.highlights}>{title}</h5>
                <Divider light sx={{ color: ' rgb(210, 108, 193)', backgroundColor: 'rgb(210, 108, 193)', borderBottomWidth: '5px' }} ></Divider>
              </div>
              <h1 className={styles.title}>Bliv Vikar Inden for Sundhedsbranchen</h1>
              <h5 className={styles.highlights1} >
                Vi sammensætter kvalificeret sundheds-personale med arbejdspladser - både i det offentlig og private.
              </h5>

              <Button className={styles.buttonPrimary} variant='contained' sx={{ width: 'fit-content', backgroundColor: 'rgb(210, 108, 193)', ":hover": { backgroundColor: 'rgb(182, 97, 168)' } }}>Ansøg Nu</Button>

            </div>
          </FadeIn>


        </div>

        <div className={styles.flex_row__spacer} />
        <div className={styles.flex_row__cell} style={{ position: 'relative' }}>
          <Fade>
            <img className={styles.image1} src={NURSE} alt="alt text" />
            <div >
              <div style={{ position: 'absolute', top: '30%', left: '-3%', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '2px' }}>

                <Fade delay='400ms'>
                  <Typography textAlign={'center'} fontFamily={'Work Sans, Helvetica, Arial, serif'}> {workerAttributeList[0]}</Typography>
                  <CheckCircleIcon sx={{ color: '#8F5297', fontSize: '36px', marginRight: '20px' }} />
                </Fade>
              </div>

              <div style={{ position: 'absolute', top: '40%', right: '-5%', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '2px' }}>

                <Fade delay='500ms'>
                  <Typography textAlign={'center'} fontFamily={'Work Sans, Helvetica, Arial, serif'}> {workerAttributeList[0]}</Typography>
                  <CheckCircleIcon sx={{ color: '#8F5297', fontSize: '36px', marginRight: '20px' }} />
                </Fade>
              </div>
              <div style={{ position: 'absolute', top: '55%', left: '-5%', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '2px' }}>

                <Fade delay='600ms'>
                  <Typography textAlign={'center'} fontFamily={'Work Sans, Helvetica, Arial, serif'}> {workerAttributeList[0]}</Typography>
                  <CheckCircleIcon sx={{ color: '#8F5297', fontSize: '36px', marginRight: '20px' }} />
                </Fade>
              </div>

              <div style={{ position: 'absolute', top: '70%', right: '-5%', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '2px' }}>

                <Fade delay='700ms'>
                  <Typography textAlign={'center'} fontFamily={'Work Sans, Helvetica, Arial, serif'}> {workerAttributeList[0]}</Typography>
                  <CheckCircleIcon sx={{ color: '#8F5297', fontSize: '36px', marginRight: '20px' }} />
                </Fade>
              </div>

              <Fade delay='800ms'>
                <div style={{ position: 'absolute', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '2px', }}>
                  <Typography textAlign={'center'} fontFamily={'Work Sans, Helvetica, Arial, serif'}> {workerAttributeList[0]}</Typography>
                  <CheckCircleIcon sx={{ color: '#8F5297', fontSize: '36px', marginRight: '20px', backgroundColor: 'white' }} />
                </div>
              </Fade>

              <Fade delay='900ms'>
                <div style={{ position: 'absolute', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '2px', }}>
                  <Typography textAlign={'center'} fontFamily={'Work Sans, Helvetica, Arial, serif'}> {workerAttributeList[0]}</Typography>
                  <CheckCircleIcon sx={{ color: '#8F5297', fontSize: '36px', marginRight: '20px' }} />
                </div>
              </Fade>


            </div>

          </Fade>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
