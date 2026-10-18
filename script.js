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

    // Gyerekek száma feltételes megjelenítés
    const gyerekIgen = document.getElementById('gyerek-igen');
    const gyerekNem = document.getElementById('gyerek-nem');
    const gyerekSzamGroup = document.getElementById('gyerek-szam-group');
    const gyerekekSzamaInput = document.getElementById('gyerekek_szama');

    function toggleGyerekSzam() {
        if (gyerekIgen.checked) {
            gyerekSzamGroup.style.display = 'block';
        } else {
            gyerekSzamGroup.style.display = 'none';
            gyerekekSzamaInput.value = ''; // Mező kiürítése, ha Nemet választ
        }
    }

    gyerekIgen.addEventListener('change', toggleGyerekSzam);
    gyerekNem.addEventListener('change', toggleGyerekSzam);

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
});
