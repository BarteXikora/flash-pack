import SectionTitle from '../../components/layout/sectionTitle/SectionTitle'
import BoxButton from '../../components/layout/boxButton/BoxButton'
import Separator from '../../components/ui/separator/Separator'
import Button from '../../components/ui/button/Button'

import type BoxButtonProps from '../../components/layout/boxButton/boxButton.types'
import iconAddBox from '../../assets/icon-add-box.svg'

const HomePage = () => {
    const __boxes: (BoxButtonProps & { id: string })[] = [{
        id: '0',
        name: 'Język japoński',
        currentSessionCardsCnt: 25,
    }, {
        id: '1',
        name: 'Język angielski - B2',
        currentSessionCardsCnt: 17,
        isNoNewCardsWarning: true
    }, {
        id: '2',
        name: 'Szkolenie w firmie',
        currentSessionCardsCnt: 0,
        isSessionDone: true
    }]

    return <>
        <SectionTitle>Twoje pudełka:</SectionTitle>

        {
            __boxes.filter(box => !box.isSessionDone).map(box => (
                <BoxButton key={box.id} {...box} />
            ))
        }

        <Separator />

        {
            __boxes.filter(box => box.isSessionDone).map(box => (
                <BoxButton key={box.id} {...box} />
            ))
        }

        <Button $variant='secondary' $width='narrow' $size='small'>
            <img src={iconAddBox} alt='Dodaj pudełko' />

            <span>Dodaj pudełko</span>
        </Button>
    </>
}

export default HomePage