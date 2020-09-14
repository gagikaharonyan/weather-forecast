export function getImageFromNumber(iconNumber: number): string {
  if (iconNumber < 6) {
    return "https://www.flaticon.com/svg/static/icons/svg/869/869869.svg";
  }
  if (iconNumber > 5 && iconNumber < 29) {
    return "https://www.flaticon.com/svg/static/icons/svg/925/925647.svg";
  }
  if (iconNumber > 32 && iconNumber < 38) {
    return "https://www.flaticon.com/premium-icon/icons/svg/2987/2987960.svg";
  }
  if (iconNumber > 37) {
    return "https://www.flaticon.com/premium-icon/icons/svg/1207/1207640.svg";
  }

  return "https://www.flaticon.com/svg/static/icons/svg/990/990388.svg";
}

export function dateFormatConverter(date: string): string {
  return new Date(date).toString();
}

export function isDevelopment(): boolean {
  return process.env.NODE_ENV === 'development';
}
