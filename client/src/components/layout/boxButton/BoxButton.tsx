import StyledBoxButton from './BoxButton.styles'
import Button from '@components/ui/button/Button'
import Badge from '@components/ui/badge/Badge'

import declineByNumber from '@utils/declineByNumber/declineByNumber'

import type BoxButtonProps from './boxButton.types'

const BoxButton = ({ name, currentSessionCardsCnt, isSessionDone, isNoNewCardsWarning }: BoxButtonProps) => {
    const cardsToReviewText = `${currentSessionCardsCnt} ${declineByNumber(currentSessionCardsCnt, {
        singular: 'fiszka',
        plural: 'fiszki',
        genitive: 'fiszek',

    })} do przejrzenia`

    return (
        <StyledBoxButton>
            <Button $variant='secondary' $size='big' $width='full' className={isSessionDone ? 'box-done' : ''}>
                {!isSessionDone && <Badge variant={isNoNewCardsWarning ? 'outline' : 'full'} />}

                <h3>{name}</h3>

                <span>{isSessionDone ? 'Dzisiaj przejrzane' : cardsToReviewText}</span>

                {isNoNewCardsWarning && <span className="accent-primary warning">Brak nowych fiszek</span>}
            </Button>
        </StyledBoxButton>
    )
}

export default BoxButton