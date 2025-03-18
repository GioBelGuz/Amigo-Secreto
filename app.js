// Lista de los amigos
let amigos = [];

// Lista de los amigos sorteados
let amigosSorteados = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtener el valor de entrada
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    // Validar que el nombre no contenga números o caracteres especiales
    const regex = /^[A-Za-z\s]+$/; // Solo letras mayúsculas, minúsculas y espacios

        // Verificar si el input no está vacío
    if (nombreAmigo !== "") {

        if (!regex.test(nombreAmigo)) {
            // Si el nombre contiene números o caracteres especiales, mostrar un mensaje de error
            mostrarVentanaError("Por favor, ingresa solo letras y espacios.");
            return; // Salir de la función si no es válido
        }

        // Verificar si el nombre ya existe en la lista
        if (!amigos.includes(nombreAmigo)) {
            // Agregar el nombre al array de amigos
            amigos.push(nombreAmigo);

            // Limpiar el input después de agregar el nombre
            inputAmigo.value = "";

            // Actualizar la lista de amigos en la interfaz
            actualizarListaAmigos();

            // Mostrar un mensaje en el elemento de resultado
            mostrarMensaje(`Amigo agregado: ${nombreAmigo}`);
        } else {
            // Mostrar un mensaje si el nombre ya existe
            mostrarMensaje("Este nombre ya ha sido añadido.");
        }
    } else {
        // Mostrar un mensaje si el input está vacío
        mostrarMensaje("Por favor, ingresa un nombre válido.");
    }
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    
    // Limpiar la lista antes de actualizarla
    listaAmigos.innerHTML = "";

    // Recorrer el array de amigos y agregar cada nombre a la lista
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    // Verificar si todavía hay amigos por sortear
    if (amigos.length > 0) {
        // Generar un índice aleatorio basado en la cantidad de amigos restantes
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);

        // Obtener el nombre del amigo sorteado
        const amigoSorteado = amigos[indiceAleatorio];

        // Agregar el nombre sorteado al array de amigos sorteados
        amigosSorteados.push(amigoSorteado);

        // Eliminar el nombre sorteado del array de amigos restantes
        amigos.splice(indiceAleatorio, 1);

        // Mostrar el nombre del amigo sorteado en la interfaz
        mostrarMensaje(`El amigo secreto es: ${amigoSorteado}`);

        // Actualizar la lista de amigos en la interfaz
        actualizarListaAmigos();
    } else {
        // Mostrar un mensaje si ya no hay más amigos por sortear
        mostrarMensaje("¡Todos los amigos han sido sorteados!");
    }
}

// Función para mostrar mensajes en el elemento de resultado
function mostrarMensaje(mensaje) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${mensaje}</li>`;

}   
    // Función para mostrar una ventana flotante de error
function mostrarVentanaError(mensaje) {
    const errorDiv = document.createElement('div');
    errorDiv.classList.add('error-popup');
    errorDiv.textContent = mensaje;

    // Agregar la ventana de error al body
    document.body.appendChild(errorDiv);

    // Eliminar la ventana flotante después de 3 segundos
    setTimeout(() => {
        errorDiv.remove();
    }, 3000);

    // Función para mostrar los resultados en la tabla
function mostrarResultado(amigoSorteado) {
    const resultadoTabla = document.getElementById('resultado');
    
    // Crear una nueva fila
    const row = document.createElement('tr');
    
    // Crear la celda para el índice
    const cellIndex = document.createElement('td');
    cellIndex.textContent = resultadoTabla.children.length + 1; // Incrementa el número de la fila

    // Crear la celda para el nombre del amigo sorteado
    const cellName = document.createElement('td');
    cellName.textContent = amigoSorteado;
    
    // Agregar las celdas a la fila
    row.appendChild(cellIndex);
    row.appendChild(cellName);
    
    // Agregar la fila a la tabla
    resultadoTabla.appendChild(row);
}

// Función para sortear y mostrar el amigo secreto
function sortearAmigo() {
    if (amigos.length > 0) {
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSorteado = amigos[indiceAleatorio];
        
        // Mostrar el amigo sorteado en la tabla
        mostrarResultado(amigoSorteado);
        
        // Eliminar el amigo sorteado de la lista
        amigos.splice(indiceAleatorio, 1);
    } else {
        mostrarMensaje("¡Todos los amigos han sido sorteados!");
    }
}

// Función para mostrar mensajes
function mostrarMensaje(mensaje) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${mensaje}</li>`;
}
}