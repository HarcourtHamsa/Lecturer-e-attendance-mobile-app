export enum ColorScheme {
  primary = "primary",
  secondary = "secondary",
  ghost = "ghost",
  danger = "danger",
}

export enum InputType {
  text = "text",
  email = "email",
  password = "password",
}

export interface ICustomButton {
  label: string;
  colorScheme: ColorScheme;
  onPress?: () => void;
}

export interface ICustomInput {
  placeholder: string;
  type?: InputType;
  onChangeText?: (text: string) => void;
}

export interface ICustomLectureCard {
  title: string;
  level: string;
  onPress: () => void;
}
