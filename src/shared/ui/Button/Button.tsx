import {
    ButtonHTMLAttributes, memo, ReactNode,
} from 'react';
import cls from './Button.module.scss';
import {classNames, Mods} from "../../lib/classNames/classNames.ts";

 enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    SECONDARY = 'secondary',
    TEXT_BTN = 'text_btn',
    FILLED = "filled"
}


 enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    size?: ButtonSize;
    disabled?: boolean;
    children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme = ButtonTheme.OUTLINE,
        disabled = false,
        size = ButtonSize.M,
        ...otherProps
    } = props;


    const mods: Mods = {
        [cls[theme]]: true,
        [cls[size]]: true,
    };
    if (disabled) {
        mods[cls.disabled] = true;
    }

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [className])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
