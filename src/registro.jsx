import { useState } from "react";

const Form = () => {
    const [values, setValues] = useState({
        name: "",
        surname: "",
        age: "",
    });

    const handleInputChange = (event) => {
        const  {name, values} = event.target;
        setValues({
            ...values,
            [name]: values,
        });
    };

    const handleForm = (event ) => {
        event.preventDefoult();
        console.log(values);
    }

    return <div>
        <form action="enviar" onSubmit={handleForm}>
            <h1>Registro</h1>
            <input type="text" name="name" value={values.name} placeholder="ingrese su nombre" onChange={handleInputChange}/>
            <input type="text" name="surname" value={values.surname} placeholder="ingrese su apellido" onChange={handleInputChange}/>
            <input type="number" name="age" value={values.age} placeholder="ingrese su edad" onChange={handleInputChange}/>
            <button type="submit">Registrarse</button>
        </form>
    </div>
}

export default Form;