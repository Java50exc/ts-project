import { Container } from "./Container";
import { displaySquarePerimeter } from "./displayProps";
import { Rectangle } from "./Rectangle";
import { Square } from "./Square";
const rectangle: Rectangle = new Rectangle(3, 4);
const square: Square = new Square(10);
const container: Container = new Container([rectangle, square]);
displaySquarePerimeter(container);


