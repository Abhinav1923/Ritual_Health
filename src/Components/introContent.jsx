import React from 'react'
import { makeStyles } from '@material-ui/core'
import IC1 from '../assets/images/IC1.svg'
import IC2 from '../assets/images/IC2.svg'
import IC3 from '../assets/images/IC3.svg'
import IC4 from '../assets/images/IC4.svg'
import IC5 from '../assets/images/IC5.svg'

const useStyles = makeStyles((theme) => ({
    root: {
        overflow: 'hidden',
        marginTop: '80px',
        marginBottom: '200px',
        width: '100%',
        [theme.breakpoints.down('lg')]: {
            marginTop: '40px',
            marginBottom: '80px',
            padding: '0px 15px',
        },
        [theme.breakpoints.down('md')]: {
            marginTop: '80px',
            marginBottom: '120px',
            padding: '0px 15px',
        },
    },
    introTitle: {
        position: 'relative',
        margin: '0px',
        fontSize: '1.375rem',
        lineHeight: '6rem',
        fontWeight: '500',
        letterSpacing: '-0.2px',
        textAlign: 'center! important',
        [theme.breakpoints.down('sm')]: {
            lineHeight: '2rem',
            textAlign: 'left! important',
            marginBottom: '40px'
        },
    },
    introContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: '750px',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        margin: 'auto',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            width: '100%',
        },
    },
    card: {
        width: '134px',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            width: '100%',
        },
    },
    cardImg: {
        minHeight: '40px',
        height: '60px',
        '& img': {
            [theme.breakpoints.down('sm')]: {
                position: 'relative',
                width: '32px',
                height: '32px',
                flex: '0 0 32px',
                margin: '0px 8px 0px 0px',
            },
        }
    }
}))
export default function IntroContent() {
    const classes = useStyles();
    return (
        <section className={classes.root}>
            <div className={classes.introTitle}>
                <h2 className={classes.introTitle}>Daily essentials with good intentions — for living life or creating it.</h2>
            </div>
            <div className={classes.introContainer}>
                <div className={classes.card}>
                    <div className={classes.cardImg}>
                        <img src={IC1} alt="" srcset="" />
                    </div>
                    <div className={classes.cardTitle}>Traceable Ingredients</div>
                </div>

                <div className={classes.card}>
                    <div className={classes.cardImg}>
                        <img src={IC2} alt="" srcset="" /></div>
                    <div className={classes.cardTitle}>Non-GMO</div>
                </div>

                <div className={classes.card}>
                    <div className={classes.cardImg}>
                        <img src={IC3} alt="" srcset="" /></div>
                    <div className={classes.cardTitle}>Third Party Tested</div>
                </div>

                <div className={classes.card}>
                    <div className={classes.cardImg}>
                        <img src={IC4} alt="" srcset="" />
                    </div>
                    <div className={classes.cardTitle}>Vegan</div>
                </div>

                <div className={classes.card}>
                    <div className={classes.cardImg}>
                        <img src={IC5} alt="" srcset="" />
                    </div>
                    <div className={classes.cardTitle}>No Artificial Flavors or Synthetic Fillers</div>
                </div>
            </div>
        </section>
    )
}
