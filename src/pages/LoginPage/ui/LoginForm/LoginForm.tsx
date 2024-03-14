import cls from './LoginForm.module.scss'
import {classNames} from "../../../../shared/lib/classNames/classNames.ts";
import {Input} from "../../../../shared/ui/Input";
import PassIcon from "../../../../shared/assets/icon/icon-pass.svg?react"
import SmsIcon from "../../../../shared/assets/icon/sms-edit.svg?react"
import loginPage from "../LoginPage.tsx";


interface LoginFormProps {
    className?: string;
}

const LoginForm = ({className}: LoginFormProps) => {
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input placeholder={"Электронный адрес"} type={"text"} icon={PassIcon} className={cls.login_form__input} />
            <Input placeholder={"Пароль"} type={"password"} icon={SmsIcon} className={cls.login_form__input}/>
        </div>
    );
};

export default LoginForm;
