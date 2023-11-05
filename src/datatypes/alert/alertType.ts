// type goBack = "DO YOU WANT TO INTERRUP THE QUESTIONNAIRE?" | "VUOI INTERROMPERE IL QUESTIONARIO?";
// type errorResult = "ANSWER ALL QUESTIONS BEFORE CONTINUING" | "RISPONDI A TUTTE LE DOMANDE PRIMA DI PROSEGUIRE";

interface AlertType {
    type: "errorResult" | "goBack"
    // title: goBack | errorResult
    toggle: boolean
    data?: number[]
}

export default AlertType