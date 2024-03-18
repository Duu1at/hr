import cls from './ProfileData.module.scss'
import {classNames} from "../../../shared/lib/classNames/classNames.ts";
import ProfileAvatarCard from "./ui/ProfileAvatarCard/ProfileAvatarCard.tsx";
import {HStack} from "../../../shared/ui/Stack/HStack/HStack.tsx";
import SocialCard from "./ui/SocialCard/SocialCard.tsx";
import {VStack} from "../../../shared/ui/Stack/VStack/VStack.tsx";
import PersonalData from "./ui/PersonalData/PersonalData.tsx";
import Address from "./ui/Address/Address.tsx";
import ProfileHeader from "./ui/ProfileHeader/ProfileHeader.tsx";
import {Navbar} from "../../../widgets/Navbar";


interface ProfileProps {
    className?: string;
}

const ProfileData = ({className}: ProfileProps) => {
    return (
        <>
            <Navbar/>
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
                            whatsApp={"wa.me/996 702 313611"}
                            facebook={"facebook@karimova_karina"}
                            telegram={"t.me/Duulat004"}
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
        </>
    );
};

export default ProfileData;
