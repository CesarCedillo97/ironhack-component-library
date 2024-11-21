import { StyleSheet, TextInput } from 'react-native';

//hice esto para poder usar el tipo number en el input y el generic type
type InputType = string | number;

interface InputFieldInterface<T> {
  onChange: (value: T) => void;
  placeholder: string;
  value: string;
  type: T;
}

export default function InputField<T>({
  onChange,
  placeholder,
  value,
  type,
}: InputFieldInterface<InputType>) {
  //decidí hacer esto para que el placeholder no sea undefined (manejo de errores)
  const realPlaceholder = placeholder ?? 'Enter text';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    //hice esto para poder usar el tipo number en el input y poder regresar el valor correcto
    if (type === 'number') {
      onChange(Number(value));
      return;
    }
    onChange(value);
  };
  return (
    <TextInput
      value={value}
      onChange={(e) => handleChange}
      placeholder={realPlaceholder}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    margin: 10,
    maxWidth: 400,
    backgroundColor: '#fff',
    color: 'black',
  },
});
