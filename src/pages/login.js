import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

@inject(stores => ({
    account: stores.account,
}))
@observer
class Login extends Component {
    createEvent(){
        const {createEvent} =  this.props.account;
        createEvent({
            "title" : "오늘 노가리 벙입니다",
            "categoryCode" : "5d2190b40b1d6d4cac321b7b",
            "locationCode" : "5cf38a4294371522a4c10144",
            "message" : "노가리 까러오세요~",
            "date": new Date(),
            "togetherId": "5d21900d0b1d6d4cac321b79",
            "limit": 10
        })
    }
    deleteEvent(){
        const {deleteEvent} =  this.props.account;
        deleteEvent({
            title : `테스터 ${(Math.random()*10).toFixed(0)}의 모임입니다`,
        })
    }
    render() {
        const {account,formValues,formErrors,onValueChange,meta,loginSubmitForm,logout} = this.props.account;
        return (
            <div>
                {!account ? 
                    <form method="POST" onSubmit={loginSubmitForm}>
                        <TextField
                            type="email"
                            name="email"
                            label="email"
                            required
                            defaultValue={formValues.email}
                            onChange={onValueChange}
                            placeholder="email"
                        />
                        <div>email error : {formErrors.email}</div>
                        <TextField
                            type="password"
                            name="password"
                            label="password"
                            required
                            defaultValue={formValues.password}
                            placeholder="password"
                            onChange={onValueChange}
                        />
                        <div>password error : {formErrors.password}</div>

                        <Button type="submit" variant="outlined" color="primary">Login</Button>

                        <div>meta.error {meta.error}</div>

                    </form>
                    :
                    <div>
                        {account.username}님 안녕하세요
                        <Button  type="submit" variant="outlined" color="primary" onClick={logout}>logout</Button>
                    </div>
                }


                <Button  type="submit" variant="outlined" color="primary" onClick={(e)=>{this.createEvent(e)}}>createEvent</Button>
                <Button  type="submit" variant="outlined" color="primary" onClick={(e)=>{this.deleteEvent(e)}}>deleteEvent</Button>

            </div>
        );
    }
}
export default Login;



//함수형으로 구현하기
// const LoginForm = ({formValues,formErrors,onValueChange,meta,loginSubmitForm})=>
//     <form method="POST" onSubmit={loginSubmitForm}>
//         <TextField
//             type="email"
//             name="email"
//             label="email"
//             required
//             defaultValue={formValues.email}
//             onChange={onValueChange}
//             placeholder="email"
//         />
//         <div>email error : {formErrors.email}</div>
//         <TextField
//             type="password"
//             name="password"
//             label="password"
//             required
//             defaultValue={formValues.password}
//             placeholder="password"
//             onChange={onValueChange}
//         />
//         <div>password error : {formErrors.password}</div>
//         <Button type="submit" variant="outlined" color="primary">Login</Button>
//         <div>meta.error {meta.error}</div>
//     </form>

// const LogoutForm = ({account,logout})=>
//     <div>
//         {account.username}님 안녕하세요
//         <Button  type="submit" variant="outlined" color="primary" onClick={logout}>logout</Button>
//     </div>


// @inject(stores => ({
//     account: stores.account,
// }))
// @observer
// class Login extends Component {
//     render() {
//         const {account,formValues,formErrors,onValueChange,meta,loginSubmitForm,logout} = this.props.account;
//         return (
//             <div>
//                 {!account ?
//                     <LoginForm 
//                         formValues={formValues}
//                         formErrors={formErrors}
//                         onValueChange={onValueChange}
//                         meta={meta}
//                         loginSubmitForm={loginSubmitForm}
//                     />
//                     :
//                     <LogoutForm
//                         account={account}
//                         logout={logout}
//                     />
//                 }
//             </div>
//         );
//     }
// }
// export default Login;