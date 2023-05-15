(() => {
    const refstop = {
      openModalBtn: document.querySelector("[top-data-modal-open]"),
      closeModalBtn: document.querySelector("[top-data-modal-close]"),
      modal: document.querySelector("[top-data-modal]"),
    };
  
    refstop.openModalBtn.addEventListener("click", toggleModal);
    refstop.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refstop.modal.classList.toggle("is-hidden");
    }
  })();