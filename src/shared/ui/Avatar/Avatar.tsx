import {CSSProperties, useMemo} from 'react';
import cls from './Avatar.module.scss';
import {classNames} from "../../lib/classNames/classNames.ts";
import {AppImage} from "../AppImage";
import {Icon} from "../Icon";
import {Skeleton} from "../Skeleton/Skeletom.tsx";
import UserIcon from "../../assets/icon/userFilled.svg?react";

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar = (props: AvatarProps) => {
    const {
        className,
        src,
        size,
        alt,
    } = props;


    const styles = useMemo<CSSProperties>(
        () => ({
            width: size,
            height: size,
        }),
        [size],
    );

    const fallback = <Skeleton width={size} height={size} border="50%"/>;
    const errorFallback = <Icon width={size} height={size} Svg={UserIcon}/>;

    return (
        <AppImage
            fallback={fallback}
            errorFallback={errorFallback}
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.Avatar, {}, [className])}
        />

    );
};
