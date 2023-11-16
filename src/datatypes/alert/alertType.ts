interface AlertType {
  type: "errorResult" | "goBack";
  toggle: boolean;
  data?: number[];
}

export default AlertType;
