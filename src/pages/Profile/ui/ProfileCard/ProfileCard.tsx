import cls from './ProfileCard.module.scss'
import {classNames} from "../../../../shared/lib/classNames/classNames.ts";
import ListTile from "../../../../shared/ui/ListTile/ListTile.tsx";
import React, {ReactNode} from "react";
import {VStack} from "../../../../shared/ui/Stack/VStack/VStack.tsx";


interface ProfileCardProps {
    className?: string;
    children: ReactNode;
    title?: string;
    leading?: React.VFC<React.SVGProps<SVGSVGElement>>;
}

const ProfileCard = ({className, children, leading, title}: ProfileCardProps) => {
    return (
        <VStack
            justify={"center"}
            className={classNames(cls.ProfileCard, {}, [className])}
        >
            <ListTile
                title={title}
                leading={leading}
                width={10}
                height={10}
                gap={"4"}
                className={cls.profile_card}
            />
            {
                children
            }
        </VStack>
    );
};

export default ProfileCard;
