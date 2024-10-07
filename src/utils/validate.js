export const validteFormData  = (email, password, name) => {

    const validateEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

    const validatePassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!validateEmail) return "Email is not valid";

    if(!validatePassword) return "Password is not valid";

    if (name && !/^[a-zA-Z\s]+$/.test(name)) return "Name is not valid";

    return null;
}