import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import styles from '../styles/Home.module.scss';

export default function Home() {
	return (
		<Container>
			<h1>Our App</h1>
			<Button>Press ME!</Button>
		</Container>
	);
}
