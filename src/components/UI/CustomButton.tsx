import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native"

interface CustomButtonProps extends TouchableOpacityProps {
  title?: string
  size?: 's' | 'm' | 'l'
  fillColor?: string
  typographyColor?: string
  isInline?: boolean
}

export const CustomButton = ({
  title,
  isInline,
  size = 'm',
  fillColor ,
  typographyColor = 'white',
  ...props
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        flexGrow: isInline ? undefined : 0,
        alignSelf: isInline ? 'flex-start' : 'auto',
        paddingVertical: (size === 's' && 4) || (size === 'm' &&  8) || (size === 'l' && 16) || 0,
        paddingHorizontal: (size === 's' && 8) || (size === 'm' && 16) || (size === 'l' && 24) || 0,
        borderRadius: 8,
        backgroundColor: fillColor,
      }}
      {...props}
    >
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text
          style={{
            fontSize: (size === 's' && 12) || (size === 'm' && 16) || (size === 'l' && 20) || 0,
            color: typographyColor,
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  )
}