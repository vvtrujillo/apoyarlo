import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {Container, FormGroup,Label,Input,Form,Button} from 'reactstrap';
import ListadoPersona from './Complementos/ListadoPersona';


function App() {

  const[data, setData] = useState({
    nombre:'',
    apellido:'',
    edad:'',
    colorpelo:''
  });

  const handleInputChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setData({
        ...data,
        [event.target.name] : event.target.value
    })
}

  const [datosEnviar, setDatosEnviar] = useState({
    nombreEnviar:'',
    apellidoEnviar:'',
    edadEnviar:'',
    colorpeloEnviar:''
  })

  const enviarDatos = (evento) =>{
    evento.preventDefault();

    console.log('enviando datos....' + data.nombre + ' ' + data.apellido);

    setDatosEnviar({nombreEnviar:data.nombre, apellidoEnviar:data.apellido, edadEnviar:data.edad, colorpeloEnviar: data.colorpelo});

    console.log('enviando datos....' + data.nombre + ' ' + data.apellido + ' ' + data.edad + ' ' + data.colorpelo);
    
  }


  return (
    <div className='bg-light border container' fluid='sm'>
      <h1>Persona</h1>
      <Form onSubmit={enviarDatos}>
        <FormGroup>
          <Label>Nombre: </Label>
          <Input type='text' placeholder='Nombre...' name='nombre' onChange={handleInputChange}></Input>
        </FormGroup>
        <FormGroup>
          <Label>Apellido: </Label>
          <Input type='text' placeholder='Apellido...' name='apellido' onChange={handleInputChange}></Input>
        </FormGroup>
        <FormGroup>
          <Label>Edad: </Label>
          <Input type='number' placeholder='Edad...' name='edad' onChange={handleInputChange}></Input>
        </FormGroup>
        <FormGroup>
          <Label>Color de Pelo: </Label>
          <Input type='text' placeholder='Color de Pelo...' name='colorpelo' onChange={handleInputChange}></Input>
        </FormGroup>
        <hr></hr>        
        <Button color='primary' type='submit'>Enviar</Button>
      </Form>
      <ListadoPersona nombreEnviar={datosEnviar.nombreEnviar} apellidoEnviar={datosEnviar.apellidoEnviar} colorpeloEnviar={datosEnviar.colorpeloEnviar} edadEnviar={datosEnviar.edadEnviar}></ListadoPersona>
    </div>
  );
}

export default App;
