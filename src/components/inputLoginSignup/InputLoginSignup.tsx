import { View, Text, TextInput } from "react-native"
import { styles } from "../../styles/LoginSignupStyle"
import { Control, Controller, FieldError } from "react-hook-form";

type Tcontrol = Control<{
    phone?: string;
    email: string;
    password: string;
}, any>

type Terrors = {
    phone?: FieldError | undefined;
    email?: FieldError | undefined;
    password?: FieldError | undefined;
}

type Tname = "phone" | "email" | "password"

interface Icontrol {
    control: Tcontrol;
    errors: Terrors;
    name: Tname;
}

export const InputLoginSignup = (props: Icontrol) => {
    const { errors, control, name } = props;

    return (
        <View style={styles.labelInputContainer}>
        <View style={styles.labelRequiredContainer}>
          <Text style={styles.label}>Phone: </Text>
          {errors.phone && <Text style={styles.required}>required</Text>}
        </View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name={name}
        />
      </View>
    )
}