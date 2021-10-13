const setInlocalStoragePublic = (item) => {
    localStorage.setItem('userText', JSON.stringify(item));
};

const getUsersFromLocal = () => {
    // converte un string JSON a objeto;
    console.log(JSON.parse(localStorage.getItem('userText')));
    return JSON.parse(localStorage.getItem('userText'))['dummyPublicacion'];
};

useEffect(() => {
    const userPublic = localStorage.getItem('userText');
    console.log(userPublic);
    if (!userPublic) {
        console.log(dummyPublicacion);
        setInlocalStoragePublic(dummyPublicacion);
    }
}, [dummyPublicacion]);

const TEXTO_DATABASE = getUsersFromLocal();
console.log(TEXTO_DATABASE);
const NEW_TEXTO = { name: userCurrent.name, texto: texto };
console.log(NEW_TEXTO);
const textoOnTheDatabase = { dummyPublicacion: [...TEXTO_DATABASE].concat(NEW_TEXTO) };
console.log(textoOnTheDatabase);

setInlocalStoragePublic(textoOnTheDatabase);
console.log(typeof textoOnTheDatabase);

<ul className='list'>
<p className='user'>{userCurrent.name}</p>
    {for (const elemento of textoOnTheDatabase) {
        <li className='item-container'>
        <div className='user-text'>
            
            <span className='item-text'>{item.texto}</span>
        </div>
        <div className='drop'>
            <button className='btn-eliminar btn-list' type='submit'>
                Eli
            </button>
            <button className='btn-editar btn-list' type='submit'>
                Edi
            </button>
        </div>
    </li>
    }}
</ul>;
<li className='item-container'>
                        <div className='user-text'>
                            <p className='user'>{userCurrent.name}</p>
                            
                            
                        </div>
                    </li>