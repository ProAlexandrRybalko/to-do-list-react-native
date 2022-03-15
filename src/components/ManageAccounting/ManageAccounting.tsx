import { Pressable, TextInput, View } from "react-native";
import { useParams, Link, useNavigate } from "react-router-native";
import { Text } from "react-native";
import { ManageStyles } from "./ManageAccountingStyle";
import { useDispatch } from "react-redux";
import { getOneAccounting } from "../../api/FetchOneAccounting";
import { useEffect, useState } from "react";
import { getRightDate } from "../../utils/date/getRightDate";
import { deleteAccounting } from "../../api/FetchDeleteAccounting";
import {
  asyncChangeAccountingCreator,
  asyncSubAccountingCreator,
} from "../../redux/AccountingsReducer";
import { asyncAddSumCreator, asyncSubSumCreator } from "../../redux/sumReducer";
import { styles } from "../../../AppStyles";
import { AccTypeId } from "../Accounting/AccountingsType";
import { changeAccounting } from "../../api/FetchChangeAccounting";

export const ManageAccoutning = () => {
  const { id } = useParams();
  const strId = id as string;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [where, setWhere] = useState<string>("");
  const [date, setDate] = useState<Date>(new Date());
  const [howMuch, setHowMuch] = useState<number>(0);

  const [hider, setHider] = useState<boolean>(false);
  const [inputWhere, setInputWhere] = useState<string>("");
  const [inputHowMuch, setInputHowMuch] = useState<number>(0);

  const fetchAccounting = async () => {
    try {
      const response = await getOneAccounting(strId);
      setWhere(response.data.where);
      setDate(response.data.date);
      setHowMuch(response.data.howMuch);
    } catch (error) {
      console.log(error);
    }
  };

  const onDeleteAccounting = async () => {
    try {
      const response = await deleteAccounting(strId);
      if (response.status === 204) {
        dispatch(asyncSubAccountingCreator(strId));
        dispatch(asyncSubSumCreator(howMuch));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeAccounting = async () => {
    try {
      const response = await changeAccounting(strId, inputWhere, inputHowMuch);
      if (response.status === 200) {
        const obj: AccTypeId = {
          _id: strId,
          where: inputWhere,
          date,
          howMuch: inputHowMuch,
        };
        dispatch(asyncChangeAccountingCreator({ strId, obj }));
        dispatch(asyncAddSumCreator(inputHowMuch - howMuch));

        setWhere(inputWhere);
        setHowMuch(inputHowMuch);
        setHider(!hider);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAccounting();
  }, []);

  return (
    <View style={ManageStyles.main}>
      <View style={ManageStyles.wrapperContent}>
        <View>
          <Text style={ManageStyles.textStyle}>{where}</Text>
        </View>
        <View>
          <Text style={ManageStyles.textStyle}>{getRightDate(date)}</Text>
        </View>
        <View>
          <Text style={ManageStyles.textStyle}>{howMuch}</Text>
        </View>
        {hider ? (
          <View style={ManageStyles.inputContainer}>
            <View style={styles.inputAccounting}>
              <Text>Куда было потрачено</Text>
              <TextInput
                style={styles.accountingInput}
                placeholder="Введите текст"
                onChange={(e) => setInputWhere(e.nativeEvent.text)}
              />
            </View>
            <View style={styles.inputAccounting}>
              <Text>Сколько было потрачено</Text>
              <TextInput
                style={styles.accountingInput}
                placeholder="Введите число"
                onChange={(e) => setInputHowMuch(+e.nativeEvent.text)}
                keyboardType="numeric"
              />
            </View>
          </View>
        ) : null}
        <View style={ManageStyles.buttonContainer}>
          <Pressable
            style={ManageStyles.pressableButton}
            onPress={onDeleteAccounting}
          >
            <Text>Delete</Text>
          </Pressable>
          {hider ? (
            <Pressable
              style={ManageStyles.pressableButton}
              onPress={(e) => onChangeAccounting()}
            >
              <Text>Save</Text>
            </Pressable>
          ) : (
            <Pressable
              style={ManageStyles.pressableButton}
              onPress={() => setHider(!hider)}
            >
              <Text>Change</Text>
            </Pressable>
          )}
          <Link to={"/"}>
            <Text>Back</Text>
          </Link>
        </View>
      </View>
    </View>
  );
};
