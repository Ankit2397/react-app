import React , {Component} from 'react'

class Valform extends Component {

    constructor (props) {
        super(props);
        this.state = {
          email: '',
          password: '',
          formErrors: {email: '', password: ''},
          emailValid: false,
          passwordValid: false,
          formValid: false
        }
      }
      

      handleUserInput (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
        () => { this.validateField(name, value) });
      }

      validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
      
        switch(fieldName) {
          case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : ' is invalid';
            break;
          case 'password':
            passwordValid = value.length >= 6;
            fieldValidationErrors.password = passwordValid ? '': ' is too short';
            break;
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        passwordValid: passwordValid
                      }, this.validateForm);
      }
      
      validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
      }
      errorClass(error) {
        return(error.length === 0 ? '' : 'has-error')
        
     } 

 render () {
   return (
     <form className="w-[500px] my-4" onSubmit="">
       <h2>Sign up</h2>
       <div className={`form-group
                 ${this.errorClass(this.state.formErrors.email)}`}>
         <label htmlFor="email" >Email address</label>

         <input type="email" className="form-control"
           name="email"
           value={this.state.email}
           onChange={(event) => this.handleUserInput(event)}
           />

         
       </div>
       <div className={`form-group
                 ${this.errorClass(this.state.formErrors.password)}`}>
         <label htmlFor="password" >Password</label>
         <input type="password" 
         className="form-control"
           name="password" 
           onChange={(event) => this.handleUserInput(event)}
           value={this.state.password}
           />
       </div>
       <button type="submit" className="btn btn-primary" 
  disabled={!this.state.formValid}>Sign up</button>
     </form>
   )
 }
}
export default Valform;