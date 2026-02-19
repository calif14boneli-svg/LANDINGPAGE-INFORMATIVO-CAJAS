import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {

  isWhatsAppMode = false;
  whatsappQuickMessage = '';
  mostrarModal = false;

  formData = {
    userType: 'cliente',
    consultType: '',
    docType: '',
    docNumber: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  mandarWhatsAppRapido() {
    if (!this.whatsappQuickMessage.trim()) return;

    const numero = '51956728372';
    const mensaje = `*Mensaje Rápido desde la Web*\n\n${this.whatsappQuickMessage}`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, '_blank');
    this.mostrarModal = true;
    this.whatsappQuickMessage = '';
  }

  mandarWhatsAppWeb() {
    console.log('Iniciando envío a WhatsApp...', this.formData);

    const numero = '51956728372'; // 👈 AQUÍ VA TU NÚMERO

    const mensaje = `
*Nuevo contacto desde la web*

👤 Tipo: ${this.formData.userType}
📋 Consulta: ${this.formData.consultType}

🆔 Documento:
- Tipo: ${this.formData.docType}
- Número: ${this.formData.docNumber}

🙍 Nombre: ${this.formData.name}
📧 Email: ${this.formData.email}
📞 Teléfono: ${this.formData.phone}

📝 Mensaje:
${this.formData.message}
    `;

    const mensajeCodificado = encodeURIComponent(mensaje);
    const url = `https://wa.me/${numero}?text=${mensajeCodificado}`;

    window.open(url, '_blank');

    // Mostrar modal de éxito
    this.mostrarModal = true;
  }

  cerrarModal() {
    this.mostrarModal = false;
    // Opcional: Limpiar formulario
    /*
    this.formData = {
      userType: 'cliente',
      consultType: '',
      docType: '',
      docNumber: '',
      name: '',
      email: '',
      phone: '',
      message: ''
    };
    */
  }

}
