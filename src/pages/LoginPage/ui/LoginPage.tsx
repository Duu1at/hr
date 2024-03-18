import cls from './LoginPage.module.scss'
import {classNames} from "../../../shared/lib/classNames/classNames.ts";
import {Text} from "../../../shared/ui/Text";
import LoginForm from "./LoginForm/LoginForm.tsx";
import {Button, ButtonTheme} from "../../../shared/ui/Button";
import {AppLogo} from "../../../shared/ui/AppLogo";
import RskSvg from '../../../shared/assets/icon/rskWhiteLogo.svg?react';

interface LoginPageProps {
    className?: string;
}

const LoginPage = ({className}: LoginPageProps) => {
    return (
        <div className={classNames(cls.LoginPage, {}, [className])}>
            <div className={cls.login}>
                <Text text={"Войти в существующий аккаунт"}   className={cls.login_text} align={"center"}/>
                <Text text={"или используйте свой эл.адрес"} className={cls.login_small__text} align={"center"}/>
                <LoginForm className={cls.login_top}/>
                <Button theme={ButtonTheme.FILLED} className={cls.login__btn}>Зарегистрироваться</Button>
            </div>
            <div className={cls.welcome}>
                <div className={cls.welcome_block}>
                    <Text text={"С ВОЗВРАЩЕНИЕМ В КОРПОРАТИВНЫЙ ПОРТАЛ!"} className={cls.big_text} align={"center"}/>
                    <AppLogo Svg={RskSvg} height={60} width={320} className={cls.logo}/>
                    <Text text={"Войдите в личный кабинет, указав свою информацию"} className={cls.small_text}
                          align={"center"}/>
                </div>
                <div className={cls.welcome_link}>
                    <Text text={"Нет аккаунта?  "} className={cls.welcome_link__text}/>
                    <Text text={"Зарегистрируйтесь."} className={cls.welcome_link__navigate}/>

                </div>
            </div>

        </div>
    );
};

export default LoginPage;
