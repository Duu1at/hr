import React, {
    InputHTMLAttributes,
    memo,
} from 'react';
import cls from './Input.module.scss';
import {classNames} from "../../lib/classNames/classNames.ts";
import {HStack} from "../Stack/HStack/HStack.tsx";
import {Icon} from "../Icon";


type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'size'
>;

type InputSize = 's' | 'm' | 'l';

interface InputProps extends HTMLInputProps {
    className?: string;
    classNameInput?:string;
    value?: string | number;
    label?: string;
    onChange?: (value: string) => void;
    size?: InputSize;
    icon?: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        classNameInput,
        value,
        onChange,
        type = 'text',
        placeholder,
        label,
        size = 'm',
        icon,
        ...otherProps
    } = props;


    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };


    const input = (
        <div
            className={classNames(cls.InputWrapper, {}, [
                className,
                cls[size],
            ])}
        >
            <HStack gap="12" align={"center"}>

                {icon &&
                    <Icon Svg={icon} className={cls.size_icon}/>
                }
                <input

                    className={classNames(cls.input,{},[classNameInput])}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    placeholder={placeholder}
                    {...otherProps}
                />
            </HStack>

        </div>
    );


    return input;
});
