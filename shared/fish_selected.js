import { StyleSheet } from 'react-native'

const fish_selected = StyleSheet.create({
    main_container: {
      flex: 1,
    },
    top_container: {
      flex: 0.3
    },  
    middle_container: {
      flex: 0.4,
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
    puzzle_button: {
      justifyContent: 'flex-start',
      alignContent: 'center',
      alignItems: 'center',
      margin: 20,
      backgroundColor: '#B9E01D',
      paddingVertical: 10,
      paddingHorizontal: 38,
      borderRadius: 16,
    },
    button_text: {
      color: '#FFFFFF',
      fontSize: 20,
    }, 
    bottom_container: {
      flex: 0.3,
      flexDirection: 'column',
      backgroundColor: '#FBF1D7',
      borderTopRightRadius: 30,
      borderTopLeftRadius: 30,
      alignItems: 'center',
      justifyContent: 'flex-start',
      elevation: 50,
      paddingVertical: 20,
    },
    fish: {
      width: '100%',
      height: '100%',
    },
    fish_info_container: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    },
    fish_info: {
      fontSize: 20,
    }
  })

export { fish_selected }