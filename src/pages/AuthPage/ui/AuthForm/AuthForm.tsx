import cls from './AuthForm.module.scss'
import {classNames} from "../../../../shared/lib/classNames/classNames.ts";
import {VStack} from "../../../../shared/ui/Stack/VStack/VStack.tsx";
import {Input} from "../../../../shared/ui/Input";
import Edit from "../../../../shared/assets/icon/sms-edit.svg?react"
import Password from "../../../../shared/assets/icon/icon-pass.svg?react"

interface AuthFormProps {
    className?: string;
}

const AuthForm = ({className}: AuthFormProps) => {
    return (
        <VStack
            align={"center"}
            gap={"16"}
            className={classNames(cls.AuthForm, {}, [className])}>
            <Input
                placeholder={"Электронный адрес"}
                icon={Edit}
                width={24}
                height={24}
            />
            <Input
                placeholder={"Пароль"}
                icon={Password}
                width={24}
                height={24}
            />
            <Input
                placeholder={"Подтвердите пароль"}
                icon={Password}
                width={24}
                height={24}
            />
        </VStack>
    );
};

export default AuthForm;
