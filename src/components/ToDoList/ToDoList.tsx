import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllAccountings } from "../../api/FetchAllAccountings";
import { useTypedSelector } from "../../store";
import { asyncSetAccountingsCreator } from "../../redux/AccountingsReducer";
import { asyncSetSumCreator } from "../../redux/sumReducer";
import {
  Text,
  View,
  TextInput,
  ListRenderItem,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import { styles } from "../../../AppStyles";
import { Accounting } from "../Accounting/Accounting";
import { AccTypeId } from "../Accounting/AccountingsType";
import { AddButton } from "../AddButon/AddButton";
import { Link } from "react-router-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { StyledLink } from "../../styles/Link";

export default function ToDoList() {
  const dispatch = useDispatch();
  const accountings = useTypedSelector(
    (state) => state.accountingsReducer.accountings
  );
  const sum = useTypedSelector((state) => state.sumReducer.sum);
  const [whereInput, setWhere] = useState<string>("");
  const [howMuchInput, setHowMuch] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const fetchAccountings = async () => {
    try {
      const response = await getAllAccountings();
      dispatch(asyncSetAccountingsCreator(response.data.accountings));
      dispatch(asyncSetSumCreator(response.data.sum));
    } catch (error) {
      console.log(error);
    }
  };

  const renderAccounting: ListRenderItem<AccTypeId> = (props) => {
    return <Accounting
      key={props.item._id}
      _id={props.item._id}
      where={props.item.where}
      date={props.item.date}
      howMuch={props.item.howMuch}
      index={props.index}
    />
};

  const offset = useSharedValue(-255);

  const leftMenuSpringStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(offset.value, {
            damping: 20,
            stiffness: 200,
          }),
        },
      ],
    };
  });

  const onChangeMenuOpen = () => {
    setMenuOpen(!menuOpen);
    if (menuOpen) {
      offset.value = -255;
    } else {
      offset.value = -105;
    }
  };

  useEffect(() => {
    fetchAccountings();
  }, []);

  return (
    <>
      <View style={styles.main}>
        <Animated.View style={[styles.leftMenu, leftMenuSpringStyles]}>
          <View style={styles.leftMenuItems}>
            <StyledLink to={"/aboutUs"}>
              <Text>About us</Text>
            </StyledLink>
          </View>
          <View style={styles.menuImage}>
            <Pressable onPress={onChangeMenuOpen}>
              <Image
                style={styles.pressImage}
                source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
              />
            </Pressable>
          </View>
        </Animated.View>
        <View style={styles.header}>
          <Text style={styles.headerText}>Учёт моих расходов</Text>
        </View>
        <View style={styles.wrapperManaging}>
          <View style={styles.managing}>
            <View style={styles.inputAccounting}>
              <Text>Куда было потрачено</Text>
              <TextInput
                style={styles.accountingInput}
                placeholder="Введите текст"
                onChange={(e) => setWhere(e.nativeEvent.text)}
              />
            </View>
            <View style={styles.inputAccounting}>
              <Text>Сколько было потрачено</Text>
              <TextInput
                style={styles.accountingInput}
                placeholder="Введите число"
                onChange={(e) => setHowMuch(e.nativeEvent.text)}
                keyboardType="numeric"
              />
            </View>
            <View>
              <Text>{`Итого: ${sum} р.`}</Text>
              <AddButton where={whereInput} howMuch={howMuchInput} />
            </View>
          </View>
          <View style={styles.listContaner}>
            <FlatList
              data={accountings}
              renderItem={renderAccounting}
              keyExtractor={(item) => item._id}
            />
          </View>
        </View>
      </View>
    </>
  );
}
