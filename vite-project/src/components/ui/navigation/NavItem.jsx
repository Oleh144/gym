function NavItem({ link }) {
	return (
		<li>
			<a href={link.linkTo}>{link.text}</a>
		</li>
	);
}

export default NavItem;
