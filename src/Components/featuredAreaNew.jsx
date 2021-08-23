import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Capsule from '../assets/images/home-feat-dyson.jpg'
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        // overflow: 'hidden',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            padding: '0px 20px',
        },
    },
    imgContainer: {
        width: '50%',
        [theme.breakpoints.down('md')]: {
            '& img': {
                width: '452px'
            },
        },
        [theme.breakpoints.down('sm')]: {
            '& img': {
                width: '325px'
            },
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            '& img': {
                width: '570px',
                maxWidth: '100%',
            },
        },
    },
    yellowCircle: {
        position: 'absolute',
        width: '770px',
        height: '770px',
        backgroundColor: 'rgb(255, 214, 0)',
        borderRadius: '50%',
        zIndex: '-1',
        left: '-170px',
        top: 'calc(50% - 385px)',
        transition: 'left 2s ease 0s, right 2s ease 0s, opacity 2s ease 0s',
        [theme.breakpoints.down('md')]: {
            left: '-307px',
            top: 'calc(50% - 307px)',
            width: '614px',
            height: '614px',
        },
        [theme.breakpoints.down('xs')]: {
            left: '-140px',
            top: 'calc(50% - 500px)',
            width: '280px',
            height: '280px',
        },
    },
    featureImg: {
        textAlign: 'center',
    },
    contentContainer: {
        textAlign: 'left',
        width: '50%',
        maxWidth: '600px',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            maxWidth: '100%',
        },
    },
    title: {
        color: 'rgb(20, 43, 111)',
        fontSize: '2.5rem',
        lineHeight: '3.375rem',
        fontWeight: '500',
        textAlign: 'left',
        letterSpacing: '-1.4px',
        marginBottom: '24px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.5rem',
            lineHeight: '2.125rem',
            marginBottom: '16px',

        },
        [theme.breakpoints.down('xs')]: {
            marginTop: '32px',
        },
    },
    innerContentContainer: {
        padding: '0px 50px',
        '& p': {
            fontFamily: 'Dutch801 N',
            fontSize: '1.125rem',
            lineHeight: '1.75rem',
        },
        [theme.breakpoints.down('xs')]: {
            padding: '0px',
        },
    },
    articleLink: {
        fontSize: '1.125rem',
        lineHeight: '1.75rem',
        fontWeight: '500',
        borderBottom: '2px solid #142b6f',
        textDecoration: 'none',
        cursor: 'pointer',
        transition: 'opacity .2s ease-in-out',
        width: 'fit-content',
        marginTop: '32px'
    },

}))
export default function FeaturedAreaNew() {

    const classes = useStyles();
    return (
        <section className={classes.root}>
            <div className={classes.imgContainer}>
                <div className={classes.yellowCircle}></div>
                <div className={classes.featureImg}>
                    <img src={Capsule} alt="" srcset="" />
                </div>
            </div>
            <div className={classes.contentContainer}>
                <div className={classes.innerContentContainer}>
                    <h2 className={classes.title}>We're not about pseudoscience and half-truths</h2>
                    <p>From Omega-3 DHA from microalgae to regeneratively-farmed pea protein, our scientists studied diets and genetics to make daily essentials based on what we need. </p>

                    <div className={classes.articleLink}>
                        <a href="#">Who We Are</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
