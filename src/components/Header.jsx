import logo from '../img/harry_potter_logo.svg'

import Icon from './Icon'

export default function Header() {
	return (
		<header className="header">
			<Icon icon={logo} alt="Harry potter" />
		</header>
	)
}
