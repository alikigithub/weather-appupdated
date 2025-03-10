import o01d from "../assets/o01d.png";
import o01n from "../assets/o01n.png";
import o02d from "../assets/o02d.png";
import o02n from "../assets/o02n.png";
import o03d from "../assets/o03d.png";
import o03n from "../assets/o03n.png";
import o09d from "../assets/o09d.png";
import o09n from "../assets/o09n.png";
import o11d from "../assets/o11d.png";
import o11n from "../assets/o11n.png";
import o13d from "../assets/o13d.png";
import o13n from "../assets/o13n.png";
import dividar from "../assets/Divider.png";
export const background: Record<string, string> = {
  "01d": o01d,
  "01n": o01n,
  "02d": o02d,
  "02n": o02n,
  "03d": o03d,
  "03n": o03n,
  "09d": o09d,
  "09n": o09n,
  "11d": o11d,
  "11n": o11n,
  "13d": o13d,
  "13n": o13n,
};
export const bgFinder = (value: string) => {
  switch (value) {
    case "04d":
      return "03d";

    case "04n":
      return "03n";
    case "10d":
      return "09d";
    case "10n":
      return "09n";
    case "50d":
      return "13d";
    case "50n":
      return "13n";
    default:
      return value;
  }
};
export const IMAGES = {
  divide: dividar,
};
