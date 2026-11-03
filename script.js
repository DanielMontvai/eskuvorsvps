document.addEventListener('DOMContentLoaded', function() {
    // 1. Tudok jönni gombok és extra kérdések kezelése
    const jovokIgen = document.getElementById('jovok-igen');
    const jovokNem = document.getElementById('jovok-nem');
    const extraQuestions = document.getElementById('extra-questions');

    function toggleExtraQuestions() {
        if (jovokIgen && jovokIgen.checked) {
            extraQuestions.style.display = 'block';
        } else if (extraQuestions) {
            extraQuestions.style.display = 'none';
        }
    }

    if (jovokIgen && jovokNem) {
        jovokIgen.addEventListener('change', toggleExtraQuestions);
        jovokNem.addEventListener('change', toggleExtraQuestions);
    }


    // 3. Űrlap elküldése (Formspree kompatibilis módon)
    const form = document.getElementById('rsvp-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            // Itt most hagyjuk, hogy a Formspree elküldje az adatot, 
            // az alert pedig jelzi a felhasználónak, hogy sikeres volt.
            alert('Köszönjük a visszajelzést! Az adatokat elküldtük.');
        });
    }
});