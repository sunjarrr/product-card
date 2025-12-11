export class Modal {
  constructor(modalId, overlayId) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById(overlayId);
  }

  openModal() {
    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('open-overlay');
  }

  closeModal() {
    this.modal.classList.remove('modal-showed');
    this.overlay.classList.remove('open-overlay');
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed');
    }
  }

