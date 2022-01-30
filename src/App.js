import React , {useState} from 'react';
import './index.css'
import './App.css'
import './style.css'

const INTIAL_STATE = [
  { id : 1 , baslik : "Spora Git" , tamamlandi : false } ,
  { id : 2 , baslik : "Hafizeyi Sev" , tamamlandi : true } 
]

function App() {

  const [ liste , setListe ] = useState(INTIAL_STATE)
  const [ yeniBaslik , setYeniBaslik ] = useState('')

  return (

    <div className='App'>

      <h1> Yapılacaklar Listesi </h1>

      <div className='ekleme_formu'>
        <input 
        value={yeniBaslik}
        onChange={ (e) => setYeniBaslik( e.target.value ) }
        placeholder='listeye ekle' 
        /> 
        <button 
          onClick={ () => { 
            setListe( [ ...liste , { id : Date.now() , baslik : yeniBaslik , tamamlandi : false } ] ) 
            setYeniBaslik('')
            } } >
          Ekle </button>
      </div> 

      <div className='liste'>

        {
          liste.map( (item,i) => (
            <div 
              onClick={ () => {
                setListe( liste.map( (el) => (
                  el.id === item.id ? { ...el ,tamamlandi : !el.tamamlandi } : el
                 ) ) )
              } }
              key={i}
              className={ item.tamamlandi ? "yapildi" : "" } > 
            {item.baslik} </div>
          ) )
        }

      </div>


      <button 
      className='temizle'
      onClick={ () => setListe( liste.filter( (item) => (!item.tamamlandi) ) ) }
      > Tamamlananları Temizle </button>

    </div>

  )



}

export default App;

