import './slider.css'
export function Slider({title1 = 'Título 1', title2 = 'Título 2',title3 = 'Título 3',title4 = 'Título 4',desc1,desc2,desc3,desc4}){
    return(
           <artitle className="wrapper">
            <div className="container">

                <input type="radio" name="slide" id="c1" checked/>
                <label htmlFor="c1" className="card">
                    <div className="row">
                        <div className="icon">1</div>
                        <div className="description">
                            <h4>{title1}</h4>
                            <p>
                                {desc1}
                            </p>
                        </div>
                    </div>
                </label>

                <input type="radio" name="slide" id="c2" />
                <label htmlFor="c2" className="card">
                    <div className="row">
                        <div className="icon">2</div>
                        <div className="description">
                            <h4>{title2}</h4>
                            <p>
                                {desc2}
                            </p>
                        </div>
                    </div>
                </label>

                <input type="radio" name="slide" id="c3" />
                <label htmlFor="c3" className="card">
                    <div className="row">
                        <div className="icon">3</div>
                        <div className="description">
                            <h4>{title3}</h4>
                            <p>
                                {desc3}
                            </p>
                        </div>
                    </div>
                </label>

                <input type="radio" name="slide" id="c4" />
                <label htmlFor="c4" className="card">
                    <div className="row">
                        <div className="icon">4</div>
                        <div className="description">
                            <h4>{title4}</h4>
                            <p>
                                {desc4}
                            </p>
                        </div>
                    </div>
                </label>
            </div>
           </artitle>
    )
}