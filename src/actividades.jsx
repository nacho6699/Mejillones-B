import './actividades.css'
import imagen1 from './assets/promo2023.jpg'
import imagen2 from './assets/exporobot.jpg'
import imagen3 from './assets/reina.png'
import imagen4 from './assets/teatro.png'

let posts = [
    { id: 1, title: 'Promoción 2023', description: 'Solemne Acto de Graduación', image: imagen1, url:"https://www.facebook.com/permalink.php?story_fbid=pfbid02sU1MxEuh2TRjQzjXkV9EoqiybTHqeEXEmfhVs11YjmV53jUvduHFuix7cvZwLJsal&id=100076103257421"},
    { id: 2, title: 'Expo-robótica', description: 'Gran festival de danzas 2023', image: imagen2, url:"https://www.facebook.com/permalink.php?story_fbid=pfbid0PVFitnZZyZnd2VrVj9HXp4N2Ug4cPoj5NoCFgfGNbuSUDn8prVBqzScmukckomXcl&id=100076103257421"},
    { id: 3, title: 'Elección de la Reina', description: 'La reina 2023 brilla con elegancia en cada captura.', image: imagen3, url:"https://www.facebook.com/permalink.php?story_fbid=pfbid02VhY9JAXuEf6TyLVnvUiibkmwyoc594fSpviqZWYNJs1wos9znKvVMK6Zvf6Wu3kEl&id=100076103257421"},
    { id: 4, title: 'Obra teatral', description: '"Me Averguenzan tus Polleras"', image: imagen4, url:"https://www.facebook.com/100076103257421/videos/3519616228328069/"},
  ]
export function Actividades(){
    return(
        <article className='article-activity'>
           <div className="container-activity">
           {posts.map((post) => (
                <div className="activity-card" key={post.id}>
                    <img src={post.image}alt="" />
                    <div className="card-body">
                        <h2>{post.title}</h2>
                        <p className="card-desciption">
                            {post.description}
                        </p>
                    </div>
                    <a href={post.url} target="_blank" rel="noopener noreferrer">Ver más</a>
                </div>
            ))}

           </div>
           <aside className='activity-aside'>
           <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100076103257421&tabs=timeline&width=400&height=700&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=true&appId"
            width="400"
            height="700"
            style={{ border: 'none'}}
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            >    
            </iframe>
           </aside>
        </article>
    )
}