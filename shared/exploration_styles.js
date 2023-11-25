import { StyleSheet } from 'react-native'

const exploration_styles = StyleSheet.create({
    main_container: {
      flex: 2,
    },
    top_container: {
      flex: 1,
      alignItems: 'center',
    },
    header:{
      fontSize: 40,
      fontWeight: '700',
      color: '#003448',
      paddingVertical: 100,
      position: 'absolute',
    },
    bottom_header: {
      fontFamily: 'Roboto',
      fontSize: 20,
      fontWeight: 'bold',
      justifyContent: 'center',
      marginBottom: 10,
    },
    bottom_container: {
      flex: 1,
      flexDirection: 'column',
      flexWrap: 'wrap',
    },
    bc_subcon1: {
      flex: 0.4,
      flexDirection: 'row',
    },
    bc_subcon2: {
      flex: 0.4,
      flexDirection: 'row',
    },
    bc_subcon3: {
      flex: 0.25,
      flexDirection: 'row',
    },
    bc_subcon3_subcon1: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#FBF1D7',
      borderTopRightRadius: 30,
      borderTopLeftRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',
    },
    fish_container: {
      flex: 1,
      backgroundColor: '#D9D9D9',
      width: '50%',
      marginHorizontal: 10,
      marginVertical: 10,
      padding: 7,
      borderRadius: 10,
    },
    fish: {
      width: '100%', 
      height: '100%',
    },
  })

export { exploration_styles }