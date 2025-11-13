import 'styled-components'

interface StyleObject { [key: string] }

declare module 'styled-components' {
    export interface DefaultTheme {
        color: StyleObject,
        text: StyleObject,
        gap: StyleObject,
        borderRadius: StyleObject
    }
}