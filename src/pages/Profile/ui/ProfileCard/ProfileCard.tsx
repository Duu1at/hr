
import cls from './ProfileCard.module.scss'
import {classNames} from "../../../../shared/lib/classNames/classNames.ts";
import ListTile from "../../../../shared/ui/ListTile/ListTile.tsx";
import SvgIcon from "../../../../shared/assets/icon/calendar.svg?react"
import {ReactNode} from "react";
import {VStack} from "../../../../shared/ui/Stack/VStack/VStack.tsx";


interface ProfileCardProps{
    className?:string;
    children:ReactNode;
}
const ProfileCard = ({className,children}:ProfileCardProps ) => {
    return (
       <VStack className={classNames(cls.ProfileCard,{},[className])}>
           <ListTile title={"duulat"} leading={SvgIcon} width={10} height={10} className={cls.profile_card}/>
           {
               children
           }
       </VStack>
    );
};

export default ProfileCard;
