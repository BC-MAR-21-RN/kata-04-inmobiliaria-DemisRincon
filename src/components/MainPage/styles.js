const stylesMainLayout = {
    main: {
        width: '100%',
        minHeight: '100%',
        paddingLeft: 10,
        paddingRight: 10,
backgroundColor:'white'
    }
}
const stylesMinimalItem = {
    container: {
        height: 170,
        backgroundColor: '#F5FDFF',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    imageContainer: {
        height: 130,
        width: '35%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'blue'
    },
    image: {
        height: 120,
        width: 110,
        borderRadius: 10
    },
    rateText:{
        position: 'absolute',
        bottom:10,
        width:'40%',
        height: 25,
        backgroundColor:'#FBEDB7',
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 10
    },
    dataContainer: {
        height: 130,
        backgroundColor:'red',
        width: '65%',

    }
}


export { stylesMainLayout, stylesMinimalItem }