import cls from './Profile.module.scss'
import {classNames} from "../../../shared/lib/classNames/classNames.ts";
import ProfileAvatarCard from "./ProfileAvatarCard/ProfileAvatarCard.tsx";
import {HStack} from "../../../shared/ui/Stack/HStack/HStack.tsx";
import SocialCard from "./SocialCard/SocialCard.tsx";
import {VStack} from "../../../shared/ui/Stack/VStack/VStack.tsx";
import PersonalData from "./PersonalData/PersonalData.tsx";
import Address from "./Address/Address.tsx";


interface ProfileProps {
    className?: string;
}

const Profile = ({className}: ProfileProps) => {
    return (
        <div className={"container"}>
            <HStack
                className={classNames(cls.Profile, {}, [className])}
                align={"start"}
                justify={"between"}
            >
                <VStack className={cls.profile_left}>
                    <ProfileAvatarCard/>
                    <SocialCard/>
                </VStack>
                <VStack className={cls.profile_right}>
                    <PersonalData/>
                    <Address/>
                </VStack>
            </HStack>

        </div>

    );
};

export default Profile;
