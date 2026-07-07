import userImage from './img/user_image.jpg'
import Image from "next/image";

export const UserInfo = () => {
    return (
        <div>
            <div>
            <Image src={userImage} alt="user"/>
            </div>
            <p>User</p>
        </div>
    );
};
