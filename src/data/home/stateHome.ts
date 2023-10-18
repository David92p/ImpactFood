import { StateHome } from "../../datatypes";

export const HOME_ENG: StateHome = {
  title: "Welcome to ImpactFood",
  subtitle: "To start the test, click on the button below.",
  btnDocumentation: [
    "Help",
    "Score calculation",
    "Why do it?",
    "Why is it useful?",
  ],
  toggleBtnDocumentation: false,
  documentation: {
    options: [
      "Start by clicking on the START button, the test is made up of 10 questions with 4 possible answers per question. Only one answer is the correct answer. Calculate your total score once the test is finished.",
      "The score is calculated based on your answers. Each correct answer gives you 1 point up to a maximum of 10. 1 to 4 points is a low score. 5 to 7 points is an average score. 8 to10 points is a high score.",
      "This test helps us understand the knowledge about food and the interest that people have in its impact on the planet.",
      "This test helps you understand and improve your knowledge about food and the impact it has on our planet.",
    ],
    description: "",
  },
};

export const HOME_ITA: StateHome = {
  title: "Benvenuto su ImpactFood",
  subtitle: "Per iniziare il test, clicca sul pulsante qui sotto.",
  btnDocumentation: [
    "Supporto",
    "Calcolo punteggio",
    "Perchè farlo?",
    "Perchè è utile?",
  ],
  toggleBtnDocumentation: false,
  documentation: {
    options: [
      "Inizia cliccando sul bottone START, il test è fatto di 10 domande con 4 possibili risposte per domanda. Una sola risposta è la risposta corretta. Calcola il tuo punteggio totale una volta terminato il test.",
      "Il punteggio viene calcolato in base alle tue risposte. Ogni risposta corretta ti aggiudica 1 punto fino ad un massimo di 10. Da 1 a 4 punti è uno score basso. Da 5 a 7 punti è uno score medio. Da 8 a 10 punti è uno score alto.",
      "Questo test ci aiuta a capire le conoscenze sul cibo e sull'interesse che le persone hanno nei confronti dell'impatto sul pianeta.",
      "Questo test ti aiuta a capire e migliorare le tue conoscenze sul cibo e l'impatto che esso ha sul nostro pianeta.",
    ],
    description: "",
  },
};
