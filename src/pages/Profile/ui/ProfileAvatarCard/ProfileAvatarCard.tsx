import cls from './ProfileAvatarCard.module.scss'
import {classNames} from "../../../../shared/lib/classNames/classNames.ts";
import BaseContainer from "../BaseContainer/BaseContainer.tsx";
import {Avatar} from "../../../../shared/ui/Avatar";
import {Text} from "../../../../shared/ui/Text";
import {VStack} from "../../../../shared/ui/Stack/VStack/VStack.tsx";


interface ProfileAvatarCardProps {
    className?: string;
}

const ProfileAvatarCard = ({className}: ProfileAvatarCardProps) => {
    return (
        <div className={classNames(cls.ProfileAvatarCard, {}, [className])}>
            <BaseContainer>
                <VStack
                    align={"center"}
                    justify={"center"}
                >
                    <Avatar size={56}/>
                    <Text
                        title={"Каримова Карина Анваровна"}
                    />
                    <Text
                        align={"center"}
                        title={"Инженер программист"}
                        text={"Отдел программного обеспечения"}
                    />
                </VStack>
            </BaseContainer>
        </div>

    )
        ;
};

export default ProfileAvatarCard;
