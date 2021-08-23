import React from 'react'
import { makeStyles } from '@material-ui/core';
import HeroBg from '../assets/images/Home-Hero-Desktop.jpg'
import HeroBgMobile from '../assets/images/Home-Hero-Mobile.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
        width: 'calc(100vw - 80px)',
        height: 'calc((100vw - 80px) * 0.388802)',
        maxWidth: '1920px',
        maxHeight: 'calc(746.501px)',
        margin: 'auto',
        marginTop: '64px',
        position: 'relative',
        [theme.breakpoints.down('md')]: {
            width: 'calc(100vw - 48px)',
            height: 'calc((100vw - 48px) * 0.388802)',
        },
        [theme.breakpoints.down('xs')]: {
            width: 'calc(100vw -16px)',
            height: 'calc(100vw - 16px)',
        },
    },
    fill: {
        height: '100%',
        width: '100%',
        backgroundRepeat: 'none',
        backgroundImage: `url(${HeroBg})`,
        backgroundSize: 'cover',
        [theme.breakpoints.down('xs')]: {
            backgroundImage: `url(${HeroBgMobile})`,
        },
    },
    heroContent: {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '100%',
    },
    heroTitle: {
        fontSize: '4.75rem',
        letterSpacing: '-2.3px',
        lineHeight: '4.625rem',
        marginBottom: '20px',
        width: '456px',
        pointerEvents: 'none',
        zIndex: '1',
        margin: '0px auto 16px',
        '& > div': {
            textAlign: 'right',
        },
        '& div:nth-of-type(2n)': {
            paddingRight: '18px',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '3.625rem',
            lineHeight: '3.75rem',
            marginBottom: '12px',
            width: '348px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '2.5rem',
            lineHeight: '2.8125rem',
            width: '69%',
            maxWidth: '247px'
        },
    },
    heroBtn: {
        boxSizing: 'border-box',
        padding: '0px 48px',
        borderRadius: '26px',
        height: '50px',
        cursor: 'pointer',
        backgroundColor: 'rgb(20, 43, 111)',
        border: ' 2px solid rgb(20, 43, 111)',
        margin: '0px',
        transition: 'color 0.2s ease 0s, background-color 0.2s ease 0s, border 0.2s ease 0s',
        display: 'inline-flex',
        WebkitBoxAlign: 'center',
        alignItems: 'center',
        WebkitBoxPack: 'center',
        justifyContent: 'center',
        color: 'white',
        zIndex: 1,
        fontWeight: 'bold'
    }
}))
export default function HeroPage() {
    const classes = useStyles();

    return (
        <section className={classes.root}>
            <div className={classes.fill}></div>
            <div className={classes.heroContent}>
                <h1 className={classes.heroTitle}>
                    <div>The future</div>
                    of health
                    <div><em style={{ fontFamily: 'Dutch801' }}>— is clear.</em></div>
                </h1>

                <button className={classes.heroBtn}>
                    Shop All
                </button>
            </div>
        </section>
    )
}
