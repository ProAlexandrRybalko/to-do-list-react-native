import { Controller, useForm } from "react-hook-form";
import { View, TextInput, Pressable } from "react-native";
import { styles } from "../../styles/LoginSignupStyle";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "yup-phone";
import { Text } from "react-native";
import { useNavigate } from "react-router-native";

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export const Login = () => {
  const navigation = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => console.log(data);
  const onSignUp = () => {
    navigation("/signup");
  };

  return (
    <View style={[styles.form, styles.paddingTopLogin]}>
      <View style={styles.labelInputContainer}>
        <View style={styles.labelRequiredContainer}>
          <Text style={styles.label}>Email: </Text>
          {errors.email && <Text style={styles.required}>required</Text>}
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
          name="email"
        />
      </View>

      <View style={styles.labelInputContainer}>
        <View style={styles.labelRequiredContainer}>
          <Text style={styles.label}>Password: </Text>
          {errors.password && <Text style={styles.required}>required</Text>}
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
          name="password"
        />
      </View>

      <Pressable style={styles.buttonSubmit} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.titleButton}>Log in</Text>
      </Pressable>

      <Pressable onPress={onSignUp} style={styles.buttonLink}>
        <Text style={styles.signupText}>Sign up</Text>
      </Pressable>
    </View>
  );
};
