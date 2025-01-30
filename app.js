const rootEl = document.getElementById('root') // individuare l'elemento su cui si va a lavorare con js vanilla
const root = ReactDOM.createRoot(rootEl); //inizializzare React e creare il ReactDom che permetterà di renderizzare l'elemento selezionato

const h1 = React.createElement('h1', { // passare le proprietà che andranno a modificare il l'elemtno h1 del DOM
    key: 'h1', //chiave univoca per distinguere gli elementi
    style: { // stile di h1 da passare come oggetto
        color: 'green',
        width: '200px'
    },
    className: 'big', // aggiunta della classe all'elemento
    onClick: el => { // aggiunte dell'evento al click che mostrerà un console.log
        console.log(el.target)
    }
},
    'Hello World' // passare l'elemento figlio in h1 come stringa
);
    const ul = React.createElement('ul', { //creare una nuova lista
        className: 'list', key: 'ul' // aggiungere la classe
    },
        [
            React.createElement('li', {key: 'php'}, 'PHP'), // creare gli elementi della lista
            React.createElement('li', {key: 'javaScript'}, 'javaScript'),
            React.createElement('li', {key: 'html'}, 'HTML'),
            React.createElement('li', {key: 'css'}, 'CSS')
        ]
)
    const div = React.createElement('div', { //creare un nuovo blocco
        className: 'main'
    },
        [h1, ul] // h1 e ul sono dentro l'elemento blocco

    )

root.render(div) // renderizza l'elemento div