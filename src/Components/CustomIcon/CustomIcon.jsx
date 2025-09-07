export const CustomIcon = ({ size=30, icon="" }) => {
    return (
        <svg role="img" width={ size } height={ size } viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <image href={ `/logos/${ icon }.png` } width="24" height="24" />
        </svg>
    )
}