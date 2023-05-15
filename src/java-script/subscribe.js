(() => {
    // Modal var obj
    const ref = {
        openModalBtnsubscribe: document.querySelector("[data-subscribe-modal-open]"),
        closeModalBtnsubscribe: document.querySelector("[data-subscribe-modal-close]"),
        modalsubscribe: document.querySelector("[data-subscribe-modal]"),
    };

    // Modal events
    ref.openModalBtnsubscribe.addEventListener("click", toggleModalsubscribe);
    ref.closeModalBtnsubscribe.addEventListener("click", toggleModalsubscribe);

    // backdrop togle function
    function toggleModalsubscribe() {
        ref.modalsubscribe.classList.toggle("subscribe-backdrop-hiden");
    }
})();