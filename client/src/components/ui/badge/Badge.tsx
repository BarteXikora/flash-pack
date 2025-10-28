import StyledBadge from './Badge.styles'
import BadgeProps from './badge.tyles'

const Badge = ({ variant }: BadgeProps) => {
    return (
        <StyledBadge>
            <div className={`badge ${variant === 'outline' ? 'badge--outline' : ''}`}></div>
        </StyledBadge>
    )
}

export default Badge