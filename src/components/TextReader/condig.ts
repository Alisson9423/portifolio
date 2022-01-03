import angry from "../../assets/text-reader/angry.jpg";
import drink from "../../assets/text-reader/drink.jpg";
import food from "../../assets/text-reader/food.jpg";
import grandma from "../../assets/text-reader/grandma.jpg";
import happy from "../../assets/text-reader/happy.jpg";
import home from "../../assets/text-reader/home.jpg";
import hurt from "../../assets/text-reader/hurt.jpg";
import outside from "../../assets/text-reader/outside.jpg";
import sad from "../../assets/text-reader/sad.jpg";
import scared from "../../assets/text-reader/scared.jpg";
import school from "../../assets/text-reader/school.jpg";
import tired from "../../assets/text-reader/tired.jpg";

interface humanExpression {
    img: string;
    text: string;
}

export const humanExpressions: humanExpression[] = [
    {
        img: drink,
        text: "Estou com sede",
    },
    {
        img: food,
        text: "Estou com fome",
    },
    {
        img: tired,
        text: "Estou cansado",
    },
    {
        img: hurt,
        text: "Estou machucado",
    },
    {
        img: happy,
        text: "Estou feliz",
    },
    {
        img: angry,
        text: "Estou com raiva",
    },
    {
        img: sad,
        text: "Estou triste",
    },
    {
        img: scared,
        text: "Estou assustado",
    },
    {
        img: outside,
        text: "Quero ir lá fora",
    },
    {
        img: home,
        text: "Quero ir para casa",
    },
    {
        img: school,
        text: "Quero ir para escola",
    },
    {
        img: grandma,
        text: "Quero ver a vovó",
    },
];
