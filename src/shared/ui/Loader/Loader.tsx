import './Loader.scss';
import {classNames} from "../../lib/classNames/classNames.ts";

interface LoaderProps {
    className?: string;
}


export const Loader = ({ className }: LoaderProps) => (
    <div className={classNames('lds-ellipsis', {}, [className])}>
        <div />
        <div />
        <div />
        <div />
    </div>
);
