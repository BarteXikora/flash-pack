type ProgressBarPercent = {
    type: 'percent'
    value: number
    stepsCnt?: number
}

type ProgressBarSteps = {
    type: 'steps'
    value: number
    stepsCnt: number
}

type ProgressBarProps = (ProgressBarPercent | ProgressBarSteps) & {
    variant: 'primary' | 'secondary'
}

export default ProgressBarProps