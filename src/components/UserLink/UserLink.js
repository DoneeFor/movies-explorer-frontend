import { Link } from "react-router-dom";
import profileImg from "../../images/icon__profile.svg";

import "./UserLink.css";

function UserLink() {
  return (
    <Link className='User-link' to='/profile'>
      <div className="User-link__button">
        <img className='User-link__pic' src={profileImg} alt='Изображение профиля' />
        <p className="User-link__title">Аккаунт</p>
      </div>
    </Link>
  );
}

export default UserLink;