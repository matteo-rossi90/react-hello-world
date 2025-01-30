const rootEl = document.getElementById('root') // individuare l'elemento su cui si va a lavorare con js vanilla
const root = ReactDOM.createRoot(rootEl); //inizializzare React e creare il ReactDom che permetterà di renderizzare l'elemento selezionato

const h1 = React.createElement('h1', { // passare le proprietà che andranno a modificare il l'elemtno h1 del DOM
    style: { // stile di h1 da passare come oggetto
        color: 'green',
        width: '150px'
    },
    className: 'big', // aggiunta della classe all'elemento
    onClick: el => { // aggiunte dell'evento al click che mostrerà un console.log
        console.log(el.target)
    }
},
'Hello World' // passare l'elemento figlio in h1 come stringa
)

root.render(h1) // renderizza l'elemento h1