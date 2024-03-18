import {memo} from 'react';
import cls from './Text.module.scss';
import {classNames} from "../../lib/classNames/classNames.ts";

export type TextVariant = 'primary' | 'error' | 'accent' | "title";
export  type TextColor = 'blue' | 'gray' | 'red'| 'black';
export type TextAlign = 'right' | 'left' | 'center';

export type TextSize = 's' | 'm' | 'l' | 'xl';

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    variant?: TextVariant;
    align?: TextAlign;
    size?: TextSize;
    bold?: boolean;
    color?: TextColor;
}

type HeaderTagType = 'h1' | 'h2' | 'h3' | 'h4';

const mapSizeToClass: Record<TextSize, string> = {
    s: cls.size_s,
    m: cls.size_m,
    l: cls.size_l,
    xl: cls.size_xl,
};
const mapColorToClass: Record<TextColor, string> = {
    blue: cls.color_blue,
    gray: cls.color_grey,
    red: cls.color_red,
    black:cls.color_black
};

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    s: 'h4',
    m: 'h3',
    l: 'h2',
    xl: 'h1',
};

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        align = 'left',
        size = 'm',
        bold,
        variant = 'primary',
        color = 'black',
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];
    const sizeClass = mapSizeToClass[size];
    const colorClass = mapColorToClass[color];
    const additionalClasses = [className, colorClass, cls[align], sizeClass, cls[variant]];

    return (
        <div
            className={classNames(
                "", {
                    [cls.bold]: bold,
                },
                additionalClasses,
            )}
        >
            {title && (
                <HeaderTag
                    className={cls.title}
                >
                    {title}
                </HeaderTag>
            )}
            {text && (
                <p className={cls.text}>
                    {text}
                </p>
            )}
        </div>
    );
});
