import cls from './Address.module.scss'
import {classNames} from "../../../../shared/lib/classNames/classNames.ts";
import BaseContainer from "../BaseContainer/BaseContainer.tsx";
import ProfileCard from "../ProfileCard/ProfileCard.tsx";
import {Text} from "../../../../shared/ui/Text";


interface AddressProps {
    className?: string;
}

const Address = ({className}: AddressProps) => {
    return (
        <div className={classNames(cls.Address, {}, [className])}>
            <BaseContainer>
                <ProfileCard> <Text text={"Duulat"}/></ProfileCard>
                <ProfileCard> <Text text={"Duulat"}/></ProfileCard>
            </BaseContainer>
        </div>
    );
};

export default Address;
