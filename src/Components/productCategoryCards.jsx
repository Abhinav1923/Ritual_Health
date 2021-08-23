import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Pimg1 from '../assets/images/Category-Multivitamin.jpg'
import Pimg2 from '../assets/images/Category-Protein__1_.jpg'
import Pimg3 from '../assets/images/Category-Pregnancy__1_.jpg'
import Pimg4 from '../assets/images/Category-Bundles.jpg'
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '4rem! important',
        display: 'flex',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: 'auto',
        overflow: 'hidden',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
        [theme.breakpoints.down('md')]: {
            maxWidth: '934px',
            overflowX: 'scroll',
            fontSize: '0px',
            margin: '0px - 1000px',
            scrollPadding: '0px 1000px',
            scrollSnapType: 'x mandatory',
            cursor: 'grabbing',
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: '2rem! important',
            padding: '0px 20px',
            flexFlow: 'row nowrap',
        },
    },
    cardsContainer: {
        width: '25%',
        padding: '0px 15px',
        [theme.breakpoints.down('xs')]: {
            width: '26.25vw',
            padding: '0vw 1.25vw',
        },
    },
    cards: {
        width: '100%',
        '&:hover $cardImg': {
            backgroundSize: '115%',
        }
    },
    cardImg: {
        backgroundSize: 'cover',
        backgroundRepeat: 'none',
        backgroundPosition: 'center',
        width: '100%',
        height: '140px',
        transition: '300ms linear 0s all',
    },
    cardImg1: {
        backgroundImage: `url(${Pimg1})`,
    },
    cardImg2: {
        backgroundImage: `url(${Pimg2})`,
    },
    cardImg3: {
        backgroundImage: `url(${Pimg3})`,
    },
    cardImg4: {
        backgroundImage: `url(${Pimg4})`,
    },
    cardTitle: {
        textAlign: 'center',
        fontSize: '1.125rem',
        lineHeight: '1.5rem',
        padding: '12px 0px',
        backgroundColor: '#f8f7f9',
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.875rem',
            lineHeight: '1.25rem',
            fontWeight: '300',
            padding: '6px 0px',
        },
    },
    cardMainContainer: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            width: 'fit-content',
        },
    }
}))
export default function ProductCategoryCards() {
    const classes = useStyles();
    return (
        <section className={classes.root}>
            <div className={classes.cardMainContainer}>
                <div className={classes.cardsContainer}>
                    <div className={classes.cards}>
                        <div className={clsx(classes.cardImg, classes.cardImg1)}></div>
                        <div className={classes.cardTitle}> Shop Multivitamin</div>
                    </div>
                </div>

                <div className={classes.cardsContainer}>
                    <div className={classes.cards}>
                        <div className={clsx(classes.cardImg, classes.cardImg2)}></div>
                        <div className={classes.cardTitle}> Shop Protien</div>
                    </div>
                </div>

                <div className={classes.cardsContainer}>
                    <div className={classes.cards}>
                        <div className={clsx(classes.cardImg, classes.cardImg3)}></div>
                        <div className={classes.cardTitle}> Shop Pregnancy</div>
                    </div>
                </div>

                <div className={classes.cardsContainer}>
                    <div className={classes.cards}>
                        <div className={clsx(classes.cardImg, classes.cardImg4)}></div>
                        <div className={classes.cardTitle}> Shop Bundle</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
