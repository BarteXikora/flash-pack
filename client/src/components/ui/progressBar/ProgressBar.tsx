import { useState, useEffect, useCallback } from 'react'
import StyledProgressBar from './ProgressBar.styles'
import type ProgressBarProps from './progressBar.types'

const ProgressBar = (props: ProgressBarProps) => {
    const calculateProgressWidth = useCallback((): string => {
        if (props.type === 'percent') {
            const percent = Math.max(0, Math.min(100, props.value))
            return `${percent}%`
        }

        const percent = (props.value / props.stepsCnt) * 100
        const clampedPercent = Math.max(0, Math.min(100, percent))
        return `${clampedPercent}%`

    }, [props.type, props.value, props.stepsCnt])

    const getDisplayData = useCallback((): string => {
        if (props.type === 'percent') {
            return `${Math.floor(props.value)}%`
        }

        return `${Math.floor(props.value)} z ${Math.floor(props.stepsCnt)}`

    }, [props.type, props.value, props.stepsCnt])

    const [displayData, setDisplayData] = useState<string>(getDisplayData())
    const [progressWidth, setProgressWidth] = useState<string>(calculateProgressWidth())

    useEffect(() => {
        setProgressWidth(calculateProgressWidth())
        setDisplayData(getDisplayData())

    }, [setProgressWidth, calculateProgressWidth, setDisplayData, getDisplayData])

    return (
        <StyledProgressBar className={props.variant === 'secondary' ? 'progress-bar--secondary' : undefined}>
            <div className="progress-bar__data-wrapper">
                <div className="progress-bar__data">{displayData}</div>
            </div>

            <div className="progress-bar__progress-wrapper">
                <div className="progress-bar__progress" style={{ width: progressWidth }}></div>
            </div>
        </StyledProgressBar>
    )
}

export default ProgressBar