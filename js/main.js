export default lista => {
    if(typeof lista === "string") return `<input type="submit" name="type-order" value="${lista}">`;
    if(typeof lista === "array" && lista.length <= 1) return `<input type="submit" name="type-order" value="${lista[0]}">`;

    return `<input type="submit" name="type-order" value="${lista[0]}"> <input type="submit" name="type-order" value="${lista[1]}">`;
}

// codigo de gpeto segun mejorado 

// // export default lista => {
//     if (typeof lista === "string") {
//         return `<input type="submit" name="type-order" value="${lista}">`;
//     }

//     if (Array.isArray(lista)) {
//         if (lista.length === 0) return ""; // Si la lista está vacía, devuelve un string vacío.
//         if (lista.length === 1) return `<input type="submit" name="type-order" value="${lista[0]}">`;
        
//         return lista.slice(0, 2).map(item => 
//             `<input type="submit" name="type-order" value="${item}">`
//         ).join(" ");
//     }

//     return ""; // Si no es ni string ni array, no devuelve nada.
// };
