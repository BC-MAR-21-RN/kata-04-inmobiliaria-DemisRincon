import {StyleSheet} from 'react-native';
import {colors, globalStyles} from '../../library/globalStyles';

const stylesMainLayout = StyleSheet.create({
  main: {
    width: '100%',
    minHeight: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'white',
  },
});
const stylesImageContainer = StyleSheet.create({
  imageContainer: {
    height: 130,
    width: '35%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 130,
    width: 120,
    borderRadius: globalStyles.borderRadius,
  },
  rateTextArea: {
    position: 'absolute',
    bottom: 10,
    width: '40%',
    height: 25,
    backgroundColor: colors.mustard,
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: globalStyles.borderRadius,
    paddingHorizontal: 10,
  },
  rateText: {
    fontWeight: 'bold',
    color: colors.lightBrown,
    paddingHorizontal: 5,
  },
  fontAStar: {
    color: '#EEBA00',
  },
});
const stylesMinimalItem = StyleSheet.create({
  container: {
    height: 180,
    backgroundColor: colors.lightBlue,
    borderRadius: globalStyles.borderRadius,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  dataContainer: {
    height: 140,
    width: '65%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    fontSize: 25,
    marginLeft:10
  },
  titileContainer: {
    flex: 1,
    justifyContent: 'space-around',
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
  },
  content: {
    flex: 3,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  rowItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textGray: {
    color: '#555',
    fontSize:18
  },
  textRow:{
    paddingLeft:8,
    paddingRight:30,
    fontWeight:'bold',
    fontSize:18
  },
  super:{
    fontSize:10,
    textAlignVertical: 'top',
    lineHeight:22,   
  },
  fontIcons: {
    color: '#bcbcbc',
    margin: 5,
  },
  fontIconsG:{
    color: '#03A66A',
    margin: 5,
  },
  rowSpaced:{
    justifyContent:'space-between'
  }
});

export {stylesMainLayout, stylesMinimalItem, stylesImageContainer};
