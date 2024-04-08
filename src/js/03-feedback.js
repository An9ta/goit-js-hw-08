import throttle from 'lodash.throttle';

//Śledź w formularzu zdarzenie input, i za każdym razem zapisuj w local storage obiekt z
//polami email i message, w których przechowywane są aktualne wartości pól formularza.
//Niech kluczem do tych danych w storage będzie "feedback-form-state".

//Podczas przeładowywania strony sprawdzaj stan storage i jeśli są tam zapisane dane,
//wypełniaj nimi pola formularza.W przeciwnym wypadku pola powinny być puste.

//Po wysłaniu formularza wyczyść storage i pola formularza, a także wyloguj obiekt z
//polami email, message i ich aktualnymi wartościami do konsoli.

//Zrób tak, aby storage aktualizował się nie częściej niż raz na 500 milisekund.
//Aby to zrobić, użyj metody biblioteki lodash.throttle (dodaj ją do projektu).
