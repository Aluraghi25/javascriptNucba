const pizzas = [
    {
        id: 1,
        nombre: 'muzzarella',
        ingredientes: ["muzzarella", "tomate", "oregano", "aceitunas"],
        precio: 950,
    },

    {
        id: 2,
        nombre: "jamon y huevo",
        ingredientes: ["muzzarella", "tomate", "oregano", "jamon", "huevo", "aceitunas"],
        precio: 1200,
    },

    {
        id: 3,
        nombre: "fugazzeta",
        ingredientes: ["provolone", "tomate", "oregano", "cebolla", "aceitunas"],
        precio: 1100,
    },

    {
        id: 4,
        nombre: "calabresa",
        ingredientes: ["muzzarella", "tomate", "oregano", "salame", "aceitunas"],
        precio: 1250,
    },

    {
        id: 5,
        nombre: "anchoas",
        ingredientes: ["muzzarella", "tomate", "oregano", "anchoas", "aceitunasNegras"],
        precio: 1500,
    },

    {
        id: 6,
        nombre: "primavera",
        ingredientes: ["muzzarella", "tomateCherry", "rucula", "aceitunas", "quesoParmesano", "oregano", "morron", "huevos"],
        precio: 1900,
    },

];

console.log(pizzas);

/* Punto A */

const pizzaImpar = pizzas.forEach ((pizzas) => {
    if(pizzas.id % 2 !==0) {
        console.log(`La pizza ${pizzas.nombre} tiene un ID impar`)
    }
});

/* Punto B*/

if(pizzas.precio < 600) {
    console.log("Si, tenemos pizzas que valen menos de $600")
} else {
    console.log("No, todas nuestras pizzas valen mas de $600")
};

/* Punto C */

const pizzaNombrePrecio = pizzas.forEach ((pizzas) => {
    console.log(`La pizza de ${pizzas.nombre} tiene un valor de ${pizzas.precio} pesos`)
});


