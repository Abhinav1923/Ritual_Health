import React, { useEffect, useRef } from 'react'
import { makeStyles } from '@material-ui/core'
import clsx from 'clsx';
import { ReactComponent as Logo } from '../assets/images/logo.svg'
import Bag from '../assets/images/headerIcon.svg'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        position: 'fixed',
        backgroundColor: 'rgb(255, 255, 255)',
        zIndex: '110',
        width: '100%',
        height: '64px',
        top: 0,
    },
    navContainer: {
        width: 'calc(100vw - 80px)',
        maxWidth: '1170px',
        margin: '0 auto',
        [theme.breakpoints.down('md')]: {
            width: 'calc(100vw - 48px)',
        }
    },
    navList: {
        display: 'flex',
        position: 'relative',
        flexDirection: 'row',
        WebkitBoxPack: 'justify',
        justifyContent: 'space-between',
        WebkitBoxAlign: 'center',
        alignItems: 'center',
        listStyle: 'none',
        margin: '0px',
        padding: '0px',
        width: '100%',
        height: '100%',
    },
    navItem: {
        WebkitBoxAlign: 'center',
        alignItems: 'center',
        alignContent: 'center',
        display: 'flex',
        height: '100%',
        position: 'relative',
        textAlign: '-webkit-match-parent',
    },
    menuButton: {
        display: 'flex',
        WebkitBoxAlign: 'center',
        alignItems: 'center',
        WebkitBoxPack: 'center',
        justifyContent: 'center',
        background: 'transparent',
        border: 'none',
        padding: '0px',
        position: 'relative',
        height: '100%',
        '&:after': {
            content: '""',
            position: 'absolute',
            width: '100%',
            backgroundColor: 'rgb(255, 214, 0)',
            height: '0px',
            left: '0px',
            position: 'absolute',
            bottom: '0px',
            transition: 'height 200ms ease-in-out 0s',
        },
        '&:hover:after': {
            height: '4px'
        },
    },
    itemStyle: {
        color: 'rgb(20, 43, 111)',
        fontSize: '1rem',
        fontWeight: '500',
        letterSpacing: '0px',
        lineHeight: '1.625rem',
        margin: '0px',
        fontFamily: 'LL Circular'
    },
    logo: {
        position: 'absolute',
        left: 'calc(50%-25px)',
    },
    logoLink: {
        position: 'absolute',
        left: 'calc(50%-25px)',
        width: '68px',
        '& svg': {
            width: '100%'
        }
    },
    // headerImg: {
    //     marginLeft: '35px'
    // },
    whoWeAre: {
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        }
    },
    headerTop: {
        borderTop: '4px solid rgb(20, 43, 111)',
    },
    headerBottom: {
        borderTop: 'none',
        borderBottom: '1px solid rgb(204, 204, 204)',
    },
}))



export default function Header() {
    const classes = useStyles();
    const header = useRef(null)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            // console.log(window.scrollY)
            // console.log(header.current)
            if (window.scrollY >= 20) {
                header.current.classList.remove('makeStyles-headerTop-11')
                header.current.classList.add('makeStyles-headerBottom-12')
            } else if (window.scrollY < 20) {
                header.current.classList.add('makeStyles-headerTop-11')
                header.current.classList.remove('makeStyles-headerBottom-12')
            }
        })
    }, []);

    return (
        <header>
            <nav className={clsx(classes.root, classes.headerTop)} ref={header}>
                <div className={classes.navContainer}>
                    <ul className={classes.navList}>
                        <li className={classes.navItem}>
                            <button className={classes.menuButton}>
                                <p className={classes.itemStyle}>Menu</p>
                            </button>
                        </li>

                        <li className={classes.navItem}>
                            <a href="#" className={clsx(classes.logoLink, classes.logo)}>
                                {/* <img src={logo} alt="" srcset="" /> */}
                                <Logo />
                            </a>
                        </li>

                        <li className={classes.navItem}>
                            <button className={classes.menuButton}>
                                <p className={clsx(classes.itemStyle, classes.whoWeAre)}>Who We Are</p>
                            </button>
                            <div className={classes.menuButton} style={{ marginLeft: '35px' }}>
                                <img src={Bag} alt="" srcset="" />
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
