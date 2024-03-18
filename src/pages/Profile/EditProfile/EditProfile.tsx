import cls from "./EditProfile.module.scss"
import {HStack} from "../../../shared/ui/Stack/HStack/HStack.tsx";
import {VStack} from "../../../shared/ui/Stack/VStack/VStack.tsx";
import EditAvatarCard from "./ui/EditAvatarCard/EditAvatarCard.tsx";
import EditSocialCard from "./ui/EditSocialCard/EditSocialCard.tsx";
import EditPersonalData from "./ui/EditPersonalData/EditPersonalData.tsx";
import Address from "./ui/Address/Address.tsx";
import EditProfileHeader from "./ui/EditProfileHeader/EditProfileHeader.tsx";
import {classNames} from "../../../shared/lib/classNames/classNames.ts";
import {Navbar} from "../../../widgets/Navbar";

interface EditProfileProps {
    className?: string;
}

const EditProfile = ({className}: EditProfileProps) => {
    return (
        <>
            <Navbar/>
            <div className="container">

                <EditProfileHeader/>
                <HStack
                    className={classNames(cls.EditProfile, {}, [className])}
                    justify={"between"}
                    align={"start"}
                >
                    <VStack gap={"32"} className={cls.edit_left__block}>
                        <EditAvatarCard/>
                        <EditSocialCard/>
                    </VStack>
                    <VStack gap={"32"} className={cls.edit_right__block}>
                        <EditPersonalData/>
                        <Address/>
                    </VStack>
                </HStack>

            </div>
        </>

    );
};

export default EditProfile;
