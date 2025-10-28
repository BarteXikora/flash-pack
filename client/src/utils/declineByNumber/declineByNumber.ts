import type NumberDeclinations from './declineByNumber.types'

const declineByNumber = (cnt: number, { singular, plural, genitive }: NumberDeclinations): string => {
    if (cnt === 1) return singular

    if (cnt < 0) cnt *= -1

    const lastTwoDigits = cnt % 100
    if (lastTwoDigits > 10 && lastTwoDigits < 15) return genitive

    const lastDigit = cnt % 10
    if (lastDigit > 1 && lastDigit < 5) return plural

    return genitive
}

export default declineByNumber