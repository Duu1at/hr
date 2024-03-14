import cls from './Navbar.module.scss'
import {classNames} from "../../../shared/lib/classNames/classNames.ts";
import {AppLogo} from "../../../shared/ui/AppLogo";
import {Avatar} from "../../../shared/ui/Avatar";
import imgUrl from "../../../shared/assets/image/photo.jpg"
import {Icon} from "../../../shared/ui/Icon";
import ArrowDown from '../../../shared/assets/icon/down-arrow.svg?react'
import MyProfile from '../../../shared/assets/icon/profile-circle.svg?react'
import LogOut from '../../../shared/assets/icon/log-out.svg?react'
import MainRskSvg from '../../../shared/assets/icon/rsk.svg?react';
import {useState} from "react";
import {Text} from "../../../shared/ui/Text";
import ListTile from "../../../shared/ui/ListTile/ListTile.tsx";

interface NavbarProps {
    className?: string;
}

const Navbar = ({className}: NavbarProps) => {
    const [show, setShow] = useState(false);
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={"container"}>
                <div className={cls.navbar_item}>
                    <div className={cls.main_logo}>
                        <AppLogo Svg={MainRskSvg} width={173} height={33}/>
                    </div>
                    <div className={cls.avatar_block}>
                        <div className={cls.avatar}>
                            <Avatar src={imgUrl} size={40}/>
                            <Icon Svg={ArrowDown} onClick={() => setShow(!show)} clickable={true} width={15}
                                  height={15}/>

                        </div>
                        {
                            show ? <div className={cls.logOut}>
                                <div className={cls.logOut_avatar}>
                                    <Avatar
                                        className={cls.logOut_avatar__indent}
                                        src={"https://i06.fotocdn.net/s121/d02a5c3e7bee0f97/public_pin_l/2765725053.jpg"}
                                        size={36}
                                    />
                                    <Text variant={"primary"} bold={true}
                                          size={"s"}
                                          title={"Каримова Карина"}
                                          text={"karimovakari@gmail.com"}/>
                                </div>
                                <ListTile
                                    className={cls.listtile__indent}
                                    leading={MyProfile}
                                    title={"Мой профиль"}/>
                                <ListTile
                                    className={cls.listtile__indent}
                                    leading={LogOut}
                                    title={"Выйти из аккаунта"}/>
                            </div> : null
                        }
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Navbar;
