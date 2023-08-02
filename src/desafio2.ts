// Para este desafío, te proponemos que pases este test.

// Para eso, tenés que crear una clase Banda, con las siguientes características:

// Un método constructor con los parámetros members y albums.
// members espera un array de strings
// albums espera un array de objetos con esta estructura: { title, songs: (array de strings) }
// Ambos parámetros (members y albums) deben guardarse en alguna propiedad del objeto.
// Un método llamado getFirstAlbum: debe devolver el primer álbum de la banda señalada.
// Un método llamado getAllAlbums: debe devolver todos los álbumes de la banda señalada.
// Un método llamado getAllMembers: debe devolver un array de strings con el nombre de todos los miembros de la banda señalada.
// Un método llamado getRandomSong(albumTitle): debe devolver una canción (string) del albumSeñalado en el parámetro.

// crear la clase Banda aquí

// no modificar este test
function testClaseBanda() {
	const members = ['jroberts', 'bpitt'];
	const fa = {
		title: 'album 1',
		songs: ['album 1 - tema 1', 'album 1 - tema 2'],
	};
	const banda = new Banda(members, [
		fa,
		{
			title: 'album 2',
			songs: ['album 2 - tema 1', 'album 2 - tema 2', 'album 2 - tema 3'],
		},
	]);

	const firstAlbum = banda.getFirstAlbum();
	const allMembers = banda.getAllMembers();
	const randomSongAlbum1 = banda.getRandomSong('album 1');

	if (
		firstAlbum.title == fa.title &&
		fa.songs.length == firstAlbum.songs.length &&
		JSON.stringify(allMembers.sort()) == JSON.stringify(members.sort()) &&
		fa.songs.includes(randomSongAlbum1)
	) {
		console.log('testClaseBanda passed');
	} else {
		throw 'testClaseBanda not passed';
	}
}

function main() {
	testClaseBanda();
}

main();
