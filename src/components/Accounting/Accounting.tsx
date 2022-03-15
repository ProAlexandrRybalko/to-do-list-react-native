import { FC } from "react"
import { View, Text } from "react-native"
import { Link } from 'react-router-native'
import { styles } from "../../../AppStyles"
import { getRightDate } from "../../utils/date/getRightDate"
import { AccountingStyle } from "./AccountingStyle"
import { AccTypeSet } from "./AccountingsType"

export const Accounting: FC<AccTypeSet> = (props) => {
    const {where, date, howMuch, index, _id} = props;
    
    return (
        <>
            <Link to={`/accounting/` + _id}>
                <View style={AccountingStyle.accounting}>
                    <View style={AccountingStyle.where}>
                        <Text style={styles.fontAccounting}>{ `${index + 1}) ${where}` }</Text>
                    </View>
                    <View style={AccountingStyle.date}>
                        <Text style={styles.fontAccounting}>{ getRightDate(date) }</Text>
                    </View>
                    <View>
                        <Text style={styles.fontAccounting}>{ howMuch }</Text>
                    </View>
                </View>
            </Link>
        </>
    )
}