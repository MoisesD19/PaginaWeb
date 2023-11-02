(function(){

    const sliders = [...document.querySelectorAll('.testimony__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;
    
    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });
    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });
    const changePosition = (add)=>{
        const currentTestimony = document.querySelector('.testimony__body--show').dataset.id;
        value = Number(currentTestimony);
        value += add;

        sliders[Number(currentTestimony)-1].classList.remove('testimony__body--show');
        if(value === sliders.length + 1 || value === 0){
            value = value === 0 ? sliders.length : 1;
        }

        sliders[value - 1].classList.add('testimony__body--show');

        document.addEventListener("DOMContentLoaded", function() {
            const contactForm = document.getElementById("contact-form");
            const submitButton = contactForm.querySelector("button[type='submit']");
        
            contactForm.addEventListener("submit", function(event) {
                event.preventDefault();
                submitButton.disabled = true; // Deshabilita el botón para evitar envíos duplicados.
        
                // Recopila los datos del formulario
                const name = document.getElementById("name").value;
                const email = document.getElementById("email").value;
                const subject = document.getElementById("subject").value;
                const message = document.getElementById("message").value;
        
                // Crea un objeto con los datos a enviar
                const formData = {
                    name: name,
                    email: email,
                    subject: subject,
                    message: message
                };
        
                // Realiza una solicitud POST al servidor
                fetch("url_del_servidor", {
                    method: "POST",
                    body: JSON.stringify(formData),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                .then(response => response.json())
                .then(data => {
                    // Habilita nuevamente el botón después de recibir la respuesta del servidor
                    submitButton.disabled = false;
        
                    if (data.success) {
                        // El envío fue exitoso, muestra un mensaje de confirmación al usuario
                        alert("Mensaje enviado con éxito");
                        // También puedes restablecer los campos del formulario si es necesario
                        contactForm.reset();
                    } else {
                        // El envío no fue exitoso, muestra un mensaje de error al usuario
                        alert("Error al enviar el mensaje. Por favor, inténtalo de nuevo.");
                    }
                })
                .catch(error => {
                    // Habilita nuevamente el botón en caso de errores
                    submitButton.disabled = false;
                    // Maneja errores de red u otros errores aquí
                    console.error("Error:", error);
                });
            });
        });
        

    }


})();