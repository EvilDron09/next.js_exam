import Link from "next/link";
import {UserInfo} from "@/src/components/user-info/UserInfo";
import {GenreBadgeRender} from "@/src/components/genre-component/genre-badge-render/GenreBadgeRender";
import './style/headerStyle.css'

import {SyntheticEvent} from "react";



export const Header =  () => {

    return (
        <header>
            <UserInfo/>
            <h1><Link href={'/'}>Next.js Exam</Link></h1>
            <div>
                <label htmlFor='genreToggle' className={'genreButton'}>Genre</label>
                <input type="checkbox" id="genreToggle" className={'genreCheckbox'}/>
                <div className={'genreMenu'}><GenreBadgeRender/></div>
            </div>
            <form action='/search' method='GET'>
                <input type="text" name='query' placeholder={"movie search"}/>
                <button type={'submit'}>Send</button>
            </form>
        </header>
    );
};
