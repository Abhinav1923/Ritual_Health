import React from 'react'
import { makeStyles } from '@material-ui/core'
import Map from '../assets/images/Home-Map.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        marginTop: '120px',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column-reverse',
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
            // padding: '0px 20px',
            '& img': {
                width: '570px',
                maxWidth: '100%',
            },
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
        padding: '0px 70px',
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
export default function FeatureAreaDeserve() {
    const classes = useStyles()
    return (
        <section className={classes.root}>
            <div className={classes.contentContainer}>
                <div className={classes.innerContentContainer}>
                    <h2 className={classes.title}>You deserve traceability</h2>
                    <p>We share our sources, studies, and suppliers — daily essentials backed by the first visible supply chain of its kind.</p>

                    <div className={classes.articleLink}>
                        <a href="#">Meet Our Ingredients</a>
                    </div>

                    <div className={classes.articleLink}>
                        <a href="#">Our Clinical Study</a>
                    </div>
                </div>
            </div>
            <div className={classes.imgContainer}>
                <div className={classes.featureImg}>
                    <img src={Map} alt="" srcset="" />
                </div>
            </div>
        </section>
    )
}
