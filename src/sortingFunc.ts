const data = [
    { id: 1, name: "Sergii" },
    { id: 2, name: "Anton" },
    { id: 3, name: "Chi" },
]

interface ID {
    id: number
}

function getSortingMethod<T extends ID>(
    data: T[],
    type: "asc" | "desc" = "asc"
): T[] {
    // function methodSort()
    return data.sort((a, b) => {
        switch (type) {
            case "asc":
                return a.id - b.id
            case "desc":
                return b.id - a.id
        }
    })
}

console.log(getSortingMethod(data, "desc"))
console.log(getSortingMethod(data))
