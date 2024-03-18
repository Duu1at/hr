import cls from './Navbar.module.scss'
import {classNames} from "../../../shared/lib/classNames/classNames.ts";
import {AppLogo} from "../../../shared/ui/AppLogo";
import {Avatar} from "../../../shared/ui/Avatar";
import {Icon} from "../../../shared/ui/Icon";
import ArrowDown from '../../../shared/assets/icon/down-arrow.svg?react'
import MyProfile from '../../../shared/assets/icon/profile-circle.svg?react'
import LogOut from '../../../shared/assets/icon/log-out.svg?react'
import MainRskSvg from '../../../shared/assets/icon/rsk.svg?react';
import {useState} from "react";
import {Text} from "../../../shared/ui/Text";
import ListTile from "../../../shared/ui/ListTile/ListTile.tsx";
import {Button, ButtonTheme} from "../../../shared/ui/Button";
import {useNavigate} from "react-router-dom";
import {AppLink} from "../../../shared/ui/AppLink";

interface NavbarProps {
    className?: string;
}

const Navbar = ({className}: NavbarProps) => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={"container"}>
                <div className={cls.navbar_item}>
                    <div className={cls.main_logo}>
                        <AppLogo Svg={MainRskSvg} width={173} height={33}/>
                    </div>
                    <Button theme={ButtonTheme.CLEAR}>
                        <AppLink to={"/login"}>
                            Войти
                        </AppLink>

                    </Button>
                    <div className={cls.avatar_block}>

                        <div className={cls.avatar}>

                            <Avatar size={40}/>
                            <Icon Svg={ArrowDown} onClick={() => setShow(!show)} clickable={true} width={15}
                                  height={15}/>

                        </div>
                        {
                            show ? <div className={cls.logOut}>
                                <div className={cls.logOut_avatar}>
                                    <Avatar
                                        size={36}
                                    />
                                    <Text
                                        variant={"primary"}
                                        bold={true}
                                        size={"s"}
                                        title={"Каримова Карина"}
                                        text={"karimovakari@gmail.com"}
                                    />
                                </div>
                                <Button
                                    theme={ButtonTheme.CLEAR}
                                    onClick={() => {
                                        setShow(false)
                                        navigate('/profile')
                                    }}
                                >
                                    <ListTile
                                        className={cls.listtile__indent}
                                        leading={MyProfile}
                                        title={"Мой профиль"}
                                    />
                                </Button>

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
