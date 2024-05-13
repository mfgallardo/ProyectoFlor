document.addEventListener("DOMContentLoaded", function () {
  // Función para validar el formulario
  function validarFormulario(event) {
    // Obtener los campos del formulario
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let mail = document.getElementById("mail").value;
    let telefono = document.getElementById("telefono").value;
    let region = document.querySelector('input[name="region"]:checked');
    let consulta = document.getElementById("consulta").value;
    let imagen = document.getElementById("imagen").value;
    let respuesta = document.getElementById("respuesta").value;

    console.log("Nombre:", nombre);
    console.log("Apellido:", apellido);
    console.log("Mail:", mail);
    console.log("Teléfono:", telefono);
    console.log("Región:", region);
    console.log("Consulta:", consulta);
    console.log("Imagen:", imagen);
    console.log("Respuesta:", respuesta);

    // Verificar que todos los campos obligatorios estén llenos
    if (
      nombre === "" ||
      apellido === "" ||
      mail === "" ||
      telefono === "" ||
      region === null ||
      consulta === "" ||
      imagen === "" ||
      respuesta === ""
    ) {
      // Mostrar un mensaje de error
      alert("Por favor complete todos los campos obligatorios.");
      // Prevenir que se envíe el formulario
      event.preventDefault();
    }
  }

  // Obtener el formulario
  let formulario = document.querySelector(".form-contact");
  // Agregar un listener para el evento submit
  formulario.addEventListener("submit", validarFormulario);
});
