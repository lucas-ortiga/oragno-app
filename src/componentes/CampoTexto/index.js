import './CampoTexto.css'

const CampoTexto = (props) => {
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input id={props.label} placeholder={props.placeholder} />
        </div>
    )
}

export default CampoTexto;