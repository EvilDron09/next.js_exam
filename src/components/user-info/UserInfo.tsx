import userImage from './img/user_image.jpg'
import Image from "next/image";
import './style/userInfoStyle.css'

export const UserInfo = () => {
    return (
        <div className={"userInfoDiv"}>
            <div>
            <Image src={userImage} alt="user" className={'userImage'}/>
            </div>
            <p>User</p>
        </div>
    );
};
