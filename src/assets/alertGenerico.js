import Swal from 'sweetalert2'

export function alertGenerico(icon, title, text, botonConfirmacion){
    Swal.fire({
        icon: icon,
        title: title,
        text: text,
        confirmButtonText: botonConfirmacion
    });
}