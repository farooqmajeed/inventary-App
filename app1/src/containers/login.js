import {connect} from 'react-redux';
import LoginComponent from '../components/Login/login';

function mapStateToProps(state){
       auth: state.auth
}
 
 function mapDispatchToProps(dispatch){
    loginRequest =  () => (LoginRequest());

 }

 const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
 export default LoginContainer;

