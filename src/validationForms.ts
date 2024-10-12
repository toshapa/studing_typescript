interface ILogin {
    login: string
    password: string
}

type ValidatioForm<T> = {
    [K in keyof T]:
        | {
              isValid: true
          }
        | {
              isValid: false
              errorMassage: string
          }
}

const form: ILogin = {
    login: "tomy",
    password: "12345678",
}

const validationForm: ValidatioForm<ILogin> = {
    login: { isValid: true },
    password: { isValid: false, errorMassage: "Треба щось написати" },
}
