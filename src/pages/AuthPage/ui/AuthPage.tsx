import cls from './AuthPage.module.scss'
import {classNames} from "../../../shared/lib/classNames/classNames.ts";
import {VStack} from "../../../shared/ui/Stack/VStack/VStack.tsx";
import {HStack} from "../../../shared/ui/Stack/HStack/HStack.tsx";
import {Icon} from "../../../shared/ui/Icon";
import Edit from '../../../shared/assets/icon/telegram.svg?react';
import RskSvg from '../../../shared/assets/icon/rskWhiteLogo.svg?react';

import AuthForm from "./AuthForm/AuthForm.tsx";
import {Button, ButtonTheme} from "../../../shared/ui/Button";
import {AppLogo} from "../../../shared/ui/AppLogo";
import {AppLink} from "../../../shared/ui/AppLink";


interface AuthPageProps {
    className?: string;
}

const AuthPage = ({className}: AuthPageProps) => {
    return (

        <div className={classNames(cls.AuthPage, {}, [className])}>


            <VStack
                align={"center"}
                justify={"center"}
                className={cls.auth_left}
                gap={"24"}
            >
                <h2 className={cls.text_register}>Зарегистрироваться</h2>
                <HStack
                    align={"center"}
                    justify={"center"}
                    gap={"16"}
                >
                    <Icon width={40} height={40} Svg={Edit}/>
                    <Icon width={40} height={40} Svg={Edit}/>
                    <Icon width={40} height={40} Svg={Edit}/>
                </HStack>
                <p className={cls.title_register}>или используйте свой эл.адрес</p>
                <AuthForm/>
                <Button theme={ButtonTheme.FILLED} className={cls.btn_register}>
                    Зарегистрироваться
                </Button>
            </VStack>
            <div className={cls.auth_right}>
                <VStack gap={"16"} align={"center"}>
                    <h2 className={cls.welcome_banner}>ДОБРО ПОЖАЛОВАТЬ В <br/> КОРПОРАТИВНЫЙ <br/> ПОРТАЛ!</h2>
                    <AppLogo
                        Svg={RskSvg}
                        width={320}
                        height={60}
                    />
                    <p className={cls.welcome_banner__title}>Введите свои данные и <br/> присоединяйтесь к нам!</p>

                </VStack>

                <p className={cls.footer_text}>
                    Уже есть аккаунт? <AppLink className={cls.link} to={'/login'}>Входите!</AppLink>
                </p>


            </div>

        </div>
    );
};

export default AuthPage;
