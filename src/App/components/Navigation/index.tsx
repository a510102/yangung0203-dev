import { useState, FC } from 'react';
import { Link } from 'react-router-dom';

export function Navigation() {
	const [isShowMenu, setShowMenu] = useState<boolean>(false);
	
	return (
		<nav className="header-nav">
			<h1 className="nav-logo">
				<Link to="/" className="nav-link">Logo</Link>
			</h1>
			<div className="nav-links">
				{isShowMenu && (
					<span 
						className="nav-link" 
						onClick={() => setShowMenu(!isShowMenu)}
					>Menu</span>
				)}
				{!isShowMenu && (
					<> 
						<LinkButton path='/memberInfo' frontText='Member' backText="成員" />
						<LinkButton path='/' frontText='Other' backText="其他" />
						<LinkButton path='/' frontText='Other' backText="其他" />
					</>)}
			</div>
		</nav>
	)
}

interface LinkButtonProps {
	path: string;
	frontText: string;
	backText: string;
}
 
const LinkButton: FC<LinkButtonProps> = ({ path, frontText, backText }) => {
	return (
		<Link to={path} className="nav-link">
			<div className="front">{frontText}</div>
			<div className="back">{backText}</div>
		</Link>
	)
}