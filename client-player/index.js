document.getElementById('fetch-button').addEventListener('click', createUser);

async function createUser() {
	renderLoadingState();
	try {
		const playerName = document.getElementById('name').value;
		const player = {
			name: playerName,
			profilePicture: 'https://avatar.iran.liara.run/public/13',
		};
		const response = await fetch('http://localhost:5050/user', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(player),
		});
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		renderData();
	} catch (error) {
		renderErrorState();
	}
}

function renderErrorState() {
	const container = document.getElementById('data-container');
	container.innerHTML = '<p>Failed to load data</p>';
	console.log('Failed to load data');
}

function renderLoadingState() {
	const container = document.getElementById('data-container');
	container.innerHTML = '<p>Loading...</p>';
	console.log('Loading...');
}

function renderData() {
	const container = document.getElementById('data-container');
	container.innerHTML = '<p>Player created</p>';
}
