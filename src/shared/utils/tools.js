//En este caso en este archivo solo esta esta función pero es un archiv que puede servir para tener varias funciones reutilizables


export const formError = (errors, value)  => {
    return Object.keys(errors).includes(value)
  }