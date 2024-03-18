import cls from './LoginPage.module.scss'
import {classNames} from "../../../shared/lib/classNames/classNames.ts";
import LoginForm from "./LoginForm/LoginForm.tsx";
import {Button, ButtonTheme} from "../../../shared/ui/Button";
import {AppLogo} from "../../../shared/ui/AppLogo";
import RskSvg from '../../../shared/assets/icon/rskWhiteLogo.svg?react';
import {VStack} from "../../../shared/ui/Stack/VStack/VStack.tsx";
import {AppLink} from "../../../shared/ui/AppLink";

interface LoginPageProps {
    className?: string;
}

const LoginPage = ({className}: LoginPageProps) => {
    return (
        <div className={classNames(cls.LoginPage, {}, [className])}>
            <VStack
                align={"center"}
                justify={"center"}
                className={cls.login}
            >
                <h2 className={cls.login_text}>Войти в существующий <br/> аккаунт</h2>
                <p className={cls.login_small__text}>или используйте свой эл.адрес</p>
                <LoginForm className={cls.login_top}/>
                <Button theme={ButtonTheme.FILLED} className={cls.login__btn}>Зарегистрироваться</Button>
            </VStack>
            <div className={cls.welcome}>
                <div className={cls.welcome_block}>
                    <h2 className={cls.big_text}>С ВОЗВРАЩЕНИЕМ В <br/> КОРПОРАТИВНЫЙ <br/> ПОРТАЛ!</h2>

                    <AppLogo Svg={RskSvg} height={60} width={320} className={cls.logo}/>
                    <p className={cls.small_text}>Войдите в личный кабинет, <br/> указав свою информацию</p>

                </div>
                <p className={cls.title}>Нет аккаунта?
                    <AppLink to={"/auth"} className={cls.link}>
                        Зарегистрируйтесь.
                    </AppLink>
                </p>

            </div>

        </div>
    );
};

export default LoginPage;
