import './App.css';
import Video from './pages/Video'

function App() {
	return (
		<div className="App">
			<div className='app__videos'>
				<Video
					likes={100}
					messages={200}
					shares={300}
					name='Kamila'
					description='Brecker o goleiro'
					music='Música épica'
					url='https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4'
				/>
				<Video
					likes={400}
					messages={500}
					shares={600}
					name='Pedro'
					description='Bird olhando para a câmera'
					music='Clap your hands'
					url = 'https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4'
				/>
			</div>
		</div>
	);
}

export default App;
