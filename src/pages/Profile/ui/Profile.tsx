import cls from './Profile.module.scss'
import {classNames} from "../../../shared/lib/classNames/classNames.ts";
import ProfileAvatarCard from "../ProfileData/ui/ProfileAvatarCard/ProfileAvatarCard.tsx";
import {HStack} from "../../../shared/ui/Stack/HStack/HStack.tsx";
import SocialCard from "../ProfileData/ui/SocialCard/SocialCard.tsx";
import {VStack} from "../../../shared/ui/Stack/VStack/VStack.tsx";
import PersonalData from "../ProfileData/ui/PersonalData/PersonalData.tsx";
import Address from "../ProfileData/ui/Address/Address.tsx";
import ProfileHeader from "../ProfileData/ui/ProfileHeader/ProfileHeader.tsx";


interface ProfileProps {
    className?: string;
}

const Profile = ({className}: ProfileProps) => {
    return (
        <div className={"container"}>

            <ProfileHeader/>

            <HStack
                className={classNames(cls.Profile, {}, [className])}
                align={"start"}
                justify={"between"}
            >
                <VStack gap={"32"} className={cls.profile_left}>
                    <ProfileAvatarCard
                        name={"Каримова Карина Анваровна"}
                        position={"Инженер программист"}
                        industry={"Отдел программного обеспечения"}
                    />
                    <SocialCard
                        whatsApp={"wa.me/770879665"}
                        facebook={"facebook@karimova_karina"}
                        telegram={"t.me@kkarina"}
                    />
                </VStack>
                <VStack gap={"32"} className={cls.profile_right}>
                    <PersonalData
                        email={"karimovakari@gmail.com"}
                        date={"12.04.1999"}
                        status={"Не замужем"}
                        sex={"Женский"}
                        phoneNumber={"0(770) 879 665"}
                    />
                    <Address
                        address={"ул. Токтогула 191"}
                        city={"Бишкек"}
                    />
                </VStack>
            </HStack>

        </div>

    );
};

export default Profile;
