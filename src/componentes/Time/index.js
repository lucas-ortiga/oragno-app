import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    const cssCorFundo = {backgroundColor: props.corSecundaria}
    const cssCorBarra = {borderColor: props.corPrimaria}

    return (
        (props.colaboradores.length > 0) ?
            <section className='time' style={cssCorFundo}>
                <h3 style={cssCorBarra}>{props.nome}</h3>
                <div className='colaboradores'>
                    {props.colaboradores.map(colaborador => <Colaborador 
                        key={colaborador.nome} 
                        nome={colaborador.nome} 
                        cargo={colaborador.cargo} 
                        imagem={colaborador.imagem} 
                        corDeFundo={props.corPrimaria} 
                    />)}
                </div>            
            </section>
        : <></>
    )
}

export default Time;