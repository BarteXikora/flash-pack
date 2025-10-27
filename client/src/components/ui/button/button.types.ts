type ButtonSize = 'big' | 'small'

type ButtonWidth = 'full' | 'narrow'

type ButtonPrimary = { $variant: 'primary' }

type ButtonSecondary = { $variant: 'secondary' }

type ButtonProps = (ButtonPrimary | ButtonSecondary) & {
    $size?: ButtonSize
    $width?: ButtonWidth
    disabled?: boolean
}

export default ButtonProps