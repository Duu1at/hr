// import cls from "./RadioBtn.module.scss"
// interface RadioButtonProps {
//     label?: string;
//     checked?: boolean;
//     onChange: (isChecked: boolean) => void;
// }
//
// const RadioButton: React.FC<RadioButtonProps> = ({ label, checked, onChange }) => {
//     const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         onChange(event.target.checked);
//     };
//
//     return (
//         <label className={cls.radioButtonContainer}>
//             <span className={cls.label}>{label}</span>
//             <input
//                 className={cls.checkbox}
//                 type="checkbox"
//                 checked={checked}
//                 onChange={handleChange}
//             />
//             <span >
//           <svg viewBox="0 0 24 24">
//               афываф
//             <polyline points="20 6 9 17 4 12"/>
//           </svg>
//         </span>
//         </label>
//     );
// };
//
// export default RadioButton;
import cls from "./RadioBtn.module.scss";
import {classNames} from "../../lib/classNames/classNames.ts"; // Подключаем файл со стилями

 interface RadioButtonProps {
    label?: string;
    checked?: boolean;
    onChange?: () => void;
     className?:string;
}
const RadioButton = (props:RadioButtonProps) => {
     const {
         label,
         checked,
         onChange,
         className
     }=props



    return (
        <label className={classNames(cls.round_checkbox,{},[className])}>
            <span> {label}</span>
            <input
                className={cls.checkmark}
                type="checkbox"
                checked={checked}
                onChange={onChange}
            />
        </label>
    );
};

export default RadioButton;
