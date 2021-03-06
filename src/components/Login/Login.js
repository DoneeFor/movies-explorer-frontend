import { Link } from "react-router-dom";
import SignForm from "../SignForm/SignForm";

function Login() {
  return (
    <SignForm
      class='signin'
      title='Рады видеть!'
      submit='Войти'
      fields={[
        { name: "E-mail", placeholder: "Введите email", type: "email" },
        { name: "Пароль", placeholder: "Введите пароль", type: "password" },
      ]}
    >
      <Link className='signform__link' to='/signup'>
        Ещё не зарегистрированы? <span className='signform__link-accent'>Регистрация</span>
      </Link>
    </SignForm>
  );
}

export default Login;