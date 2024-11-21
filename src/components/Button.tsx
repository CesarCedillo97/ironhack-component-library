import { StyleSheet, Text, TouchableOpacity } from 'react-native';

//usé un generic type para poder hacer que los valores sean opcionales
type ConfigOptions<T> = Partial<Readonly<T>>;

//utilicé algunos types estáticos para poder hacer que los valores sean opcionales
interface ButtonProps {
  onClick: () => void;
  title: string;
  isDisabled: boolean;
  bgColor: 'red' | 'blue' | 'green' | 'yellow';
  textColor: 'white' | 'black';
}

export default function Button({
  onClick,
  title,
  isDisabled,
  textColor,
  bgColor,
}: ConfigOptions<ButtonProps>) {
  //Los puse así para que no sean undefined (manejo de errores)
  const realBgColor = bgColor ?? 'blue';
  const realTextColor = textColor ?? 'white';
  const realTitle = title ?? 'Click me';

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: realBgColor }]}
      onPress={onClick}
      disabled={isDisabled}
    >
      <Text style={{ color: realTextColor }}>{realTitle}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
