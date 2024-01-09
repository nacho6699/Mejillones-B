import './inicio.css'
import {Slider} from './slider'
import {Actividades} from './actividades'

const datos = {
    title1:'Gestión 2023',
    desc1:'☎️ 62 - 25844 / 72401242 📍Calle Lucas Jaimes',
    title2: 'Pasión por la tecnología',
    desc2: 'La capacidad para equilibrar la tecnología con la humanidad lo convierte en un estudiante ejemplar.',
    title3: 'Valores humanísticos en acción',
    desc3: 'Mejillones B también abraza los valores humanísticos.',
    title4: 'Futuro prometedor',
    desc4: 'Con un enfoque apasionado en la educación y la tecnología, Mejillones está bien encaminado hacia un futuro prometedor.'
}


export function Inicio(){
    return(
        <section className='section'>

           <Slider {...datos}/>
           <h2 className='title-activity'>Nuestras actividades</h2>
           <Actividades/>
        </section>
    )
}