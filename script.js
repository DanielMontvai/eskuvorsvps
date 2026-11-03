document.addEventListener('DOMContentLoaded', function() {
    // Tudok jönni gombok és extra kérdések
    const jovokIgen = document.getElementById('jovok-igen');
    const jovokNem = document.getElementById('jovok-nem');
    const extraQuestions = document.getElementById('extra-questions');

    function toggleExtraQuestions() {
        if (jovokIgen.checked) {
            extraQuestions.style.display = 'block';
        } else {
            extraQuestions.style.display = 'none';
        }
    }

    jovokIgen.addEventListener('change', toggleExtraQuestions);
    jovokNem.addEventListener('change', toggleExtraQuestions);

    // Űrlap elküldése
    const form = document.getElementById('rsvp-form');
    form.addEventListener('submit', function(e) {
        alert('Köszönjük a visszajelzést! Az adatokat elküldtük.');
    });
        
        // Form alaphelyzetbe állítása elküldés után
        form.reset();
        extraQuestions.style.display = 'none';
        gyerekSzamGroup.style.display = 'none';
    });

