import theme from './theme'

export default theme

export const nav = theme => ({
    root: {
        width: '100%',
        height: '100%',
        zIndex: 1,
        overflow: 'hidden',
        position: 'absolute',
        backgroundColor: theme.palette.background.default
    },
    appFrame: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100%'
    },
    appBar: {
        position: 'absolute',
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
    },
    content: {
        width: '100%',
        flexGrow: 1,
        // backgroundColor: theme.palette.background.default,
        // padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        height: 'calc(100% - 56px)',
        marginTop: 56,
        overflowY: 'auto',
        overflowX: 'hidden',
        WebkitOverflowScrolling: 'touch'
    },
    [theme.breakpoints.up('sm')]: {
        content: {
            height: 'calc(100% - 64px)',
            marginTop: 64
        },
    },
    flex: {
        flex: 1
    },
    link: {
        color: 'white',
        textDecoration: 'none'
    }
})

export const home = theme => ({
    root: {
        minHeight: `calc(100% - 100px)`,
        padding: 40
    },
    profile: {
        flex: 1
    },
    architecture: {
        flex: 1
    }
})

export const report = theme => ({
    root: {
        height: `calc(100% - 100px)`,
        textAlign: 'center'
    },
    tableauReport: {
        height: '100%',
        width: '100%'
    }
})