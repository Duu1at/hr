import cls from './ProfileAvatarCard.module.scss'
import {classNames} from "../../../../../shared/lib/classNames/classNames.ts";
import BaseContainer from "../../../ui/BaseContainer/BaseContainer.tsx";
import {Avatar} from "../../../../../shared/ui/Avatar";
import {Text} from "../../../../../shared/ui/Text";
import {VStack} from "../../../../../shared/ui/Stack/VStack/VStack.tsx";


interface ProfileAvatarCardProps {
    className?: string;
    name?: string;
    avatar?: string;
    position?: string;
    industry?: string
}

const ProfileAvatarCard = ({className, name, avatar, industry, position}: ProfileAvatarCardProps) => {
    return (
        <div className={classNames(cls.ProfileAvatarCard, {}, [className])}>
            <BaseContainer>
                <VStack
                    align={"center"}
                    justify={"center"}
                >
                    <Avatar
                        size={56}
                        src={avatar}
                    />
                    <Text
                        align={"center"}
                        size={"l"}
                        title={name}
                    />
                    <Text
                        align={"center"}
                        text={position}
                        color={"blue"}
                    />
                    <Text
                        align={"center"}
                        color={"gray"}
                        text={industry}
                    />
                </VStack>
            </BaseContainer>
        </div>

    )
        ;
};

export default ProfileAvatarCard;
