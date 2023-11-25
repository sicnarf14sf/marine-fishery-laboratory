import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        flex: 1,
      },
      top: {
        flex: 1,
        paddingBottom: 100,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: '20%',
      },
      bottom: { 
        flex:1,
        justifyContent: 'flex-start',
      },
      header: {
        fontSize: 40,
        fontWeight: '700',
        color: '#0784B5',
        paddingVertical: 30,
      },
      header2: {
        fontFamily: 'sans-serif-thin',
        fontSize: 30,
        fontWeight: '700',
        color: '#0784B5',
        paddingBottom: 30,
      },
      inputName: {
        fontFamily: 'Roboto',
        borderWidth: 1,
        borderColor: '#0784B5',
        borderRadius: 23,
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginBottom: 20,
        width: '80%',
        fontSize: 20,
      },
      button: {
        width: '50%',
        height: '15%',
        paddingVertical: 5,
        paddingBottom: 10,
        paddingHorizontal: 22,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9BD4E4',
        elevation: 3,
        borderRadius: 50,
      },
      buttonText: {
        color: '#fff',
        fontSize: 25,
      },
      backgroundImage: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
        opacity: 0.4,
      },
    });
export { styles }
  