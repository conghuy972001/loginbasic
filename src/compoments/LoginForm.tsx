import React from 'react';
import './LoginForm.css';

function LoginForm() {

    return (
        <form >
            <div>
                <header className="App-header">
                    <nav className='header-bar'>
                        <a className='text-trangchu' href='https://www.youtube.com/'>Trang chu</a>
                        <a className='text-tintuc' href='https://www.facebook.com/'>Tin Tuc</a>
                        <div className='header-text'>
                            <q>Xin chao</q>
                        </div>
                    </nav>
                </header>
                <body className='app-body'>
                    <div className='body-main'>
                        <div className='body-title'>
                            <h2>Login</h2>
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <input className='input-login' type="text" name="username" id="username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password: </label>
                            <input className='input-login' type="text" name="password" id="password"></input>
                        </div>
                        <input type="submit" value="Login" className='buttonLogin'></input>
                        <div className='body-forgot'>
                            <h5>Bạn quên tài khoản và mật khẩu?</h5>
                            <nav>
                                <a>Quên mật khẩu</a>
                            </nav>
                        </div>
                    </div>
                </body >
                <footer className='app-footer'>
                    <nav className='footer-bar'>
                        <div className='text-footer'>
                            <h5>Ban chua dang nhap</h5>
                        </div>
                        <div>
                            <a className='link-tacgia' href='https://www.facebook.com/'>Tac Gia</a>
                        </div>
                        <div>
                            <a className='link-lienhe' href='https://www.facebook.com/caunhox97'>Lien he</a>
                        </div>
                    </nav>
                </footer>
            </div>
        </form>
    )
}

export default LoginForm

function props(props: any) {
    throw new Error('Function not implemented.');
}
