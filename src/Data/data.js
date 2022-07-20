import img1 from "../img/edificio1.jpg"
import img2 from "../img/edificio2.jpg"
import img3 from "../img/edificio3.jpg"
import img4 from "../img/edificio4.jpg"
import img5 from "../img/edificio5.jpg"
import img6 from "../img/edificio6.jpg"
import img7 from "../img/edificio7.jpg"
import img8 from "../img/edificio8.jpg"
import img9 from "../img/edificio9.jpg"


const edificios = [
    {
        nombre: "Tower Salesforce",
        img:img1,
        id:0
    },
    {
        nombre: "Burj Khalifa",
        img:img2,
        id:1
    },
    {
        nombre: "Chrysler",
        img:img3,
        id:2
    },
    {
        nombre: "Burj al Arab",
        img:img4,
        id:3
    },
    {
        nombre: "One World Trade Center",
        img:img5,
        id:4
    },
    {
        nombre: "Empire State",
        img:img6,
        id:5
    },
    {
        nombre: "Tower Eiffel",
        img:img7,
        id:6
    },
    {
        nombre: "Gran Torre Santiago",
        img:img8,
        id:7
    },
    {
        nombre: "Torres Dolfines",
        img:img9,
        id:8
    }

]



export const getEdificios = () => {
    return(
        new Promise((resolve) => {
            setTimeout(()=> {
                resolve(edificios)
            }, 500)
        })
    )
} 