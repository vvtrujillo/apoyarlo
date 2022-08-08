import {div, Button} from 'reactstrap'

const ListadoPersona = ({data, nombre,apellido, edad, colorpelo, nombreEnviar, apellidoEnviar, edadEnviar, colorpeloEnviar}) => {

    var nuevaEdad = edadEnviar;

    console.log(nuevaEdad);

    const aumentaEdad = () =>{
        
        nuevaEdad = parseInt(nuevaEdad) + 1;

        console.log('aca aumentamos la edad', nuevaEdad);
        return nuevaEdad;
    }

    return(
        <div classname='container'>
            <hr></hr>
            <h1>Resultado Componente</h1>
            <h2>{apellidoEnviar}, {nombreEnviar}</h2>
            <p>Edad: {nuevaEdad}</p>
            <p>Color de Pelo: {colorpeloEnviar}</p>
            <hr></hr>
            <Button color='primary' onClick={aumentaEdad}>aumentar edad</Button>
        </div>
    )

}

export default ListadoPersona;