import Link from "next/link";
import {UserInfo} from "@/src/components/user-info/UserInfo";

export const Header = () => {
    return (
        <header>
            <UserInfo/>
            <h1><Link href={'/'}>Next.js Exam</Link></h1>
        </header>
    );
};
