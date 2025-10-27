type TopBarHome = { isHome: true }

type TopBarBack = { isHome: false, title: string, backBtnClickHandler: () => void }

type TopBarProps = TopBarHome | TopBarBack

export default TopBarProps