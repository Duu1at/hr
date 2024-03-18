import cls from './EditAvatarCard.module.scss'
import {classNames} from "../../../../../shared/lib/classNames/classNames.ts";
import BaseContainer from "../../../ui/BaseContainer/BaseContainer.tsx";
import {Avatar} from "../../../../../shared/ui/Avatar";
import {VStack} from "../../../../../shared/ui/Stack/VStack/VStack.tsx";
import {Input} from "../../../../../shared/ui/Input";
import {Select} from "../../../../../shared/ui/Select";
import {position} from "../../../../../app/data/data.ts";


interface EditAvatarCardProps {
    className?: string;

}

const EditAvatarCard = ({className}: EditAvatarCardProps) => {
    return (
        <div className={classNames(cls.EditAvatarCard, {}, [className])}>
            <BaseContainer>
                <VStack gap={"4"}
                    align={"center"}
                    justify={"center"}
                >
                    <Avatar
                        size={56}
                    />
                    <Input
                        size={"s"}
                        placeholder={"ФИО"}
                    />
                    <Select options={position} label={position[0].value}/>
                    <Select options={position} label={position[0].value}/>

                </VStack>
            </BaseContainer>
        </div>

    )
        ;
};

export default EditAvatarCard;
