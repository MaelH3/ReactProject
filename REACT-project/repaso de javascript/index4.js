const obtenerInfoUsuario =(nombre, apellido, pais)=>{
    return `${nombre} ${apellido} es de ${pais}`
}

console.log(obtenerInfoUsuario('Juan', 'Ramirez', 'Bolivia'))