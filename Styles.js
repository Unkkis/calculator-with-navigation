import { StyleSheet } from 'react-native';



    export default StyleSheet.create({
        container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        
        },
        input : {
        marginTop: 5,
        marginBottom: 5,
        padding: 5,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1
        },
        buttons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '20%',
        borderColor: 'black',
        borderWith: 1,
        margin: 10, 
        },
        textbox : {
        borderColor: 'black',
        borderWidth: 1, 
        padding: 5, 
        width: '50%',
        margin: 10,
        },
        header: {
        fontWeight: 'bold',
    
        }
    });

