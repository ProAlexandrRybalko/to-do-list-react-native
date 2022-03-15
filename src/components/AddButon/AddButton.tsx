import { FC } from "react";
import { Pressable, Text } from "react-native"
import { useDispatch } from "react-redux";
import { createAccounting } from "../../api/FetchCreateAccountings";
import { asyncAddAccountingCreator } from "../../redux/AccountingsReducer";
import { asyncAddSumCreator } from "../../redux/sumReducer";
import { AddButtonStyles } from "./AddButtonStyles"
import { inputValues } from "./AddButtonTypes";

export const AddButton: FC<inputValues> = (props) => {

    const dispatch = useDispatch();

    const addAccounting = async () => {
        const where = props.where;
        const date = new Date();
        const howMuch = +props.howMuch;
    
        try {
            const response = await createAccounting({where, date, howMuch});
            if(response.status === 200) {
                dispatch(asyncAddAccountingCreator(response.data));
                dispatch(asyncAddSumCreator(howMuch));
            }
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <Pressable style={AddButtonStyles.addButton} onPress={addAccounting}>
            <Text>Добавить</Text>
        </Pressable>
    )
}